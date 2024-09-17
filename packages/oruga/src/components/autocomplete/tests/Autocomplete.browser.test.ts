import { describe, expect, test } from "vitest";

import { render } from "vitest-browser-vue";
import { userEvent } from "@vitest/browser/context";

import SimpleAutocomplete from "./SimpleAutocomplete.vue";

describe("<Autocomplete>", () => {
    test("works", async () => {
        const screen = render(SimpleAutocomplete);
        screen.debug();
        const input = screen.getByRole("combobox");
        await input.click();
        await userEvent.keyboard("j{ArrowDown}{ArrowDown}{Enter}");
        expect.element(input).toHaveValue("Node.js");
    });
});