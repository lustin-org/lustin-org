<template>
  <Layout>
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
  podcasts: allPodcasts (order: ASC) {
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