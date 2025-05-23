<script setup lang="ts" generic="IsRange extends boolean = false">
import { computed, ref, useTemplateRef, watch } from "vue";

import OSliderThumb from "./SliderThumb.vue";
import OSliderTick from "./SliderTick.vue";

import { getDefault } from "@/utils/config";
import { isTrueish } from "@/utils/helpers";
import { defineClasses, useProviderParent } from "@/composables";

import type { SliderComponent } from "./types";
import type { SliderProps } from "./props";

/**
 * A slider to select a value or range from a given range.
 * @displayName Slider
 * @requires ./SliderTick.vue
 * @style _slider.scss
 */
defineOptions({
    isOruga: true,
    name: "OSlider",
    configField: "slider",
});

type ModelValue = SliderProps<IsRange>["modelValue"];

const props = withDefaults(defineProps<SliderProps<IsRange>>(), {
    override: undefined,
    modelValue: undefined,
    // range: false,
    min: 0,
    max: 100,
    step: 1,
    variant: () => getDefault("slider.variant"),
    size: () => getDefault("slider.size"),
    ticks: false,
    tooltip: () => getDefault("slider.tooltip", true),
    tooltipVariant: () => getDefault("slider.tooltipVariant"),
    tooltipAlways: false,
    rounded: () => getDefault("slider.rounded", false),
    disabled: false,
    lazy: false,
    formatter: undefined,
    biggerSliderFocus: false,
    indicator: false,
    format: () => getDefault("slider.format", "raw"),
    locale: () => getDefault("locale"),
    ariaLabel: () => getDefault("slider.ariaLabel"),
});

const emits = defineEmits<{
    /**
     * modelValue prop two-way binding
     * @param value {number | number[]} updated modelValue prop
     */
    "update:model-value": [value: ModelValue];
    /**
     * on value change event
     * @param value {number | number[]} updated modelValue prop
     */
    change: [value: ModelValue];
    /**
     * on dragging event
     * @param value {number | number[]} updated modelValue prop
     * */
    dragging: [value: ModelValue];
    /** on drag start event */
    dragstart: [];
    /** on drag end event */
    dragend: [];
}>();

const sliderRef = useTemplateRef("sliderElement");
const thumbStartRef = useTemplateRef("thumbStartComponent");
const thumbEndRef = useTemplateRef("thumbEndComponent");

// provided data is a computed ref to ensure reactivity
const provideData = computed<SliderComponent>(() => ({
    max: props.max,
    min: props.min,
}));

/** provide functionalities and data to child item components */
useProviderParent({ data: provideData });

const valueStart = ref<number>(0);
const valueEnd = ref<number>(0);
const dragging = ref(false);

const isThumbReversed = ref();
const isTrackClickDisabled = ref();

const minValue = computed(() =>
    Math.min(valueStart.value || props.min, valueEnd.value || props.max),
);

const maxValue = computed(() =>
    Math.max(valueStart.value || props.min, valueEnd.value || props.max),
);

const isRange = computed(() => isTrueish(props.range));

const vmodel = computed<ModelValue>(
    () =>
        (isRange.value
            ? [minValue.value, maxValue.value]
            : valueStart.value || 0) as ModelValue,
);

/** update vmodel value on internal value change */
watch([valueStart, valueEnd], () => {
    if (isRange.value)
        isThumbReversed.value =
            valueStart.value && valueEnd.value
                ? valueStart.value > valueEnd.value
                : false;
    if (!props.lazy || !dragging.value)
        emits("update:model-value", vmodel.value); // update external vmodel
    if (dragging.value) emits("dragging", vmodel.value);
});

/** When min, max or v-model is changed set the new active step. */
watch(
    [() => props.min, () => props.max, () => props.modelValue],
    () => setValues(props.modelValue),
    { immediate: true }, // initialise valueStart and valueEnd
);

function setValues(newValue: number | number[] | undefined): void {
    if (props.min > props.max) return;

    if (Array.isArray(newValue)) {
        const smallValue =
            typeof newValue[0] !== "number" || isNaN(newValue[0])
                ? props.min
                : Math.min(Math.max(props.min, newValue[0]), props.max);
        const largeValue =
            typeof newValue[1] !== "number" || isNaN(newValue[1])
                ? props.max
                : Math.max(Math.min(props.max, newValue[1]), props.min);
        valueStart.value = isThumbReversed.value ? largeValue : smallValue;
        valueEnd.value = isThumbReversed.value ? smallValue : largeValue;
    } else if (newValue !== undefined) {
        valueStart.value = isNaN(newValue)
            ? props.min
            : Math.min(props.max, Math.max(props.min, newValue));
        valueEnd.value = 0;
    } else {
        valueStart.value = props.min;
        valueEnd.value = props.min;
    }
}

const tickValues = computed(() => {
    if (!props.ticks || props.min > props.max || props.step === 0) return [];
    const result: number[] = [];
    for (let i = props.min + props.step; i < props.max; i = i + props.step) {
        result.push(i);
    }
    return result;
});

const barSize = computed(() =>
    isRange.value
        ? `${
              (100 * (maxValue.value - minValue.value)) /
              (props.max - props.min)
          }%`
        : `${
              (100 * (valueStart.value - props.min)) / (props.max - props.min)
          }%`,
);

const barStart = computed(() =>
    isRange.value
        ? `${(100 * (minValue.value - props.min)) / (props.max - props.min)}%`
        : "0%",
);

const barStyle = computed(() => ({
    width: barSize.value,
    left: barStart.value,
}));

function getSliderSize(): number {
    return sliderRef.value?.getBoundingClientRect().width || 0;
}

function onSliderClick(event: MouseEvent): void {
    if (props.disabled || isTrackClickDisabled.value) return;
    if (
        !sliderRef.value ||
        !thumbStartRef.value ||
        (isRange.value && !thumbEndRef.value)
    )
        return;

    const sliderOffsetLeft = sliderRef.value.getBoundingClientRect().left;
    const percent =
        ((event.clientX - sliderOffsetLeft) / getSliderSize()) * 100;
    const targetValue = props.min + (percent * (props.max - props.min)) / 100;
    const diffFirst = Math.abs(targetValue - valueStart.value);
    if (!isRange.value) {
        if (diffFirst < props.step / 2) return;
        thumbStartRef.value.setPosition(percent);
    } else {
        const diffSecond = Math.abs(targetValue - valueEnd.value);
        if (diffFirst <= diffSecond) {
            if (diffFirst < props.step / 2) return;
            thumbStartRef.value.setPosition(percent);
        } else {
            if (diffSecond < props.step / 2) return;
            if (isRange.value && thumbEndRef.value)
                thumbEndRef.value.setPosition(percent);
        }
    }
    emits("change", vmodel.value);
}

function onDragStart(): void {
    dragging.value = true;
    emits("dragstart");
}

function onDragEnd(): void {
    isTrackClickDisabled.value = true;
    // avoid triggering onSliderClick after dragend
    setTimeout(() => (isTrackClickDisabled.value = false));
    dragging.value = false;
    emits("dragend");
    if (props.lazy) emits("update:model-value", vmodel.value);
}

// --- Computed Component Classes ---

const rootClasses = defineClasses(
    ["rootClass", "o-slider"],
    [
        "sizeClass",
        "o-slider--",
        computed(() => props.size),
        computed(() => !!props.size),
    ],
    [
        "disabledClass",
        "o-slider--disabled",
        null,
        computed(() => props.disabled),
    ],
);

const trackClasses = defineClasses(["trackClass", "o-slider__track"]);

const fillClasses = defineClasses(
    ["fillClass", "o-slider__fill"],
    [
        "variantClass",
        "o-slider__fill--",
        computed(() => props.variant),
        computed(() => !!props.variant),
    ],
);

const thumbWrapperClasses = defineClasses(
    ["thumbWrapperClass", "o-slider__thumb-wrapper"],
    [
        "thumbWrapperDraggingClass",
        "o-slider__thumb-wrapper--dragging",
        null,
        dragging,
    ],
);

const thumbClasses = defineClasses(
    ["thumbClass", "o-slider__thumb"],
    ["thumbDraggingClass", "o-slider__thumb--dragging", null, dragging],
    [
        "thumbRoundedClass",
        "o-slider__thumb--rounded",
        null,
        computed(() => props.rounded),
    ],
);

// --- Expose Public Functionalities ---

/** expose functionalities for programmatic usage */
defineExpose({ value: vmodel });
</script>

<template>
    <div data-oruga="slider" :class="rootClasses" @click="onSliderClick">
        <div ref="sliderElement" :class="trackClasses">
            <div :class="fillClasses" :style="barStyle" />

            <template v-if="ticks">
                <o-slider-tick
                    v-for="(val, key) in tickValues"
                    :key="key"
                    :value="val"
                    :tick-class="tickClass"
                    :tick-hidden-class="tickHiddenClass"
                    :tick-label-class="tickLabelClass" />
            </template>

            <!--
                @slot Define additional slider ticks here
             -->
            <slot />

            <o-slider-thumb
                ref="thumbStartComponent"
                v-model="valueStart"
                :slider-props="props"
                :slider-size="getSliderSize"
                :thumb-classes="thumbClasses"
                :thumb-wrapper-classes="thumbWrapperClasses"
                @change="emits('change', vmodel)"
                @dragstart="onDragStart"
                @dragend="onDragEnd" />

            <o-slider-thumb
                v-if="isRange"
                ref="thumbEndComponent"
                v-model="valueEnd"
                :slider-props="props"
                :slider-size="getSliderSize"
                :thumb-classes="thumbClasses"
                :thumb-wrapper-classes="thumbWrapperClasses"
                @change="emits('change', vmodel)"
                @dragstart="onDragStart"
                @dragend="onDragEnd" />
        </div>
    </div>
</template>
