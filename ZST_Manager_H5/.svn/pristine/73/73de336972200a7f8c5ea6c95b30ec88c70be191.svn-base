<template>
  <div id="app">
 
    <router-view></router-view>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'App',
  mounted: function(){
    var wid = document.documentElement.clientWidth,
		hei = document.documentElement.clientHeight;
	var fheight = $('.Copyright').height();
	$('.wraper').css('height', hei - fheight);
	$(window).resize(function () {
		var resHeight = $(window).height();
    $('#app').height(resHeight);
    $('.loginBody').height(resHeight);
	})
  }
}
import nwScroll from './style/nwScroll.min.js'
</script>

<style>
 @import url("style/init.css");
 @import url("style/nwScroll.css");
 #app {
   height: 100%;
   min-width: 1280px;
 }
 .el-message-box__header {
   right: -1px;
 }
 .el-select-dropdown__list {
   padding: 6px 0 18px;
 }
</style>
