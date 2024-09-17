import { defineWorkspace } from "vitest/config";

const browserTestPattern = "**/*.browser.test.{ts,js}";

export default defineWorkspace([
    {
        extends: "vite.config.js",
        test: {
            exclude: [browserTestPattern],
        },
    },
    {
        extends: "vite.config.js",
        test: {
            include: [browserTestPattern],
            name: "oruga-browser",
            browser: {
                enabled: true,
                provider: "playwright",
                name: "chromium",
            },
        },
    },
]);
