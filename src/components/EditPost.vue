<template>
  <div>
    <v-btn color="primary" class="ma-2" dark @click="modal = !modal">Edit post</v-btn>
    <v-dialog v-model="modal" persistent max-width="600px">
      <v-card>
        <v-card-title>Edit post</v-card-title>
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
                  <v-btn class="primary" @click="categoryModal = !categoryModal">Create new category</v-btn>
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
  </div>
</template>

<script>
import CreateCategory from "./CreateCategory";

export default {
  components: {
    CreateCategory
  },
  props: ["id"],
  data() {
    return {
      backupPost: { ...this.post },
      modal: false,
      categoryModal: false,
      postBackup: {},
      inputRules: [input => !!input || "Please fill this field"],
      notifications: false,
      sound: true,
      widgets: false
    };
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // console.log([this.post, this.postIndex]);
        this.$store
          .dispatch("updatePost", [this.post, this.postIndex])
          .then(() => {
            this.modal = false;
          });
      }
    },
    close() {
      this.modal = false;
      this.post = { ...this.backupPost };
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
    },
    postIndex() {
      const postIndex = this.$store.getters.getPosts.findIndex(
        p => p.id === this.id
      );
      return postIndex;
    },
    post() {
      const post = {
        ...this.$store.getters.getPosts.find(p => p.id === this.id)
      };
      // const post = { ...posts[this.postIndex] };
      return post;
    }
  }
};
</script>



<style scoped>
</style>



