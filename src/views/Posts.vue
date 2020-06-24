<template>
  <div>
    <v-row>
      <v-col>
        <h2 class="mb-4">Posts</h2>
      </v-col>

      <v-col>
        <CreatePost></CreatePost>
      </v-col>
    </v-row>

    <v-card outlined class="mb-2" v-for="post in posts" :key="post.id">
      <v-list-item router :to="`/post/${post.id}`">
        <v-list-item-content>
          <v-list-item-title class="headline mb-3">{{ post.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ post.content }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-subtitle>
        <v-icon small>label</v-icon>
        <v-chip
          small
          class="ma-2"
          v-for="category in post.categories"
          :key="category"
        >{{ category }}</v-chip>
      </v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>
        <EditPost :id="post.id"></EditPost>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import CreatePost from "../components/CreatePost";
import EditPost from "../components/EditPost";

export default {
  name: "Posts",
  components: {
    CreatePost,
    EditPost
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    }
  }
};
</script>

<style scoped>
</style>
