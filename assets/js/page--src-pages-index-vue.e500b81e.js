(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{iyQ6:function(t,s,a){"use strict";a.r(s);var e={name:"LocaleSwitcher",mixins:[a("dyQm").a],data:function(){return{currentLocale:this.$i18n.locale}},methods:{localeChanged:function(t){this.loadLanguageAsync(t.target.value).catch((function(){console.log("Async language fetch failed")}))}}},l=a("KHd+"),c={name:"LocalesToggle"},n={metaInfo:{title:"MAIN"},components:{LocaleSwitcher:Object(l.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("select",{staticClass:"select select w-full max-w-x",domProps:{value:t.currentLocale},on:{change:t.localeChanged}},t._l(t.localeList,(function(s){return a("option",{key:s,domProps:{value:s}},[t._v("\n    CL "+t._s(s)+"\n  ")])})),0)}),[],!1,null,null,null).exports,LocalesToggle:Object(l.a)(c,(function(){var t=this.$createElement,s=this._self._c||t;return s("Card",{staticClass:"shadow-lg compact side bg-default"},[s("div",{staticClass:"flex-row items-center space-x-4 card-body"},[s("label",{staticClass:"flex-0"},[s("div",[s("input",{staticClass:"toggle",class:this.classes,attrs:{type:"checkbox",checked:""}}),s("span",{staticClass:"toggle-mark"})])]),s("div",{staticClass:"flex-1"},[s("h2",{staticClass:"card-title"},[this._v("Enable Notifications")]),s("p",{staticClass:"text-content-400"},[this._v("To get latest updates")])])])])}),[],!1,null,null,null).exports,Tellegram:Object(l.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null).exports}},i=Object(l.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hero min-h-screen",staticStyle:{"background-image":"url('https://static.tildacdn.com/tild3138-3431-4366-b431-383735643532/photo.png')"}},[a("div",{staticClass:"hero-overlay bg-opacity-60"}),a("div",{staticClass:"text-center hero-content text-content-100"},[a("div",{staticClass:"max-w-md"},[a("h1",{staticClass:"mb-5 text-5xl font-bold"},[t._v(t._s(t.$t("welcome")))]),a("button",{staticClass:"btn btn-primary"},[a("g-link",{staticClass:"nav__link",attrs:{to:"/main/"}},[t._v("\n          "+t._s(t.$t("startbutton"))+"\n        ")])],1),a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-body"},[a("p",[t._v(t._s(t.$t("strategy-text")))]),a("div",{staticClass:"card-actions justify-center"},[a("div",{staticClass:"btn-group"},[a("a",{staticClass:"btn btn-ghost",attrs:{href:"https://www.patreon.com/ineedlustin"}},[a("svg",{attrs:{height:"32",viewBox:"0 0 32 32",width:"64",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"m206 0c11.1 2 22.4 3.3 33.3 6 75.2 18.6 132.2 82.4 142.8 159.4 14.1 102.4-52.5 196-154 216.3-7.3 1.5-14.8 2.3-22.2 3.4h-102l.1-193.4c0-4.3.4-8.7 1.1-12.9 6.6-43.3 46.1-76 89.4-74.3 45.7 1.9 82.4 37.2 85.3 82.2 4.3 66.8-63.7 113.7-124.6 85.9-1.3-.6-2.6-1.1-4.5-1.8l.2 60.1c0 1.2 2.3 3 3.8 3.4 19.5 5.6 39.4 6.7 59.4 3.5 84.6-13.6 139.2-93.9 120.9-177.3-16.9-77.2-94.1-127.7-171-112-69.6 14-118.2 73.4-118.4 144.6v186.9c0 1.7.2 3.3.4 5h-46v-207l1.8-11.8c10.6-77.7 67.3-141.3 143.4-160.3 10.8-2.7 21.9-4 32.8-5.9z",fill:"#e6461a"}}),a("path",{attrs:{d:"m1680 272h-31.7v-22.9l-.3-88.5c-.3-23.1-17.7-43.9-40.3-48.6-31-6.5-62.5 18.6-62.6 50.4l.2 109.7h-30.8v-183.2h30.5v10.1c10-8.9 20.6-14.4 32.6-17.4 47.2-11.9 96.6 22.8 101.4 71.2.1 1.4.6 2.9.9 4.3zm-1198.2-20.5v91.4h-30.6l-.3-3.9.1-159.5c.3-48.1 34-88.7 81-98.2 56.5-11.4 111.8 28.3 119.2 85.5 7.3 56.4-31.5 107-88.1 113.8-29.7 3.5-55.3-6.7-77.3-26.5-1-.9-1.5-2.5-2.3-3.8-.6.4-1.1.8-1.7 1.2zm69.9-1.1c38.7-.1 69.6-31.3 69.6-70.1-.1-38.7-31.4-70-69.9-69.8-38.6.2-69.6 31.4-69.5 70.2-.1 38.6 31.1 69.8 69.8 69.7zm576-29.1c14.8 22.6 46.1 33.8 73.8 26.4 16.9-4.5 30.4-14.2 40.1-28.7s13.3-30.7 11.2-48.4h30.6c5.5 38.7-17.6 89.2-69.4 105.7-49 15.6-101.9-8.4-122.6-55.5-20.8-47.3-2.5-102.8 42.6-128.5 46.7-26.6 99-9.2 123.4 19.9zm-13-29.5 91.8-77.2c-23.3-9.7-53-3.2-71.9 15.7-16.6 16.7-22.9 37-19.9 61.5zm-250.7 80.3h-30.9v-18.9l-3.3 2.7c-57.3 49.6-145.6 22-164.2-51.3-17.1-67.6 38.5-131.9 107.8-124.9 51 5.2 90 47.7 90.5 98.9zm-170.5-92.1c-.1 38.4 31 69.9 69.2 70.1 38.6.1 70.3-30.8 70.4-68.8.1-39.7-30.7-71.1-69.6-71.1-38.6-.2-69.9 31.1-70 69.8zm601.8 0c.1-55.6 45.3-100.8 100.7-100.8 55.6 0 101 45.7 100.7 101.3-.3 55.7-45.4 100.6-101 100.5-55.4-.1-100.5-45.4-100.4-101zm100.6 70c38.6 0 70-31.2 70-69.8.1-38.5-31.3-70.1-69.7-70.2-38.5-.1-70 31.3-70.1 69.8 0 38.7 31.3 70.2 69.8 70.2zm-522.1-161.7h17.7v-70.8h31v70.8h46.2v30.9h-46.1v152.8h-30.8v-6l.1-141c0-4.5-1.1-6.3-5.8-5.8-3.9.4-7.9.1-12.2.1zm141.7 26.8c14.7-13.2 31.5-22.3 50.9-25.7 6.8-1.2 13.8-1.3 21.2-2v28.4c0 3.5-2.6 2.9-4.6 2.9-15.4.2-29.2 5.1-41.1 14.6-17.3 13.7-26.7 31.7-27 53.9l-.1 84.8h-30.5v-183.3h29.9v25.8c.5.2.9.4 1.3.6z",fill:"#222c31"}}),a("path",{attrs:{d:"m17.164 0 2.767.5c6.25 1.546 10.985 6.847 11.866 13.245 1.173 8.508-4.362 16.285-12.797 17.972-.607.125-1.23.19-1.845.283h-8.475l.008-16.07c0-.357.033-.723.09-1.072.548-3.598 3.83-6.315 7.43-6.174 3.797.158 6.847 3.09 7.088 6.83.357 5.55-5.293 9.448-10.354 7.138-.108-.05-.216-.09-.374-.15l.017 4.994c0 .1.19.25.316.283 1.62.465 3.274.557 4.936.29 7.03-1.13 11.567-7.803 10.046-14.733-1.404-6.415-7.82-10.61-14.21-9.307-5.783 1.163-9.822 6.1-9.838 12.016v15.53c0 .14.017.274.033.415h-3.821v-17.2l.15-.98c.88-6.456 5.591-11.74 11.915-13.31.897-.224 1.82-.332 2.726-.5h2.327z",fill:"#e6461a"}})]),t._v("\n                "+t._s(t.$t("patreonbutton"))+"\n              ")]),a("a",{staticClass:"btn btn-ghost",attrs:{href:"https://t.me/ineedlustin"}},[a("Tellegram"),t._v("\n                "+t._s(t.$t("telegrambutton"))+"\n              ")],1)])])])])])])])}),[],!1,null,null,null);s.default=i.exports}}]);