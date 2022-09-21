<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <h3 v-if="isLoading">Loading......</h3>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <h3
        v-else-if="!isLoading && (!results || results.length === 0) && !error"
      >
        No Learning Experiences present, Start adding some survey results
      </h3>
      <div v-if="error && !isLoading">
        <h3>{{ error }}</h3>
        <base-button @click="loadExperiences">Retry</base-button>
      </div>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch(
        'https://vue-http-demo-3730e-default-rtdb.firebaseio.com/surveys.json'
      )
        .then((response) => response.json())
        .then((response) => {
          const resultsFromFirebase = [];
          for (const id in response) {
            resultsFromFirebase.push({
              id,
              name: response[id].name,
              rating: response[id].rating,
            });
          }
          this.results = resultsFromFirebase;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.error = 'Something went wrong, try again later';
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
