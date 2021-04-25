import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$baseUrl = "https://script.google.com/macros/s/AKfycbwkbQgdIamiJt9MxgsHNvuisEefcanzJhAFX5q5sGl3wpXVigU26xV1AuFmqbEpgLAp/exec"
//Vue.prototype.$baseUrl = "https://script.google.com/macros/s/AKfycbx5GLrXhpdBh2avqiQLvHYSs5TmPTPbK_tAGu5zeUoL2GdJ3hKbsKLs/exec" //generic, application key required
Vue.prototype.$application = "noSpoon"


new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
		this.$store.commit('initialiseStore');
	},
  components: {

  },
  created()
  {
    // Subscribe to store updates
    store.subscribe((mutation, state) => {
      // Store the state object as a JSON string
     localStorage.setItem('store', JSON.stringify(state));
    });

 
  },
  mounted()
  {

   
  }
}).$mount('#app')
