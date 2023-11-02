<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <article-form
        @create="editArticle"
        :articleDate="articleData"
      />
    </div>
  </div>
</template>

<script>
import ArticleForm from "@/components/article/ArticleForm.vue";
import axios from "axios";
export default {
  components: {ArticleForm},
  name: 'my-dialog-article',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      articleData: {
        name: '',
        text: '',
      },
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    },
    async editArticle(article) {
      const articleId = this.$route.params.id
      this.articleData.name = article.name
      this.articleData.text = article.text
      await axios({
        url: 'http://localhost:3000/article/' + articleId,
        method: 'patch',
        data: {
          name: this.articleData.name,
          text: this.articleData.text
        }
      })
      this.$router.push('/article/' + articleId)
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 500px;
  min-width: 800px;
  padding: 20px;
}
</style>