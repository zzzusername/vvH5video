<template>

</template>
<script>
	import $ from 'jquery'
	import axios from 'axios'

  console.log(   window.mediaURL, window.SkdURL)

	export default {
		data: function() {
			return {

			}
		},
		created: function() {
		},
		mounted() {
      console.log(window.SkdURL)
      window.open(window.SkdURL)

		},
		methods: {}
	}
</script>
<style>

</style>

