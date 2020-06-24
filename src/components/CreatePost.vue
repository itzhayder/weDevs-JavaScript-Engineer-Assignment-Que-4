<template>
  <div>
    <v-row justify="end">
      <v-btn color="primary" class="ma-2" dark @click="modal = !modal">Create new post</v-btn>

      <v-dialog v-model="modal" persistent max-width="600px">
        <v-card>
          <v-card-title>Create post</v-card-title>
          <v-card-text>
            <!-- <v-btn color="primary" dark @click="modal2 = !modal2">Open Dialog 3</v-btn> -->
            <v-form ref="form">
              <v-text-field label="Title" v-model="post.title" :rules="inputRules" required></v-text-field>
              <v-textarea label="Content" v-model="post.content" :rules="inputRules" required></v-textarea>
              <v-select
                v-model="post.categories"
                label="Select categories"
                :items="categories"
                multiple
                chips
                required
                :rules="inputRules"
              >
                <template v-slot:prepend-item>
                  <v-list-item>
                    <v-btn
                      class="primary"
                      @click="categoryModal = !categoryModal"
                    >Create new category</v-btn>
                  </v-list-item>
                </template>
              </v-select>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="close">Close</v-btn>
            <v-btn color="primary" @click="submit">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <CreateCategory
        v-if="categoryModal"
        @updateModal="updateModal"
        v-bind:categoryModal="categoryModal"
      ></CreateCategory>
    </v-row>
  </div>
</template>

<script>
import CreateCategory from "./CreateCategory";

export default {
  components: {
    CreateCategory
  },
  data() {
    return {
      modal: false,
      categoryModal: false,
      selectCategory: [],
      inputRules: [input => !!input || "Please fill this field"],
      post: {
        title: "",
        content: "",
        categories: ""
      },
      notifications: false,
      sound: true,
      widgets: false
    };
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const post = JSON.parse(JSON.stringify(this.post));
        this.$store.dispatch("addPost", post);
        this.modal = false;
        this.$refs.form.reset();
      }
    },
    close() {
      this.modal = false;
      this.$refs.form.reset();
    },
    updateModal(newCategory) {
      this.categoryModal = false;
      if (!this.post.categories) {
        this.post.categories = [newCategory];
      } else {
        this.post.categories.push(newCategory);
      }
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



