import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "index",
    component: () => import('@/views/index.vue'),
    meta: {
      title: '首页', content: 'disable'
    }
  },
  {
    path: '/basicInformation',
    name: "basicInformation",
    component: () => import('@/views/basicInformation.vue'),
    meta: {
      title: '基础信息', content: 'disable-no'
    }
  },
  {
    path: '/personalContactInformation',
    name: "personalContactInformation",
    component: () => import('@/views/personalContactInformation.vue'),
    meta: {
      title: '个人联系信息', content: 'disable-no'
    }
  },
  {
    path: '/curriculumVitae',
    name: "curriculumVitae",
    component: () => import('@/views/curriculumVitae.vue'),
    meta: {
      title: '个人简历', content: 'disable-no'
    }
  },
  {
    path: '/basicFamilyInformation',
    name: "basicFamilyInformation",
    component: () => import('@/views/basicFamilyInformation.vue'),
    meta: {
      title: '家庭基础信息', content: 'disable-no'
    }
  },
  {
    path: '/selectFamilyNum',
    name: "selectFamilyNum",
    component: () => import('@/views/selectFamilyNum.vue'),
    meta: {
      title: '选择家庭成员人数', content: 'disable-no'
    }
  },
  {
    path: '/familyMembers',
    name: "familyMembers",
    component: () => import('@/views/familyMembers.vue'),
    meta: {
      title: '家庭成员', content: 'disable-no'
    }
  },
  {
    path: '/selectNeedyStudents',
    name: "selectNeedyStudents",
    component: () => import('@/views/selectNeedyStudents.vue'),
    meta: {
      title: '首页', content: 'disable-no'
    }
  },
  {
    path: '/needyStudents',
    name: "needyStudents",
    component: () => import('@/views/needyStudents.vue'),
    meta: {
      title: '是否贫困生', content: 'disable-no'
    }
  },
  {
    path: '/submitSuccess',
    name: "submitSuccess",
    component: () => import('@/views/submitSuccess.vue'),
    meta: {
      title: '提交成功', content: 'disable-no'
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
