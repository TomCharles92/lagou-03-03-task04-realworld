<template>
  <div
    class="article-preview"
  >
    <div class="article-meta">
      <nuxt-link
        :to="{
          name: 'profile',
          params: { username: article.author.username },
        }"
      >
        <img :src="article.author.image" />
      </nuxt-link>
      <div class="info">
        <nuxt-link
          class="author"
          :to="{
            name: 'profile',
            params: { username: article.author.username },
          }"
          >{{ article.author.username }}</nuxt-link
        >
        <span class="date">{{
          article.createdAt | date("MMM DD, YYYY")
        }}</span>
      </div>
      <button
        class="btn btn-outline-primary btn-sm pull-xs-right"
        :class="{ active: article.favorited }"
        @click="handleFavorite(article)"
        :disabled="article.favoriteDisabled"
      >
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <nuxt-link class="preview-link" 
      :to="{
        name: 'article',
        params: { slug: article.slug },
      }"
    >
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
    </nuxt-link>
  </div>
</template>

<script>
import { addFavorite, deleteFavorite, } from "@/api/article";

export default {
  name: "ArticlePreview",
  props: ["article"],
  methods: {
    async handleFavorite(article) {
      console.log(article);
      article.favoriteDisabled = true;
      if (article.favorited) {
        // 取消点赞
        await addFavorite(article.slug);
        article.favorited = false;
        article.favoritesCount -= 1;
      } else {
        // 点赞
        await deleteFavorite(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }
      article.favoriteDisabled = false;
    },
  },
}
</script>

<style>

</style>