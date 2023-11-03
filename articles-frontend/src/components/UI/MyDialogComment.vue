<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <comment-form
        @create="editComment"
        :commentDate="commentData"
        style="width: 95%"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CommentForm from "@/components/comments/CommentForm.vue";
export default {
  components: { CommentForm},
  name: 'my-dialog-comment',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      commentData: {
        text: '',
      },
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    },
    async editComment(comment) {
      const articleId = this.$route.params.id
      const commentId = this.$route.params.commentId
      this.commentData.text = comment.text
      await axios({
        url: 'http://localhost:3000/article/' + articleId + '/comment/' + commentId,
        method: 'patch',
        data: {
          text: this.commentData.text
        }
      })
      this.$router.push('/article/' + '/comment/' + commentId)
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