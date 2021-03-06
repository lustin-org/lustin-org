// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'
import iframeResize from 'iframe-resizer/js/iframeResizer';
import themeBtn from "theme-change"

export default function (Vue, { router, head, isClient, appOptions }) {
  appOptions.i18n.setLocaleMessage('ru', require('./locales/ru.json'))
  appOptions.i18n.setLocaleMessage('en', require('./locales/en.json'))
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.directive('resize', {
    bind: function(el, { value = {} }) {
      el.addEventListener('load', () => iframeResize(value, el))
    },
    unbind: function (el) {
      el.iFrameResizer.removeListeners();
    }
  })
 
}
