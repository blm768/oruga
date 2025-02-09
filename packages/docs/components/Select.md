# Select

<div class="vp-doc">

> Select an item in a dropdown list. Use with Field to access all functionalities

</div>

<div class="vp-example">

## Examples

<example-select />

</div>
<div class="vp-example">

## Class props

<inspector-select-viewer />

</div>

<div class="vp-doc">

## Select component

> Select an item in a dropdown list. Use with Field to access all functionalities

```html
<o-select></o-select>
```

### Props

| Prop name          | Description | Type | Values | Default                                                                                                                                               |
| ------------------ | ----------- | ---- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| autocomplete       |             |      | -      | <div><small>From <b>config</b>:</small></div><code style='white-space: nowrap; padding: 0;'>select: {<br>&nbsp;&nbsp;autocomplete: "off"<br>}</code>  |
| customValidation   |             |      | -      | <code style='white-space: nowrap; padding: 0;'>""</code>                                                                                              |
| disabled           |             |      | -      | <code style='white-space: nowrap; padding: 0;'>false</code>                                                                                           |
| expanded           |             |      | -      | <code style='white-space: nowrap; padding: 0;'>false</code>                                                                                           |
| icon               |             |      | -      | <div><small>From <b>config</b>:</small></div><code style='white-space: nowrap; padding: 0;'>select: {<br>&nbsp;&nbsp;icon: undefined<br>}</code>      |
| iconClickable      |             |      | -      | <code style='white-space: nowrap; padding: 0;'>false</code>                                                                                           |
| iconPack           |             |      | -      | <div><small>From <b>config</b>:</small></div><code style='white-space: nowrap; padding: 0;'>select: {<br>&nbsp;&nbsp;iconPack: undefined<br>}</code>  |
| iconRight          |             |      | -      | <div><small>From <b>config</b>:</small></div><code style='white-space: nowrap; padding: 0;'>select: {<br>&nbsp;&nbsp;iconRight: undefined<br>}</code> |
| iconRightClickable |             |      | -      | <code style='white-space: nowrap; padding: 0;'>false</code>                                                                                           |
| iconRightVariant   |             |      | -      |                                                                                                                                                       |
| id                 |             |      | -      | Default function (see source code)                                                                                                                    |
| v-model            |             |      | -      | <code style='white-space: nowrap; padding: 0;'>null</code>                                                                                            |
| nativeSize         |             |      | -      |                                                                                                                                                       |
| options            |             |      | -      |                                                                                                                                                       |
| override           |             |      | -      |                                                                                                                                                       |
| placeholder        |             |      | -      |                                                                                                                                                       |
| required           |             |      | -      | <code style='white-space: nowrap; padding: 0;'>false</code>                                                                                           |
| rounded            |             |      | -      | <code style='white-space: nowrap; padding: 0;'>false</code>                                                                                           |
| size               |             |      | -      | <div><small>From <b>config</b>:</small></div><code style='white-space: nowrap; padding: 0;'>select: {<br>&nbsp;&nbsp;size: undefined<br>}</code>      |
| statusIcon         |             |      | -      | <div><small>From <b>config</b>:</small></div><code style='white-space: nowrap; padding: 0;'>{<br>&nbsp;&nbsp;statusIcon: true<br>}</code>             |
| useHtml5Validation |             |      | -      | <div><small>From <b>config</b>:</small></div><code style='white-space: nowrap; padding: 0;'>{<br>&nbsp;&nbsp;useHtml5Validation: true<br>}</code>     |
| variant            |             |      | -      | <div><small>From <b>config</b>:</small></div><code style='white-space: nowrap; padding: 0;'>select: {<br>&nbsp;&nbsp;variant: undefined<br>}</code>   |

### Events

| Event name        | Properties                                                                           | Description                     |
| ----------------- | ------------------------------------------------------------------------------------ | ------------------------------- |
| update:modelValue | **value** `string \| number \| boolean \| object \| array` - updated modelValue prop | modelValue prop two-way binding |
| focus             | **event** `Event` - native event                                                     | on input focus event            |
| blur              | **event** `Event` - native event                                                     | on input blur event             |
| invalid           | **event** `Event` - native event                                                     | on input invalid event          |
| icon-click        | **event** `Event` - native event                                                     | on icon click event             |
| icon-right-click  | **event** `Event` - native event                                                     | on icon right click event       |

### Slots

| Name        | Description                                   | Bindings |
| ----------- | --------------------------------------------- | -------- |
| placeholder | Override the placeholder                      |          |
| default     | Override the options, default is options prop |          |

</div>

<div class="vp-doc">

## Sass variables

<div class="theme-oruga">

> Current theme ➜ _[Oruga](https://github.com/oruga-ui/theme-oruga)_

| SASS Variable                 | Default                                               |
| ----------------------------- | ----------------------------------------------------- |
| $select-background-color      | #fff                                                  |
| $select-border-color          | var(--#{$prefix}grey-lighter)                         |
| $select-border-style          | solid                                                 |
| $select-border-width          | 1px                                                   |
| $select-border-radius         | var(--#{$prefix}base-border-radius)                   |
| $select-rounded-border-radius | var( --#{$prefix}base-border-radius-rounded)          |
| $select-box-shadow            | $control-box-shadow                                   |
| $select-color                 | #363636                                               |
| $select-icon-zindex           | 4                                                     |
| $select-height                | $control-height                                       |
| $select-line-height           | var(--#{$prefix}base-line-height)                     |
| $select-margin                | 0                                                     |
| $select-padding               | $control-padding-vertical $control-padding-horizontal |
| $select-arrow-color           | $select-color                                         |
| $select-arrow-size            | 1rem                                                  |
| $select-placeholder-opacity   | var(--#{$prefix}base-disabled-opacity)                |

See ➜ 📄 [Full scss file](https://github.com/oruga-ui/theme-oruga/tree/main/src/assets/scss/components/_select.scss)

</div><div class="theme-bulma">

> Current theme ➜ _[Bulma](https://github.com/oruga-ui/theme-bulma)_

<p>The theme does not have any custom variables for this component.</p>
</div><div class="theme-bootstrap">

> Current theme ➜ _[Bootstrap](https://github.com/oruga-ui/theme-bootstrap)_

<p>The theme does not have any custom variables for this component.</p>
</div>

</div>
