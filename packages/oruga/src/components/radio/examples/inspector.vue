<script setup lang="ts">
import type { InspectData } from "@docs";
import type { RadioClasses, RadioProps } from "../props";

const inspectData: InspectData<RadioClasses, RadioProps<unknown>> = {
    rootClass: {
        class: "rootClass",
        description: "Class of the root element.",
    },
    checkedClass: {
        class: "checkedClass",
        description: "Class of the root element when checked.",
        properties: ["modelValue"],
        action: (data): void => {
            data.modelValue = true;
        },
    },
    sizeClass: {
        class: "sizeClass",
        description: "Class of the root element with size.",
        properties: ["size"],
        suffixes: ["small", "medium", "large"],
        action: (data): void => {
            data.size = "large";
        },
    },
    variantClass: {
        class: "variantClass",
        description: "Class of the root element with variant.",
        properties: ["variant"],
        suffixes: ["primary", "info", "warning", "danger"],
        action: (data): void => {
            data.variant = "warning";
        },
    },
    disabledClass: {
        class: "disabledClass",
        description: "Class of the root element when disabled.",
        properties: ["disabled"],
        action: (data): void => {
            data.disabled = true;
        },
    },
    inputClass: {
        class: "inputClass",
        description: "Class of the native input element.",
    },
    labelClass: {
        class: "labelClass",
        description: "Class of the radio label element.",
    },
};
</script>

<template>
    <inspector-wrapper v-slot="props" :inspect-data="inspectData">
        <o-radio v-bind="props"> Radio </o-radio>
    </inspector-wrapper>
</template>
