<template>
  <select class="select select w-full max-w-x" :value="currentLocale" @change="localeChanged">
    <option v-for="locale in localeList" :key="locale" :value="locale">
      CL {{ locale }}
    </option>
  </select>
</template>

<script>
import { languageMixin } from '@/mixins/languageMixin'
export default {
  name: 'LocaleSwitcher',
  mixins: [languageMixin],
  data: function() {
    return {
      currentLocale: this.$i18n.locale,
    }
  },
  methods: {
    localeChanged(event) {
      this.loadLanguageAsync(event.target.value).catch(() => {
        console.log('Async language fetch failed')
      })
    },
  },
}
</script>