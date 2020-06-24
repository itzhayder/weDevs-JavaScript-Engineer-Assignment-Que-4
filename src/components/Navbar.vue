<template>
  <div>
    <v-app-bar app dark flat>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn elevation="0" router to="/">Posts</v-btn>
        <v-btn elevation="0" router to="/categories">Categories</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
</style>