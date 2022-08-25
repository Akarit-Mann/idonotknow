<template>
  <div class="posts">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"></SinglePost>
    </div>
    <!-- <h1>{{posts.title}}</h1> -->
  </div>
</template>

<script>
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
  props:["posts"]

}
</script>

<style>

</style>