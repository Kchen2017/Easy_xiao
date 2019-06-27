<template>
	<view class="groundDetail">
		<view class="swip_con">
			<swiperSilder :swipArr="swipArr"></swiperSilder>
			<view class="operator">
				<text @click="savein=!savein" class="iconfont" :class="{'icon-shoucang': savein, 'icon-shoucang1': !savein}"></text>
				<text class="iconfont icon-fenxiang2"></text>
			</view>
		</view>
		<view v-if="popupshow" class="popup">
			<text class="iconfont icon-shoucang-copy-copy"></text><br>
			<text>{{popupMsg}}</text>
		</view>
	</view>
</template>

<script>
	import swiperSilder from "../swiperSilder.vue"
	import {uniPopup} from '@dcloudio/uni-ui'
	export default {
		components: {
			swiperSilder,
			uniPopup
		},
		data(){
			return {
				swipArr: [{
					url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561467102487&di=51a2165e4319ce957afd6b2ba0d90d99&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130705%2F9527735_231540074000_2.jpg"
				},{
					url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561467102486&di=a0f7af7e144d068ed3ee6d2bc573ddeb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F53cdd1f7c1f21.jpg"
				},{
					url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561467102486&di=86986f0d5701322373092fd2a8ac962f&imgtype=0&src=http%3A%2F%2Fpic40.nipic.com%2F20140424%2F12259251_002036722178_2.jpg"
				}],
				savein: true,
				popupshow: true,
				popupMsg: "关注成功"
			}
		},
		methods: {
			popupShowFun(){
				setTimeout(() => {
					this.popupshow = !this.popupshow
				},1000)
			}
		},
		watch:{
			savein: function(val){
				if(val){
					this.popupMsg = "关注成功"
					this.popupshow = true
				}else{
					this.popupMsg = "取消关注成功"
					this.popupshow = true
				}
				this.popupShowFun()
			}
		},
		onLoad() {
			
		}
	}
</script>

<style>
	.swip_con {
		position: relative;
	}
	.operator {
		position: absolute;
		top: 20upx;
		right: 20upx;
		width: 130upx;
		height: 60upx;
		line-height: 60upx;
		border-radius: 40upx;
		display: flex;
		background-color: #ccc;
		justify-content: space-between;
		padding: 0 20upx;
	}
	.popup {
		position: fixed;
		top: 50%;
		left: 50%;
		margin-top: -40px;
		margin-left: -40px;
		width: 80px;
		height: 80px;
		line-height: 80px;
		text-align: center;
		font-size: 14px;
	}
</style>
