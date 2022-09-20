<template>
  <div>
    <h2>Active Goals</h2>
    <label for="goal">Goal</label>
    <input type="text" ref="goal" />
    <button @click="setGoals">Set Goal</button>
    <teleport to="body">
      <ErrorDialog v-if="isInputInvalid">
        <h2>Input is Invalid</h2>
        <p>Kindly enter a few charecters</p>
        <button @click="updateErrorStatus">Okay</button>
      </ErrorDialog>
    </teleport>
  </div>
</template>

<script>
import ErrorDialog from "./ErrorDialog.vue";

export default {
  components: {
    ErrorDialog,
  },
  data() {
    return {
      isInputInvalid: false,
    };
  },
  methods: {
    setGoals() {
      const enteredGoal = this.$refs.goal.value;
      if (enteredGoal === "") {
        this.isInputInvalid = true;
      }
    },
    updateErrorStatus() {
      this.isInputInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  margin-right: 5px;
}
</style>
