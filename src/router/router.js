import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/PageHome.vue'
import Сontacts from '@/pages/PageContact.vue'
import Catalog from '@/pages/PageCatalog.vue'
import Door from '@/pages/PageDoor.vue'
import Auth from '@/pages/PageAuth.vue'

// import {
//   ForecastGetContent,
//   NewsGetContent,
//   DataBaseGetContent,
//   BonusURL,
//   TeerGet,
//   TeerGetById
// } from '@/api/api.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: Сontacts
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/door/:id',
      name: 'door',
      component: Door,
      props: true
    },
    {
      path: '/auth/',
      name: 'auth',
      component: Auth,
    }

    // {
    //   path: '/all-bonus',
    //   name: 'AllBonus',
    //   component: AllBonus,
    //   meta: {
    //     title: 'Бонусы'
    //   }
    // },
    // {
    //   path: '/bookmakers',
    //   name: 'AllBookmaker',
    //   beforeEnter: async (to, from, next) => {
    //     const res = await TeerGet()
    //     if (res.success) {
    //       next(`/bookmakers/${res.teers[0].URL}`)
    //     } else {
    //       next(`/NotFound`)
    //     }
    //   }
    // },
    // {
    //   path: '/bookmakers/:URL',
    //   name: 'BookmakerId',
    //   component: AllBookmaker,
    //   props: true,
    //   beforeEnter: async (to, from, next) => {
    //     const id = (await TeerGet()).teers.find((i) => i.URL === to.params.URL).id
    //     const res = await TeerGetById(id)
    //     if (res.success) {
    //       to.meta.title = res.teer.short_title
    //       to.meta.description = res.teer.description
    //       next()
    //     } else {
    //       next(`/NotFound`)
    //     }
    //   }
    // },
    // {
    //   path: '/news',
    //   name: 'AllNews',
    //   component: AllNews,
    //   meta: {
    //     title: 'Новости'
    //   }
    // },
    // {
    //   path: '/blog',
    //   name: 'AllBlog',
    //   component: AllBlog,
    //   meta: {
    //     title: 'Блоги'
    //   }
    // },
    // {
    //   path: '/base',
    //   name: 'AllDataBase',
    //   component: AllDataBase,
    //   meta: {
    //     title: 'База знаний'
    //   }
    // },
    // {
    //   path: '/bonus/:URL',
    //   name: 'Bonus',
    //   component: Bonus,
    //   props: true,
    //   beforeEnter: async (to, from, next) => {
    //     const res = await BonusURL(to.params.URL)
    //     if (res.success) {
    //       to.meta.title = res.bonus.info
    //       to.meta.description = res.bonus.info
    //       next()
    //     } else {
    //       next(`/NotFound`)
    //     }
    //   }
    // },
    // {
    //   path: '/forecast/all/:type',
    //   name: 'FullForecast',
    //   component: FullForecast,
    //   props: true,
    //   meta: {
    //     title: 'Прогнозы'
    //   },
    //   beforeEnter: async (to, from, next) => {
    //     if (to.params.type === 'expert' || to.params.type === 'AI' || to.params.type === 'all') {
    //       next()
    //     } else {
    //       next(`/NotFound`)
    //     }
    //   }
    // },
    // {
    //   path: '/forecast/:from/:URL',
    //   name: 'Forecast',
    //   component: Forecast,
    //   props: true,
    //   beforeEnter: async (to, from, next) => {
    //     const res = await ForecastGetContent(to.params.from, to.params.URL)
    //     if (res.success) {
    //       to.meta.title = res.forecast.name
    //       to.meta.description = res.forecast.description
    //       next()
    //     } else {
    //       next(`/NotFound`)
    //     }
    //   }
    // },
    // {
    //   path: '/news/:type/:URL',
    //   name: 'News',
    //   component: News,
    //   props: true,
    //   beforeEnter: async (to, from, next) => {
    //     const res = await NewsGetContent(to.params.type, to.params.URL)
    //     if (res.success) {
    //       to.meta.title = res.news.short_title
    //       to.meta.description = res.news.description
    //       next()
    //     } else {
    //       next(`/NotFound`)
    //     }
    //   }
    // },
    // {
    //   path: '/base/:URL',
    //   name: 'DataBase',
    //   component: DataBase,
    //   props: true,
    //   meta: {
    //     title: 'Base'
    //   },
    //   beforeEnter: async (to, from, next) => {
    //     const res = await DataBaseGetContent(to.params.URL)
    //     if (res.success) {
    //       to.meta.title = res.dataBase.short_title
    //       to.meta.description = res.dataBase.description
    //       next()
    //     } else {
    //       next(`/NotFound`)
    //     }
    //   }
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: NotFound,
    //   meta: {
    //     title: '404 Not Found'
    //   }
    // }
  ]
})

export default router
