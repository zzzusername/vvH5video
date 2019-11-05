<template>
  <div class="tabCont">
		<ul class="guide">
			<li v-for='(item,index) in tabData' :key="item.num"
				:class="{active:tabIndex == index}"
				@click="tabClick(index)"
				>{{item.text}}</li>
		</ul>
  </div>
</template>
<script>
export default {
	 data() {
    return {
			tabData : [
				{
					text : '工作单位',
					num : '1',
				},
				{
					text : '职务',
					num : '2',
				},
				{
					text : '权限组',
					num : '3',
				},
				{
					text : '管理员',
					num : '4',
				},
				{
					text : 'app设置',
					num : '5',
				},
				{
					text : '完成',
					num : '6',
				},
			],
			tabIndex : 0,
    };
	},
	methods:{
		tabClick(index){
			this.tabIndex = index
		}
	}
}
</script>
<style scoped>	
	.tabCont{
		padding: 20px;
	}
	.guide{
		display: flex;
		justify-content: space-around;
		align-content: center;
	}
	.guide li{
		flex: 1;
		margin-right: 10px;
		line-height: 35px;
		border: 1px solid #fff;
		border-radius: 5px;
		text-align: center;
	}
	.guide li:last-child{
		margin-right: 0;
	}
	.guide .active{
		background: #57e29b;
		border: 1px solid #57e29b;
	}
</style>
