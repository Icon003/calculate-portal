(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{248:function(e,t,l){var content=l(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(37).default)("57aa4b28",content,!0,{sourceMap:!1})},249:function(e,t,l){"use strict";l(248)},250:function(e,t,l){var o=l(36)(!1);o.push([e.i,".form-calculate[data-v-c6f6a634]{display:flex;flex-direction:column;margin:-1em;width:100%}.form-calculate__item[data-v-c6f6a634]{display:flex;justify-content:flex-end;margin:1em}.form-calculate__button[data-v-c6f6a634],.form-calculate__input[data-v-c6f6a634]{width:100%}",""]),e.exports=o},251:function(e,t,l){"use strict";l.r(t);l(44);var o={data:function(){return{percent:0,listTypeProject:[{id:1,value:"box",label:"Коробочная версия"},{id:1,value:"saas",label:"SAAS"}],objFormValue:{typeProject:"",countEmployees:"",averageSalary:""},value:""}},methods:{generateReport:function(){var e=this;if(0===this.objFormValue.typeProject.length||0===this.objFormValue.countEmployees.length||0===this.objFormValue.averageSalary.length)this.$vs.notification({color:"rgb(211, 32, 41)",position:"top-center",title:"Ошибка валидации!",text:"Пожалуйста заполните все поля формы"});else{var t=this.$vs.loading({type:"corners",background:"#ffffff",percent:this.percent}),l=setInterval((function(){e.percent<=100&&t.changePercent("".concat(e.percent++,"%"))}),25);this.$store.dispatch("calculate",this.objFormValue),setTimeout((function(){t.close(),clearInterval(l),e.percent=0,e.$router.push("/report")}),2500)}}}},r=(l(249),l(38)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("form",{staticClass:"form-calculate"},[l("div",{staticClass:"form-calculate__item"},[l("vs-select",{attrs:{color:"#FF7700",placeholder:"Выберите версию"},model:{value:e.objFormValue.typeProject,callback:function(t){e.$set(e.objFormValue,"typeProject",t)},expression:"objFormValue.typeProject"}},e._l(e.listTypeProject,(function(t,o){return l("vs-option",{key:o,attrs:{label:t.label,value:t.value}},[e._v(e._s(t.label))])})),1)],1),e._v(" "),l("div",{staticClass:"form-calculate__item"},[l("vs-input",{staticClass:"form-calculate__input",attrs:{type:"number","label-placeholder":"Количество сотрудников"},model:{value:e.objFormValue.countEmployees,callback:function(t){e.$set(e.objFormValue,"countEmployees",t)},expression:"objFormValue.countEmployees"}})],1),e._v(" "),l("div",{staticClass:"form-calculate__item"},[l("vs-input",{staticClass:"form-calculate__input",attrs:{size:"large",type:"number","label-placeholder":"Средняя заработная плата в компании"},model:{value:e.objFormValue.averageSalary,callback:function(t){e.$set(e.objFormValue,"averageSalary",t)},expression:"objFormValue.averageSalary"}})],1),e._v(" "),l("div",{staticClass:"form-calculate__item"},[l("vs-button",{ref:"calculateButton",staticClass:"form-calculate__button",attrs:{size:"large"},on:{click:function(t){return t.preventDefault(),e.generateReport(t)}}},[e._v("Получить расчёт")])],1)])}),[],!1,null,"c6f6a634",null);t.default=component.exports},253:function(e,t,l){var content=l(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(37).default)("8e4495fa",content,!0,{sourceMap:!1})},256:function(e,t,l){"use strict";l(253)},257:function(e,t,l){var o=l(36)(!1);o.push([e.i,".page[data-v-27f32316]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}.page__container-logo[data-v-27f32316]{margin-bottom:3em}.page__form-container[data-v-27f32316]{width:50%}",""]),e.exports=o},259:function(e,t,l){"use strict";l.r(t);var o={components:{FormCalculate:l(251).default},data:function(){return{}}},r=(l(256),l(38)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"page"},[e._m(0),e._v(" "),l("div",{staticClass:"page__form-container"},[l("FormCalculate")],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page__container-logo"},[t("img",{staticClass:"page__logo",attrs:{src:"logo-portal.svg",alt:""}})])}],!1,null,"27f32316",null);t.default=component.exports;installComponents(component,{FormCalculate:l(251).default})}}]);