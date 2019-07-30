<template>
	<view class="groupD">
		<view class="header">
			<view class="photo">
				<image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3000033855,214344624&fm=26&gp=0.jpg"></image>
			</view>
			<view class="title">
				<view class="name">玩玩圈</view>
				<view class="tag">
					<view>高手</view><view>180</view>
				</view>
				<view class="label">俺们瞧不起NBA！</view>
			</view>
		</view>
		<view class="info">
			<view class="com">时间：2019.07.06 14:00-18:00</view>
			<view class="com">付费方式：AA制</view>
			<view class="com adr">场地：北京五棵松克拉克球场<text class="iconfont icon-location"></text></view>
			<view class="persons">
				<view>成员：</view>
				<scroll-view scroll-y class="scrollView" >
					<view class="srcollCon">
						<view class="item" v-for="(item, index) in list" :key="index" @click="gotoPer">
							<view class="phone">
								<image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3000033855,214344624&fm=26&gp=0.jpg"></image>
							</view>
							<view class="name">Curry</view>
						</view>
					</view>
				</scroll-view>
			</view>
			
		</view>
		<view class="person_msg">
			<sticky :scrollTop="scrollTop">
				<template v-slot:header>
					<xyz-tab :tabList="tabList" @tabSelect="tabSelect"></xyz-tab>
				</template>
				<template v-slot:content>
					<view class="panel" v-if="tabType === 'dong'">
						<dongtaiCom></dongtaiCom>
					</view>
				</template>
			</sticky>
			
		</view>
	</view>
</template>

<script>
	import {uniTag } from '@dcloudio/uni-ui'
	import xyzTab from "@/components/xyz-tab.vue"
	import dongtaiCom from "../dongtaiCom.vue"
	import sticky from "@/components/sticky.vue"
	export default {
		components: {
			uniTag,
			xyzTab,
			dongtaiCom,
			sticky
		},
		data(){
			return {
				tabList: [{
					label: "动态",
					value: "dong"
				}],
				tabType: "dong",
				list: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
				isfixedTab: false,
				scrollTop: 0
			}
		},
		methods:{
			tabSelect(value){
				this.tabType = value
			},
			gotoPer(){
				uni.navigateTo({
					url: "../friends_per"
				})
			}
		},
		onPageScroll(e) {
			this.scrollTop= e.scrollTop
		}
	}
</script>

<style>
	.groupD {
		height: 100%;
	}
	.header {
		display: flex;
		/* justify-content: space-between; */
		padding: 40upx;
	}
	.photo{
		width: 160upx;
		height: 160upx;
		border-radius: 160upx;
		overflow: hidden;
		border: 6upx solid #dddd;
	}
	.photo image{
		width: 100%;
		height: 100%;
	}
	.title {
		padding-left: 40upx;
	}
	.title .name {
		height: 80upx;
		line-height: 80upx;
		font-weight: bold;
	}
	.title .tag {
		display: flex;
	}
	.tag view {
		width: 100upx;
		font-size: 14upx;
		background-color: pink;
		text-align: center;
		border-radius: 20upx;
		margin-right: 10upx;
		height: 40upx;
		line-height: 40upx;
		color: #ffff;
	}
	.label {
		color: #cccc;
		font-size: 28upx;
		padding-top: 10upx;
	}
	.info {
		padding: 40upx;
		font-size: 32upx;
	}
	.info .com {
		height: 60upx;
		line-height: 60upx;
	} 
	.adr {
		display: flex;
		justify-content: space-between;
		padding-right: 20upx;
	}
	.persons .item {
		width: 100upx;
		margin-right: 10px;
	}
	.persons .phone {
		width: 100upx;
		height: 100upx;
		overflow: hidden;
		border-radius: 28upx;
		border: 2upx solid #007AFF;
	}
	.persons .phone image{
		width: 100%;
		height: 100%;
	}
	.persons .item .name {
		width: 100%;
		text-align: center;
		font-size: 24upx;
		color: #ccc;
		margin-top: 10upx;
	}
	.scrollView {
		white-space:nowrap;
		padding: 20upx;
		height: 400upx;
	}
	.srcollCon {
		display: flex;
		flex-wrap: wrap;
	}
	.srcollCon .item {
		margin-bottom:20upx ;
	}
	.isfix{
		position: fixed;
		width: 100%;
		top: 44px;
		z-index: 9999999;
	}
</style>
