(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{477:function(t,e,a){"use strict";a.r(e);var s=a(2),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"六、记element-ui的table表格的一个bug"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、记element-ui的table表格的一个bug"}},[t._v("#")]),t._v(" 六、记element-ui的table表格的一个bug")]),t._v(" "),e("h2",{attrs:{id:"_1-bug复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-bug复现"}},[t._v("#")]),t._v(" 1.bug复现")]),t._v(" "),e("p",[t._v("​        我们使用table表格的时候可能会遇到一些需求，要求切换不同的条件时，修改对应的表格，由于我的项目是用vue搭建的，所以自然而然的想到了通过v-if进行解决，添加完v-if之后正常的切换数据，此时却出现了一个bug，那就是table表格会出现各种表格列错位，列表有数据但是不显示，或者其他的显示bug。")]),t._v(" "),e("h2",{attrs:{id:"_2-bug产生原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-bug产生原因"}},[t._v("#")]),t._v(" 2.bug产生原因")]),t._v(" "),e("p",[t._v("​        element-ui的表格是通过循环产生的，而vue在通过v-if渲染dom的时候会重新渲染dom树，此时他有一个性能优化机制，那就是相同的dom会被复用。这种机制会导致两个问题，一是dom采用原本没有v-if的dom树的基础上操作dom会产生结构上的改变，导致错位之类的视觉bug；二是相似的dom有可能因为复用的原因覆盖后面dom的数据，导致有数据但不显示。")]),t._v(" "),e("h2",{attrs:{id:"_3-解决方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-解决方法"}},[t._v("#")]),t._v(" 3.解决方法")]),t._v(" "),e("p",[t._v("​      第一个的问题最好的解决方法是重新从头开始渲染table表格的dom树，可以给el-table标签添加一个ref=“table”属性，然后在数据刷新的方法后面加上")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("this.$nextTick(() => {\n   this.$refs.table.daLayout()\n})\n")])])]),e("p",[t._v("解决。")]),t._v(" "),e("p",[t._v('​        第二个问题可以通过告诉vue我们的列数据是独一无二的，不需要复用，即给对应的v-if标签加上:key="Math.random()"让vue渲染时方便区分。')])])}),[],!1,null,null,null);e.default=r.exports}}]);