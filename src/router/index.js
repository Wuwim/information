import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "index",
    component: () => import('@/views/index.vue')
  },
  {
    path: '/002',
    name: "BasicInformation",
    component: () => import('@/views/BasicInformation.vue')
  },
  {
    path: '/003',
    name: "PersonalContactInformation",
    component: () => import('@/views/PersonalContactInformation.vue')
  },
  {
    path: '/004',
    name: "CurriculumVitae",
    component: () => import('@/views/CurriculumVitae.vue')
  },
  {
    path: '/005',
    name: "BasicFamilyInformation",
    component: () => import('@/views/BasicFamilyInformation.vue')
  },
  {
    path: '/006',
    name: "SelectFamilyNum",
    component: () => import('@/views/SelectFamilyNum.vue')
  },
  {
    path: '/007',
    name: "FamilyMembers",
    component: () => import('@/views/FamilyMembers.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
