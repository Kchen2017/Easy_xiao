<template>
	<view class="index_con">
		<uni-nav-bar fixed="true">
			<view class="search">
				<input type="text" placeholder="你想玩啥" />
				<text class="input"></text>
				<text class="iconfont icon-sousuo-m"></text>
			</view>
			<view slot="left" class="topBarCen">
				<text class="iconfont icon-dingwei">北京</text>
			</view>
			<view slot="right" class="topBarCen">
				<text class="iconfont icon-saoma"></text>
			</view>
		</uni-nav-bar>
		<view class="index_body">
			<view class="chooseType">
				<view @click="goToFilter('basketball')">
					<text class="iconfont icon-lanqiu"></text>
					<text class="go_swipLabel">篮球</text>
				</view>
				<view @click="goToFilter('football')">
					<text class="iconfont icon-zuqiu"></text>
					<text class="go_swipLabel">足球</text>
				</view>
				<view @click="goToFilter('badminton')">
					<text class="iconfont icon-yumaoqiu1"></text>
					<text class="go_swipLabel">羽毛球</text>
				</view>
				<view @click="goToFilter('tennis')">
					<text class="iconfont icon-wangqiu"></text>
					<text class="go_swipLabel">网球</text>
				</view>
				<view @click="goToFilter('tennis')">
					<text class="iconfont icon-bingpangqiu"></text>
					<text class="go_swipLabel">兵乓球</text>
				</view>
			</view>
			
			<view class="swip">
				<view class="uni-padding-wrap">
					<view class="page-section swiper">
						<view class="page-section-spacing">
							<swiper class="swiper" indicator-dots="true" autoplay="false">
								<swiper-item>
									<view class="swiper-item fir" :style="{'background-image': 'url('+address+')'}"></view>
								</swiper-item>
								<swiper-item>
									<view class="swiper-item scon" style="background-image: url('http://pic18.nipic.com/20111214/6834314_092609528357_2.jpg')">B</view>
								</swiper-item>
								<swiper-item>
									<view class="swiper-item third" style="background-image: url('http://pic33.nipic.com/20130928/7862248_113142019357_2.jpg')">C</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
		data() {
			return {
				title: 'Hello',
				address: "http://pic40.nipic.com/20140424/12259251_002036722178_2.jpg"
			}
		},
		onLoad() {

		},
		methods: {
			goToFilter(type){
				alert(type)
			}
		}
	}
</script>

<style>
	.index_con .topBarCen {
		width: 100%;
		text-align: center;
	}
	.index_con .icon-saoma {
		font-size: 25px;
	}
	.index_con .search{
		background-color: #f5f5f5;
		height: 30px;
		width: 100%;
		border-radius: 22px;
		position: relative;
	}
	.index_con .search input{
		height: 100%;
		width: 84%;
		margin-left: 12%;
	}
	.index_con .icon-sousuo-m{
		position: absolute;
		left: 5px;
		top: -5px;
		font-size: 21px;
	}
	.index_con .index_body {
		padding: 0 10px;
		padding-top: 44px;
	}
	.index_con .chooseType {
		height: 160upx;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		padding-top: 30upx;
	}
	.index_con .chooseType view {
		width: 100upx;
		text-align: center;
	}
	.index_con .chooseType view .iconfont {
		font-size: 40px;
	}
	.index_con .swip {
		padding-top: 10upx;
	}
	.index_con .swip .swiper-item {
		height: 100%;
		background-size:cover;
	}
</style>
