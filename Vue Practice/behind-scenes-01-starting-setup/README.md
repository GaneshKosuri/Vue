# Vue Behind the scenes

- Vue uses proxy method to update the element in the DOM
- By default JS doesn't support reactivity

### Single App instance vs Multiple App instance

- if we use multiple app instances then there is no connection between the apps

### Template

- when ever we are mounting a Vue app in to the HTML , it is actually called a **Template**

### Refs

### Virtual DOM

- Vue maintains VDOM for updating the real DOM.

### Life Cycle of a Vue Instance

1. Mounting Phase

- createApp({...})
- beforeCreate()
- create()
  compile Template
- beforeMount()
- mounted --> mounted Vue Instance

2. Updating Phase

Data changed

- beforeUpdate()
- updated()

3. UnMounting Phase

Instance unMounted

- beforeUnMount()
- unMounted()
