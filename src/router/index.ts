import { createRouter, createWebHistory } from 'vue-router'
import StarterView from '../views/StarterView.vue'
import IntroView from '../views/IntroView.vue'
import TopicVibeCodingView from '../views/TopicVibeCodingView.vue'
import TopicToolsForVibeCoding from '../views/TopicToolsForVibeCodingView.vue'
import ShowcaseView from '../views/ShowcaseView.vue'
import SoftwareEngineerView from '../views/SoftwareEngineerView.vue'
import PostTestView from '../views/PostTestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'StarterView',
      component: StarterView,
    },
    /* {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    }, */
    /* {
      path: '/new-page',
      name: 'NewPage',
      component: NewPage,
    }, */
    {
      path: '/topic-0',
      name: 'IntroView',
      component: IntroView,
    },
    {
      path: '/topic-1',
      name: 'TopicVibeCodingView',
      component: TopicVibeCodingView,
    },
    {
      path: '/topic-2',
      name: 'TopicToolsForVibeCoding',
      component: TopicToolsForVibeCoding,
    },
    {
      path: '/topic-3',
      name: 'SoftwareEngineer',
      component: SoftwareEngineerView,
    },
    {
      path: '/topic-4',
      name: 'topic-4',
      component: TopicToolsForVibeCoding,
    },
    {
      path: '/topic-5',
      name: 'topic-5',
      component: TopicToolsForVibeCoding,
    },
    {
      path: '/topic-6',
      name: 'topic-6',
      component: TopicToolsForVibeCoding,
    },
    {
      path: '/topic-7',
      name: 'Showcase',
      component: ShowcaseView,
    },
    {
      path: '/topic-8',
      name: 'PostTest',
      component: PostTestView,
    },
  ],
})

export default router
