<template>
	<view @click="gotoDetail" class="item" :class="{border: bottomBorder}">
		<view class="list_img">
			<image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3000033855,214344624&fm=26&gp=0.jpg"></image>
		</view>
		<view class="list_con">
			<view>龙骑士</view>
			<view>时间：2019.4.24</view>
			<view>地点：凯翔篮球馆</view>
			<view>标签：</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			bottomBorder: {
				type: Boolean,
				default: true
			},
			value: {
				type: Object,
				default: {}
			},
			path: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			gotoDetail(){
				uni.navigateTo({
					url: "./"+this.path+"/groupDetail",
					animationType: 'pop-in',
					animationDuration: 200
				})
			}
		}
	}
</script>

<style>
	.item {
		display: flex;
		margin-bottom: 40upx;
		position: relative;
	}
	.list_img image {
		width: 300upx;
		height: 200upx;
	}
	.list_con {
		height: 200upx;
		display: flex;
		flex-direction:column;
		justify-content: space-between;
		font-size: 14px;
	}
	.border:before {
		content: "";
		position: absolute;
		height: 0;
		width: 680upx;
		border: 1px solid #f1eeee;
		left: 0;
		bottom: -16upx;
	}
</style>
