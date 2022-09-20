<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="descriptionInput"
        />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" type="text" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
    <teleport to="#app">
      <base-dialog
        v-if="shouldShowErrorDialog"
        title="Invalid Input"
        @close="setShouldShowErrorDialog(false)"
      >
        <template #default>
          <p>Input Values are Invalid</p>
          <p>Kindly enter all the input fields with at least few charecters</p>
        </template>
        <template #actions>
          <base-button @click="setShouldShowErrorDialog(false)"
            >Okay</base-button
          >
        </template>
      </base-dialog>
    </teleport>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      shouldShowErrorDialog: false,
    };
  },
  methods: {
    submitData() {
      const title = this.$refs.titleInput.value;
      const description = this.$refs.descriptionInput.value;
      const link = this.$refs.linkInput.value;

      if (title.trim() && description.trim() && link.trim()) {
        this.addResource(title, description, link);
      } else {
        this.setShouldShowErrorDialog(true);
      }
    },
    setShouldShowErrorDialog(value) {
      this.shouldShowErrorDialog = value;
    },
  },
};
</script>

<style src="./add-resource.css" scoped></style>
