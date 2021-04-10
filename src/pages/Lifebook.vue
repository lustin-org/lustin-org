<template>
  <Layout>
    <div
      class="container col-span-1 row-span-3 xl:col-span-3 h-screen mx-auto mt-2 px-1"
    >
    <div v-for="edge in $page.bklposts.edges" :key="edge.node.id">
        <div v-html="edge.node.content"></div>
      </div>
    </div>
      
  </Layout>
</template>

<page-query>
query {
  bklposts: allMarkdownEnchansment (order: ASC) {
   	 totalCount
     edges {
      node {
        id, 
        content   
      }
    }
  }
}
</page-query>

<script>
export default {

}
</script>

<style>

</style>