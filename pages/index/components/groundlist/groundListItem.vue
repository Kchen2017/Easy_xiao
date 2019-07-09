<template>
	<view @click="gotoDetail"  class="item" :class="{border: bottomBorder}" >
		<view class="go_list_img">
			<image src="http://qcloud.dpfile.com/pc/UNEToIAeCRQPxjLQt6_McVI4AjmAwOV_xVe9Mf7BKJUDnw8jcyW4sc-iLuwOCZlKZSUjBikR5Ecy-DoGYkMhlg.jpg"></image>
		</view>
		<view class="go_list_context">
			<view>五棵松开伊拉克球场</view>
			<view style="font-size: 14px;">篮球</view>
			<view>
				<text class="iconfont icon-dingwei">北京市海淀区五棵松</text>
			</view>
			<view>
				<text class="iconfont icon-yuding">线上预定</text>
				<text style="font-size: 14px;">￥20/人</text>
			</view>
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
					url: "./"+this.path+"/groundDetail",
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
	.border:before {
		content: "";
		position: absolute;
		height: 0;
		width: 680upx;
		border: 1px solid #f1eeee;
		left: 0;
		bottom: -16upx;
	}
	.go_list_img image {
		height: 200upx;
		width: 200upx;
	}
	.go_list_context {
		height: 200upx;
		padding-left: 20upx;
		display: flex;
		flex-direction:column;
		justify-content: space-between;
	}
	.go_list_context .iconfont {
		font-size: 14px;
	}
</style>
