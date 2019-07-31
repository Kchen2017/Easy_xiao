<template>
	<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay">
		<swiper-item v-for="(item, index) in swipArr" :key="index">
			<image :src="item.url"></image>
		</swiper-item>
	</swiper>
</template>

<script>
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
