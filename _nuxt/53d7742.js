(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{252:function(t,e,r){var content=r(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("63cf5b38",content,!0,{sourceMap:!1})},254:function(t,e,r){"use strict";r(252)},255:function(t,e,r){var o=r(36)(!1);o.push([t.i,".page-report[data-v-faa6e29c]{width:100%;max-width:794px;height:100%;margin:0 auto}.page-report__container-logo[data-v-faa6e29c]{display:flex;flex-direction:column;align-items:center;margin-top:32px}.page-report__header[data-v-faa6e29c]{display:flex;justify-content:center;align-items:center;width:100%;padding:1em;font-size:32px}.page-report__title[data-v-faa6e29c]{font-size:inherit;font-weight:600;text-align:center}.page-report__cell-header-table[data-v-faa6e29c]{font-size:14px;font-weight:600}.page-report__cell-body-table[data-v-faa6e29c]{font-size:14px;font-weight:400}.page-report__container-button[data-v-faa6e29c]{display:flex;flex-direction:column;width:100%;margin-top:2em}.page-report__back-button[data-v-faa6e29c]{width:100%}@media print{.page-report__container-button[data-v-faa6e29c]{display:none}}",""]),t.exports=o},258:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{}},computed:{resultTimeToSearchInformation:function(){return this.$store.getters.GET_TIME_TO_SEARCH_INFORMATION},resultTimeFrequentlyAskedQuestions:function(){return this.$store.getters.GET_TIME_FREQUENTLY_ASKED_QUESTIONS},resultTimeRoutines:function(){return this.$store.getters.GET_TIME_ROUTINES},resultTimeAccessPersonalInformation:function(){return this.$store.getters.GET_TIME_ACCESS_PERSONAL_INFORMATION},resultSavingsPerYear:function(){return this.$store.getters.GET_SAVINGS_PER_YEAR},resultClearSavingsPerYear:function(){return this.$store.getters.GET_CLEAR_SAVINGS_PER_YEAR},resultClearSavingsOverThreeYears:function(){return this.$store.getters.GET_CLEAR_SAVINGS_OVER_THREE_YEARS},resultProfitability:function(){return this.$store.getters.GET_PROFITABILITY},resultPaybackPeriod:function(){return this.$store.getters.GET_PAYBACK_PERIOD}},methods:{printReport:function(){window.print()},backPageCalculate:function(){this.$router.push("/")}}},l=(r(254),r(38)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-report"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"page-report__main"},[r("div",{staticClass:"page-report__content"},[r("vs-table",{staticClass:"page-report__table",scopedSlots:t._u([{key:"thead",fn:function(){return[r("vs-tr",{staticClass:"page-report__item-header-table"},[r("vs-th",{staticClass:"page-report__cell-header-table"},[t._v("Наименование")]),t._v(" "),r("vs-th",{staticClass:"page-report__cell-header-table"},[t._v("Сэкономленные средства")])],1)]},proxy:!0},{key:"tbody",fn:function(){return[r("vs-tr",{staticClass:"page-report__item-body-table"},[r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v("Экономия на времени поиска информации")]),t._v(" "),r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v(t._s(t.resultTimeToSearchInformation?t.resultTimeToSearchInformation.toLocaleString("ru-RU",{currencyDisplay:"code",currency:"BYN"}):0)+" BYN")])],1),t._v(" "),r("vs-tr",{staticClass:"page-report__item-body-table"},[r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v("Экономия на часто задаваемых вопросах")]),t._v(" "),r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v(t._s(t.resultTimeFrequentlyAskedQuestions?t.resultTimeFrequentlyAskedQuestions.toLocaleString("ru-RU",{currencyDisplay:"code",currency:"BYN"}):0)+" BYN")])],1),t._v(" "),r("vs-tr",{staticClass:"page-report__item-body-table"},[r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v("Экономия на рутине (пример на основе оформления справок)")]),t._v(" "),r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v(t._s(t.resultTimeRoutines?t.resultTimeRoutines.toLocaleString("ru-RU",{currencyDisplay:"code",currency:"BYN"}):0)+" BYN")])],1),t._v(" "),r("vs-tr",{staticClass:"page-report__item-body-table"},[r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v("Экономия на доступе к личной информации")]),t._v(" "),r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v(t._s(t.resultTimeAccessPersonalInformation?t.resultTimeAccessPersonalInformation.toLocaleString("ru-RU",{currencyDisplay:"code",currency:"BYN"}):0)+" BYN")])],1),t._v(" "),r("vs-tr",{staticClass:"page-report__item-body-table"},[r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v("Общая экономия в год")]),t._v(" "),r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v(t._s(t.resultSavingsPerYear?t.resultSavingsPerYear.toLocaleString("ru-RU",{currencyDisplay:"code",currency:"BYN"}):0)+" BYN")])],1),t._v(" "),r("vs-tr",{staticClass:"page-report__item-body-table"},[r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v("Чистая общая экономия в год")]),t._v(" "),r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v(t._s(t.resultClearSavingsPerYear?t.resultClearSavingsPerYear.toLocaleString("ru-RU",{currencyDisplay:"code",currency:"BYN"}):0)+" BYN")])],1),t._v(" "),r("vs-tr",{staticClass:"page-report__item-body-table"},[r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v("Чистая общая экономия за три года")]),t._v(" "),r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v(t._s(t.resultClearSavingsOverThreeYears?t.resultClearSavingsOverThreeYears.toLocaleString("ru-RU",{currencyDisplay:"code",currency:"BYN"}):0)+" BYN")])],1),t._v(" "),r("vs-tr",{staticClass:"page-report__item-body-table"},[r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v("Рентабельность портала для вас")]),t._v(" "),r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v(t._s(t.resultProfitability?t.resultProfitability:0)+"%")])],1),t._v(" "),r("vs-tr",{staticClass:"page-report__item-body-table"},[r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v("Срок окупаемости портала для вас")]),t._v(" "),r("vs-td",{staticClass:"page-report__cell-body-table"},[t._v(t._s(t.resultPaybackPeriod?t.resultPaybackPeriod.toLocaleString("ru-RU",{percent:"percent"}):0)+" мес.")])],1)]},proxy:!0}])})],1),t._v(" "),r("div",{staticClass:"page-report__container-button"},[r("vs-button",{staticClass:"page-report__back-button",on:{click:function(e){return e.preventDefault(),t.printReport(e)}}},[t._v("Печать")]),t._v(" "),r("vs-button",{staticClass:"page-report__back-button",attrs:{border:""},on:{click:function(e){return e.preventDefault(),t.backPageCalculate(e)}}},[t._v("Пересчитать")])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-report__container-logo"},[e("img",{staticClass:"page-report__logo",attrs:{src:"logo-portal.svg",alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-report__header"},[r("h1",{staticClass:"page-report__title"},[t._v("Экономия при использовании СИТИ.PORTAL")])])}],!1,null,"faa6e29c",null);e.default=component.exports}}]);