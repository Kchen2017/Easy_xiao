<template>
	<view @click="goSwitch" class="switch">
		<text class="iconfont icon-qiehuan3"></text>
		<text class="txt">{{text}}</text>
	</view>
</template>

<script>
	export default {
		props: ["text", "url"],
		data(){
			return {
				
			}
		},
		methods: {
			goSwitch(){
				uni.navigateTo({
					url: this.url
				})
			}
		}
	}
</script>

<style>
	.switch {
		position: fixed;
		top: 960upx;
		left: 600upx;
		width: 120upx;
		height: 120upx;
		font-size: 24upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #5eaef3;
		border-radius: 120upx;
		color: #ffff;
	}
	.switch .iconfont {
		font-size: 50upx;
	}
</style>
