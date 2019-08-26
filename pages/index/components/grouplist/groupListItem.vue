<template>
	<view @click="gotoDetail" class="item" :class="{border: bottomBorder}">
		<view class="list_img">
			<image :src="value.avatarUrl"></image>
		</view>
		<view class="list_con">
			<view class="long-title">{{value.name}}</view>
			<view>时间：2019.4.24</view>
			<view  class="long-title">地点：{{value.adress}}</view>
			<view>标签：{{value.sign}}</view>
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
					url: "./"+this.path+"groupDetail",
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
		width: 200upx;
		height: 200upx;
		margin-right: 10upx;
		border-radius: 20upx;
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
