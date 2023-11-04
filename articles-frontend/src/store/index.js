import {createStore} from "vuex";
import {articleItemModule} from "@/store/article/articleItemModule";
import { articlesListModule } from "@/store/article/articlesListModule";
import { articlesFormModule } from "@/store/article/articleFormModule";
import { commentItemModule } from "@/store/comment/commentItemModule";
import { commentsListModule } from "@/store/comment/commentsListModule";
import { commentFormModule } from "@/store/comment/commentFormModule";

export default createStore({
  modules: {
    articleItem: articleItemModule,
    articleList: articlesListModule,
    articleForm: articlesFormModule,
    commentItem: commentItemModule,
    commentsList: commentsListModule,
    commentForm: commentFormModule,
  }
})