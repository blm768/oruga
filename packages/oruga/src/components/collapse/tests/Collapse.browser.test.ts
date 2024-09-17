import { describe, expect, test } from "vitest";

import { render } from "vitest-browser-vue";

import SimpleCollapse from "./SimpleCollapse.vue";

describe("<Collapse>", () => {
    test("works", async () => {
        const screen = render(SimpleCollapse);
        const first = screen.getByTestId("collapse-0");
        const firstContent = screen.getByTestId("content-0");
        expect.element(firstContent).toBeVisible();
        const secondContent = screen.getByTestId("content-0");
        expect.element(secondContent).not.toBeVisible();
        const trigger = first.getByRole("button");
        await trigger.click();
        expect.element(firstContent).not.toBeVisible();
    });
});
