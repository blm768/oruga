<template>
    <section>
        <o-field label="Name">
            <o-input model-value="Kevin Garvey" />
        </o-field>

        <o-field label="Email" variant="danger" message="This email is invalid">
            <o-input type="email" model-value="john@" :maxlength="30" />
        </o-field>

        <o-field
            label="Username"
            variant="success"
            message="This username is available">
            <o-input model-value="johnsilver" :maxlength="30" />
        </o-field>

        <o-field label="Password" variant="warning">
            <o-input
                model-value="123"
                type="password"
                :maxlength="30"
                autocomplete="off" />
        </o-field>

        <o-field label="Subject">
            <o-select placeholder="Select a subject">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </o-select>
        </o-field>

        <o-field
            label="Multiple Messages"
            variant="danger"
            :message="['Selected option is wrong', 'Option is required']">
            <o-select placeholder="Select an option">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </o-select>
        </o-field>
    </section>
</template>
