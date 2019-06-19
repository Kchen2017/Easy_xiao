<template>
	<view class="content">
		<uni-nav-bar fixed="true">
			<view>
				<text class="iconfont">&#xf0308;</text>
			</view>
			<view slot="left">left</view>
			<view  slot="right">right</view>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
</style>
