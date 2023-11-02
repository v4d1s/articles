import { createRouter, createWebHistory } from 'vue-router'
import ArticlesPage from "@/pages/article/ArticlesPage.vue";
import NewArticlePage from "@/pages/article/NewArticlePage.vue";
import ArticlePage from "@/pages/article/ArticlePage.vue";
import CommentsPage from "@/pages/comment/CommentsPage.vue";
import CommentPage from "@/pages/comment/CommentPage.vue";
import ErrorPage from "@/pages/other/ErrorPage.vue";
import AnalyticCommentsPage from "@/pages/other/AnalyticCommentsPage.vue";

const routes = [
  {
    path: '/articles',
    name: 'home',
    component: ArticlesPage
  },
  {
    path: '/article',
    name: 'newArticle',
    component: NewArticlePage
  },
  {
    path: '/article/:id',
    name: 'article',
    component: ArticlePage
  },
  {
    path: '/article/:id/comments',
    name: 'commentsPage',
    component: CommentsPage
  },
  {
    path: '/article/:id/comment/:commentId',
    name: 'commentPage',
    component: CommentPage
  },
  {
    path: '/analytic/comments',
    name: 'analyticComments',
    component: AnalyticCommentsPage
  },
  {
    path: '/error/404',
    component: ErrorPage
  },
  {
    path: "/",
    redirect: "/articles"
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/error/404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
