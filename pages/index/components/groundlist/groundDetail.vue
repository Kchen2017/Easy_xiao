<template>
	<view class="groundDetail">
		<view class="swip_con">
			<swiperSilder :swipArr="swipArr"></swiperSilder>
		</view>
	</view>
</template>

<script>
	import swiperSilder from "../swiperSilder.vue"
	export default {
		components: {
			swiperSilder
		},
		data(){
			return {
				swipArr: [{
					url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561467102487&di=51a2165e4319ce957afd6b2ba0d90d99&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130705%2F9527735_231540074000_2.jpg"
				},{
					url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561467102486&di=a0f7af7e144d068ed3ee6d2bc573ddeb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F53cdd1f7c1f21.jpg"
				},{
					url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561467102486&di=86986f0d5701322373092fd2a8ac962f&imgtype=0&src=http%3A%2F%2Fpic40.nipic.com%2F20140424%2F12259251_002036722178_2.jpg"
				}]
			}
		},
		methods: {
			
		},
		onLoad() {
			
		}
	}
</script>

<style>
	
</style>
