<template>
    <section class="odocs-spaced">
        <p>
            <o-tooltip label="Tooltip">
                <o-button label="Hover me! " />
            </o-tooltip>

            <o-tooltip label="delayed by 1000ms" :delay="1000">
                <o-button variant="warning" label="Delayed" />
            </o-tooltip>

            <o-tooltip label="I'm on body" teleport>
                <o-button variant="info" label="Append on body" />
            </o-tooltip>
        </p>
    </section>
</template>
