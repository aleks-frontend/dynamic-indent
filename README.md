# Dynamic Indent
## Instructions
### HTML Implementation
Custom class `js-dynamicIndent-container` needs to be added to all the container elements which have `heading 1` and 
`heading 2` formatting options. And where the dynamic indetation functionality is required.

### CSS Implementation
`<output>` element's styling needs to be added to CSS.  
Only reqired properties are `display: inline-block` and desired `width` (width will be the wdith of the actual indentation).

Here is an example:
```     
/* Additional styles for custom dynamic indentation */
output { 
  display: inline-block;
  width: 0.77rem; 
}
```
