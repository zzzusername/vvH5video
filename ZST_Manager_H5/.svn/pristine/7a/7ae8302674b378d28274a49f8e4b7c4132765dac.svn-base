<template>
	<div class="box404">
		<div class="content404">
			<img src="../assets/404logo.png" alt="">
			<p class="prompt">很遗憾，您访问的页面挖不到了...</p>
			<p class="jump"><span>{{ count }}</span> 秒后跳转到上一页，如没有跳转，请
				<a href="javascript:history.back(-1)">点击这里</a>
			</p>
		</div>
	</div>
</template>
<script>
	import $ from 'jquery'
	$(function() {
		var hei = document.documentElement.clientHeight;
		$('.box404').css('height', hei);
	})
	export default {
		data: function() {
			return {
				count: 5,
				timer: null,
			}
		},
		mounted() {
			var hei = document.documentElement.clientHeight;
			$('.box404').css('height', hei);
			this.getCode();
		},
		methods: {
			getCode() {
				const TIME_COUNT = 5;
				this.timer = setInterval(() => {
					if(this.count > 0 && this.count <= TIME_COUNT) {
						this.count--;
					} else {
						clearInterval(this.timer);
						window.history.back()
					}
				}, 1000)
			}
		}
	}
</script>
<style scoped>
	.box404 {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #354166 url(../assets/404bg.png) no-repeat center bottom;
	}
	
	.content404 {
		width: 376px;
		height: 254px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -188px;
		margin-top: -167px;
		text-align: center;
		line-height: 50px;
	}
	
	.content404 .prompt {
		font-size: 22px;
		color: #5ae09d;
	}
	
	.content404 .jump {
		color: #fff;
		font-size: 16px;
	}
	
	.content404 .jump span,
	.content404 .jump a {
		color: #5ae09d;
	}
</style>