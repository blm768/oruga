<script setup lang="ts">
import type { InspectData } from "@docs";
import type { IconClasses, IconProps } from "../props";

const inspectData: InspectData<IconClasses, IconProps> = {
    rootClass: {
        class: "rootClass",
        description: "Class of the root element.",
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
    clickableClass: {
        class: "clickableClass",
        description: "Class of the root element when clickable.",
        properties: ["clickable"],
        action: (data): void => {
            data.clickable = true;
        },
    },
    spinClass: {
        class: "spinClass",
        description: "Class of the root element when spin.",
        properties: ["spin"],
        action: (data): void => {
            data.spin = true;
        },
    },
};
</script>

<template>
    <inspector-wrapper v-slot="props" :inspect-data="inspectData">
        <o-icon pack="ionicons" icon="home" size="large" v-bind="props" />
    </inspector-wrapper>
</template>
