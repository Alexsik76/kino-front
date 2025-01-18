import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from './../views/HomeView.vue'
import FilmsView from './../views/FilmsView.vue'


const routes = [
    { path: '/', component: HomeView },
    { path: '/films', component: FilmsView },
  ]
  
const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
export default router