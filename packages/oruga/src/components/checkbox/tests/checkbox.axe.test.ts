import { afterEach, describe, expect, test } from "vitest";
import { enableAutoUnmount, mount } from "@vue/test-utils";
import { axe } from "jest-axe";
import { nextTick } from "vue";

import OCheckbox from "../Checkbox.vue";
import type { CheckboxProps } from "../props";

describe("Checkbox axe tests", () => {
    enableAutoUnmount(afterEach);

    const a11yCases: { title: string; props?: CheckboxProps<unknown> }[] = [
        {
            title: "axe checkbox - base case",
            props: { label: "Checkbox Label" },
        },
        {
            title: "axe checkbox - indeterminate case",
            props: { label: "Checkbox Label", indeterminate: true },
        },
        {
            title: "axe checkbox - id case",
            props: { label: "Checkbox Label", id: "my-id" },
        },
        {
            title: "axe checkbox - variant case",
            props: { label: "Checkbox Label", variant: "success" },
        },
        {
            title: "axe checkbox - size case",
            props: { label: "Checkbox Label", size: "large" },
        },
        {
            title: "axe checkbox - required case",
            props: { label: "Checkbox Label", required: true },
        },
        {
            title: "axe checkbox - disabled case",
            props: { label: "Checkbox Label", disabled: true },
        },
    ];

    test.each(a11yCases)("$title", async ({ props }) => {
        const wrapper = mount(OCheckbox, {
            props: { ...props },
            attachTo: document.body,
        });
        await nextTick(); // await child items got rendered

        expect(await axe(wrapper.element)).toHaveNoViolations();
    });
});
