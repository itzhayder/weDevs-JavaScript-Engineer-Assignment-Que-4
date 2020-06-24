import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [
      { id: "1", title: "First Post", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae elit ac dui vestibulum hendrerit. Donec velit dui, placerat sed ornare sit amet, rutrum eu libero.", categories: ["JavaScript"]},
      { id: "2", title: "Second Post", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae elit ac dui vestibulum hendrerit. Donec velit dui, placerat sed ornare sit amet, rutrum eu libero.", categories: ["Python"]},
      { id: "3", title: "Third Post", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae elit ac dui vestibulum hendrerit. Donec velit dui, placerat sed ornare sit amet, rutrum eu libero.", categories: ["Java"]}
    ],
    categories: ["JavaScript", "Python", "Java"]
  },

  getters: {
    getPosts: state => {
      return state.posts;
    },
    getCategories: state => {
      return state.categories;
    }
  },

  mutations: {
    addPost: (state, payload) => {
      const id = "_" + Math.random().toString(36).substr(2, 9);
      const post = {
        ...payload,
        id
      }
      state.posts.push(post);
    },
    addCategory: (state, payload) => {
      state.categories.push(payload);
    },
    updatePost: (state, [newPost, postIndex]) => {
      state.posts.splice(postIndex, 1, newPost);
    }
  },
  
  actions: {
    addPost: (context, payload) => {
      context.commit("addPost", payload);
    },
    addCategory: (context, payload) => {
      context.commit("addCategory", payload);
    },
    updatePost: (context, payload) => {
      context.commit("updatePost", payload);
    }
  }
})
