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
    path: '/BasicInformation',
    name: "BasicInformation",
    component: () => import('@/views/BasicInformation.vue')
  },
  {
    path: '/PersonalContactInformation',
    name: "PersonalContactInformation",
    component: () => import('@/views/PersonalContactInformation.vue')
  },
  {
    path: '/CurriculumVitae',
    name: "CurriculumVitae",
    component: () => import('@/views/CurriculumVitae.vue')
  },
  {
    path: '/BasicFamilyInformation',
    name: "BasicFamilyInformation",
    component: () => import('@/views/BasicFamilyInformation.vue')
  },
  {
    path: '/SelectFamilyNum',
    name: "SelectFamilyNum",
    component: () => import('@/views/SelectFamilyNum.vue')
  },
  {
    path: '/FamilyMembers',
    name: "FamilyMembers",
    component: () => import('@/views/FamilyMembers.vue')
  },
  {
    path: '/SelectNeedyStudents',
    name: "SelectNeedyStudents",
    component: () => import('@/views/SelectNeedyStudents.vue')
  },
  {
    path: '/NeedyStudents',
    name: "NeedyStudents",
    component: () => import('@/views/NeedyStudents.vue')
  },
  {
    path: '/SubmitSuccess',
    name: "SubmitSuccess",
    component: () => import('@/views/SubmitSuccess.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
