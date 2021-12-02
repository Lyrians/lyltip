# lyltip
Lyltip | JQuery tooltip plugin | Themes, Easy configuration, Themes by elements

Lyltip is a simple JQuery plugin to create tooltips.

Characteristics:
- Main theme
- Simple configuration
- Themes for each element

**Default configuration**
```Javascript
$("element").lyltip({
	rounded: true,
	theme: "dark",
	margin: 18,
	themes: []
});
```
## Configuration
| Setting | value | Description |
| :---:   | :-: | :-: |
| Rounded | true/false | Rounded corners |
| Theme | See list | Main theme |
| Margin | Number | Margin tooltip/element |
| Themes | Object | List of elements |
## Themes for each elements
```Javascript
$("element").lyltip({
    themes: {
        // elementClassName : theme name
        "myDangerElement": "danger",
        "mySuccessElement": "info"
    }
});
```
### Themes
| Theme name | HEX Code |
| :--------: | :------: |
| info       | #FFFFFF  |
| danger     | #FFFFFF  |
| warning    | #FFFFFF  |
| success    | #FFFFFF  |
| dark       | #FFFFFF  |
| light      | #FFFFFF  |
