<script setup lang="ts">
import type { InspectData } from "@docs";
import type {
    StepsClasses,
    StepItemClasses,
    StepsProps,
    StepItemProps,
} from "../props";

const inspectData: InspectData<
    StepsClasses & StepItemClasses,
    StepsProps<unknown> & StepItemProps<unknown>
> = {
    rootClass: {
        class: "rootClass",
        description: "Class of the root element.",
    },
    mobileClass: {
        class: "mobileClass",
        description: "Class of the root element when on mobile.",
        info: "Switch to mobile view to see it in action!",
    },
    sizeClass: {
        class: "sizeClass",
        description: "Size of the root element with size.",
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
    positionClass: {
        class: "positionClass",
        description:
            "Class of the root element when is vertical and has position.",
        properties: ["position", "vertical"],
        suffixes: ["left", "right", "centered"],
        action: (data): void => {
            data.vertical = true;
            data.position = "right";
        },
    },
    verticalClass: {
        class: "verticalClass",
        description: "Class of the root element when is vertical.",
        properties: ["vertical"],
        action: (data): void => {
            data.vertical = true;
        },
    },
    listClass: {
        class: "listClass",
        description: "Class of the list container element.",
    },
    animatedClass: {
        class: "animatedClass",
        description: "Class of the list container when animated.",
        properties: ["animated"],
        action: (data): void => {
            data.animated = true;
        },
    },
    dividerClass: {
        class: "dividerClass",
        description: "Class of the item divider element.",
    },
    markerClass: {
        class: "markerClass",
        description: "Class of the item marker element.",
    },
    markerRoundedClass: {
        class: "markerRoundedClass",
        description: "Class of the item marker element when rounded.",
        properties: ["rounded"],
        action: (data): void => {
            data.position = "right";
        },
    },
    contentClass: {
        class: "contentClass",
        description: "Class of the panel container element.",
    },
    transitioningClass: {
        class: "transitioningClass",
        description: "Class of the panel container element when transitioning.",
        info: "Click on a marker to see it in action!",
    },
    navigationClass: {
        class: "navigationClass",
        description: "Class of the navigation element",
    },
    stepClass: {
        class: "stepClass",
        subitem: "stepitem",
        description: "Class of the step item element.",
    },
    stepActiveClass: {
        class: "stepActiveClass",
        subitem: "stepitem",
        description: "Class of the step item element when active.",
    },
    stepVariantClass: {
        class: "stepVariantClass",
        subitem: "stepitem",
        description:
            "Class of the step item element with variant (default value by parent steps component).",
        properties: ["variant"],
        suffixes: ["primary", "info", "warning", "danger"],
        action: (data): void => {
            data.variant = "warning";
        },
    },
    stepPositionClass: {
        class: "stepPositionClass",
        subitem: "stepitem",
        description: "Class of the step item element when positioned.",
        properties: ["labelPosition"],
        suffixes: ["bottom", "right", "left"],
        action: (data): void => {
            data.labelPosition = "right";
        },
    },
    stepClickableClass: {
        class: "stepClickableClass",
        subitem: "stepitem",
        description: "Class of the step item element when clickable.",
        properties: ["clickable"],
    },
    stepDisabledClass: {
        class: "stepDisabledClass",
        subitem: "stepitem",
        description: "Class of the step item element when disabled.",
        properties: ["disabled"],
    },
    stepPreviousClass: {
        class: "stepPreviousClass",
        subitem: "stepitem",
        description: "Class of the step item element before the active one.",
        action: (data): void => {
            data.modelValue = 2;
        },
    },
    stepNextClass: {
        class: "stepNextClass",
        subitem: "stepitem",
        description: "Class of the step item element after the active one.",
        action: (data): void => {
            data.modelValue = 2;
        },
    },
    stepLabelClass: {
        class: "stepLabelClass",
        subitem: "stepitem",
        description: "Class of the step item label element.",
    },
    stepIconClass: {
        class: "stepIconClass",
        subitem: "stepitem",
        description: "Class of the step item icon element.",
    },
    stepPanelClass: {
        class: "stepPanelClass",
        subitem: "stepitem",
        description: "Class of the step panel element.",
    },
};
</script>

<template>
    <inspector-wrapper v-slot="props" :inspect-data="inspectData">
        <o-steps v-bind="props">
            <o-step-item
                v-bind="props"
                label="Account"
                icon="user-lock"
                step="1">
                <h1 class="title has-text-centered">Account</h1>
                Lorem ipsum dolor sit amet.
            </o-step-item>
            <o-step-item
                v-bind="props"
                label="Profile"
                icon="user"
                step="2"
                clickable>
                <h1 class="title has-text-centered">Profile</h1>
                Lorem ipsum dolor sit amet.
            </o-step-item>
            <o-step-item
                v-bind="props"
                label="Social"
                icon="user-plus"
                step="3">
                <h1 class="title has-text-centered">Social</h1>
                Lorem ipsum dolor sit amet.
            </o-step-item>
        </o-steps>
    </inspector-wrapper>
</template>
