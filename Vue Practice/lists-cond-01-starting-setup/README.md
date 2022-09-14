# Concepts Learned

### Conditional Rendering

- **v-if**
- **v-else-if** --> it should always use in the immediate sibling of v-if
- \*_v-else_ --> it should always use in the immediate sibling of v-if / v-else-if

Note: all the above directives should use in the HTML elements

- **v-show** --> it is used when we want to change the display property to **none** and **visible**. the element is present in the DOM event though the condition is failed but with **display:none**

### Lists rendering

- **v-for** --> it is similar to for loop in JS.

```HTML
<!-- 0 -->
<li v-for="num in 100">{{num}}</li>

<!-- 1 -->
<li v-for="goal in goals">{{goal}}</li>

<!-- 2 -->
<li v-for="(goal, index) in goals">{{goal}} - {{index}}</li>

<!-- 3 -->
<li v-for="value in {name:'Ganesh Kosuri',age:21}">{{value}}</li>

<!-- 4 -->
<li v-for="(value,key,index) in {name:'Ganesh Kosuri',age:21}">{{key}} - {{value}} - {{index}}
</li>
```

### Lists & Keys
