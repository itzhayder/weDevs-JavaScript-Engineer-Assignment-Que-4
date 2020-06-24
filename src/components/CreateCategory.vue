<template>
  <!-- <v-btn color="primary" dark @click="modal2 = !modal2">Create new category</v-btn> -->
  <v-dialog v-model="categoryModal" persistent max-width="400px">
    <v-card>
      <v-card-title>Create category</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field label="Name" v-model="category" :rules="inputRules"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="close">Close</v-btn>
        <v-btn color="primary" @click="submit">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CreateCategory",
  props: ["categoryModal"],
  data() {
    return {
      category: "",
      updateModal: this.categoryModal,
      inputRules: [input => !!input || "Please fill this field"]
    };
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("addCategory", this.category);
        this.$emit("updateModal", this.category);
        this.$refs.form.reset();
        this.updateModal = false;
      }
    },
    close() {
      this.$refs.form.reset();
      this.updateModal = false;
      this.$emit("updateModal");
    }
  },

  computed: {
    modal2() {
      return this.categoryModal;
    }
  }
};
</script>

<style scoped>
</style>