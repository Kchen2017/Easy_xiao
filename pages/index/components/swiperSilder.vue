<template>
	<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay">
		<swiper-item v-for="(item, index) in swipArr" :key="index" @click="openBrower(item.webUrl)">
			<image :src="item.url"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	import browser from "../../../components/browser"
	export default {
		props: {
			swipArr: {
				type: Array,
				default: []
			},
			autoplay: {
				type: Boolean,
				default: false
			},
			indicatorDots: {
				type: Boolean,
				default: true
			},
		},
		data(){
			return {
				
			}
		},
		methods: {
			openBrower(url){
				var options = {
					'data': '123'
				}
				browser.init(options)
				browser.show(url)
			}
		}
	}
</script>

<style>
	.swiper {
		height: 360upx;
	}
	.swiper image {
		height: 100%;
		width: 100%;
	}
</style>
