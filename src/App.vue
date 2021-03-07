<template>
  <router-view />
</template>
<script>
import { languageMixin } from '@/mixins/languageMixin'
export default {
  mixins: [languageMixin],
  created() {
    if (process.isClient) {
      this.fetchBrowserLocale()
    }
  },
  methods: {
    fetchBrowserLocale() {
      let fetchedLocale = navigator.language.split('-')[0]
      console.log('LANG: %s', fetchedLocale)
      this.loadLanguageAsync(fetchedLocale).catch(() => {
        console.log('Async language fetch failed')
      })
    },
  },
}
</script>