<template>
  <Layout>
    <button class="btn">
        https://t.me/ineedlustin
      
        <div class="badge ml-2">{{$page.tposts.totalCount}} {{ $t("latest-tme")}} </div>
    </button> 
    <div v-for="edge in $page.tposts.edges" :key="edge.node.id">
      <div class="card lg:card-side bordered">
        <div class="card-body">
          <h2 class="card-title">{{ edge.node.title }}
              <div class="badge badge-success">
                ISODATETIME {{ edge.node.pubDate }}
              </div>
          </h2>
          <p>
              <div v-html="edge.node.content">
              </div>
          </p> 
          <div class="card-actions">
            <button class="btn btn-outline">
              <a :href="edge.node.id" target="_blank">
                {{ edge.node.id }}
              </a>
            </button> 
          </div>
          
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "T-ME",
  },
}
</script>

<page-query>
query {
  tposts: allTellegramMonthFeed (order: ASC) {
   	 totalCount
     edges {
      node {
        id, 
        title, 
        pubDate, 
        contentSnippet, 
        author, 
        content        
      }
    }
  }
}
</page-query>


<style>

</style>