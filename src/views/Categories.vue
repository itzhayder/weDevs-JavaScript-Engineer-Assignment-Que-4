<template>
  <div>
    <h1>Categories</h1>
    <v-btn class="primary" @click="categoryModal = !categoryModal">Create new category</v-btn>
    <CreateCategory
      v-if="categoryModal"
      @updateModal="updateModal"
      v-bind:categoryModal="categoryModal"
    ></CreateCategory>

    <v-list>
      <v-list-item v-for="category in categories" :key="category">{{ category }}</v-list-item>
    </v-list>
  </div>
</template>

<script>
import CreateCategory from "../components/CreateCategory";

export default {
  name: "Categories",
  components: {
    CreateCategory
  },
  data() {
    return {
      categoryModal: false
    };
  },
  methods: {
    updateModal() {
      this.categoryModal = false;
    }
  },

  computed: {
    categories() {
      return this.$store.getters.getCategories;
    }
  }
};
</script>

<style scoped>
</style>
