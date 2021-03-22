<template>
  <Layout>
          <div class="alert">
  <div class="flex-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#009688" class="flex-shrink-0 w-6 h-6 mx-2"><!----> <!----> <!----> <!----> <!----> 
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!---->
    </svg> 
    <label>
      <h4>{{ $t("radiolustin.title") }}</h4> 
      <p class="text-sm text-base-content text-opacity-60">
            {{ $t("radiolustin.description") }}
          </p>
    </label>
  </div> 
      </div>
  <div v-for="edge in $page.podcasts.edges" :key="edge.node.id">
      <div class="card shadow-lg">
        <div class="card-body">
          <h2 class="card-title">{{ edge.node.title }}
              <div class="badge badge-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-4 h-4 mr-2 stroke-current"
            >
              <!---->
              <!---->
              <!---->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
              <!---->
            </svg>
            {{ edge.node.path }}
          </div>
          </h2>

          
          <article class="prose" v-html="edge.node.content"></article>
        </div>
      </div>
    </div> 
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "RADIO",
  },
};
</script>

<page-query>
query {
  podcasts: allPodcasts (sortBy: "path") {
    edges {
      node {
        id,
        title,
        content,
        path
      }
    }
  }
}
</page-query>

<style>
</style>