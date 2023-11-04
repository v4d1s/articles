<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <article-form
        :edit-data="true"
      />
    </div>
  </div>
</template>

<script>
import ArticleForm from "@/components/article/ArticleForm.vue";
export default {
  components: {ArticleForm},
  name: 'my-dialog-article',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    },
  },
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