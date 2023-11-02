<template>
  <div>
    <h2>Комментарии к статье с ID: {{ $route.params.id }}</h2>
    <comments-list/>
  </div>
</template>

<script>
import CommentsList from "@/components/comments/CommentsList.vue";
export default {
  components: {CommentsList},
};
</script>

<style lang="scss" scoped>

</style>