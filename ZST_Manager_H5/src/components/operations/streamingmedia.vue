<template>

</template>
<script>
	import $ from 'jquery'
	import axios from 'axios'

	export default {
		data: function() {
			return {

			}
		},
		created: function() {
		},
		mounted() {
		  console.log(window.mediaURL)
      window.open(window.mediaURL);
		},
		methods: {}
	}
</script>
<style>

</style>

