<template>
  <div id="app" ref="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
      return {

      }

      },
      mounted: function () {
         var hei = document.documentElement.clientHeight;
              console.log("app"+hei)
         var app =document.getElementById("app");
         app.style.height=hei+"px";




    },
  methods: {

  }




}
</script>


<style>
 @import url("style/init.css");
 @import url("style/common.css");
html,body,#app{
width:100%;
margin:0;
padding:0;
  background-color: #c3c3c3;

}


</style>
