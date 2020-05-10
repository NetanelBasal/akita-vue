<template>
  <div>
    <button @click="onClick">Click</button>
    <button @click="addTodo">Add todo</button>
    <h1>{{ counter }}</h1>
    <div v-for="todo in todos" :key="todo.id">
      {{ todo.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { counterQuery, increment } from "../state";
import { todosQuery, add } from "../../state";

@Component({
  subscriptions() {
    return {
      todos: todosQuery.selectAll(),
      counter: counterQuery.select("counter")
    };
  }
})
export default class HelloWorld extends Vue {
  constructor() {
    super();
  }
  addTodo() {
    add();
  }

  onClick() {
    increment();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
