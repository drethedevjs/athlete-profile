import profiles from "./data/profiles.js";
const app = Vue.createApp({
  data() {
    return {
      profiles: profiles
    }
  },
  methods: {
    deleteProfile(idx) {
      this.profiles.splice(idx, 1);
    }
  },
  mounted() {
  }
})

app.mount('#app');