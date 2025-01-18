import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from './../components/HomeView.vue'
import FilmsView from './../components/FilmsView.vue'


const routes = [
    { path: '/', component: HomeView },
    { path: '/films', component: FilmsView },
  ]
  
const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
export default router