import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Team from '../views/Team.vue'
import Login from '../views/Login.vue'
import Courses from '../views/Courses.vue'
import Course from '../views/Course.vue'
import Partners from '../views/Partners.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
    },
  {
  path: '/projects',
  name: 'Projects',
  component: Projects
  },
  {
  path: '/blog',
  name: 'Blog',
  component: Blog
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
    },
  {
    path: '/partners',
    name: 'Partners',
    component: Partners
    },
  {
  path: '/login',
  name: 'Login',
  component: Login
  },
  {
  path: '/courses',
  name: 'Courses',
  component: Courses
  },
  {
  path: '/course/:name',
  name: 'Course',
  props: true,
  component: Course
  }
]

const router = new VueRouter({

  routes
})
//  mode: "history",
export default router
