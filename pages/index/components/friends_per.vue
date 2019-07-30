<template>
	<view class="groupD">
		<view class="header">
			<view class="backgroup"></view>
			<view class="photo">
				<image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3000033855,214344624&fm=26&gp=0.jpg"></image>
			</view>
			<view class="title">
				<view>龙骑士</view>
				<view style="font-size: 14px;">签名：不服就干</view>
			</view>
		</view>
		<view class="context">
			<view class="fens">
				<view class="item border_hen">
					<view class="num">999</view>
					<view class="zi">粉丝</view>
				</view>
				<view class="item border_hen">
					<view class="num">999</view>
					<view class="zi">关注</view>
				</view>
				<view class="item">
					<view class="num">999</view>
					<view class="zi">获赞</view>
				</view>
			</view>
			<view class="opertor">
				<view class="kankan operorCom" style="margin-right: 60upx;">关注</view>
				<view class="liaoliao operorCom sixin">私信</view>
			</view>
		</view>
		<view class="person_msg">
			<sticky :scrollTop="scrollTop">
				<template v-slot:header>
					<xyz-tab :tabList="tabList" @tabSelect="tabSelect"></xyz-tab>
				</template>
				<template v-slot:content>
					<view v-if="tabType === 'dong'">
						<dongtaiCom></dongtaiCom>
					</view>
					<view v-if="tabType === 'ta'" class="ta">
						<groupListItem v-for="(item, index) in golist" 
									:value="item"
									:key="index" 
									:bottomBorder="index !== (golist.length-1)"></groupListItem>
					</view>
				</template>
			</sticky>
		</view>
		
		
		
	</view>
</template>

<script>
	import {uniTag } from '@dcloudio/uni-ui'
	import xyzTab from "@/components/xyz-tab.vue"
	import dongtaiCom from "./dongtaiCom.vue"
	import groupListItem from './grouplist/groupListItem.vue'
	import sticky from "@/components/sticky.vue"
	export default {
		components: {
			uniTag,
			xyzTab,
			dongtaiCom,
			groupListItem,
			sticky
		},
		data(){
			return {
				golist: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
				tabList: [{
					label: "动态",
					value: "dong"
				},{
					label: "ta局",
					value: "ta"
				}],
				tabType: "dong",
				scrollTop: 0
			}
		},
		methods:{
			tabSelect(value){
				uni.pageScrollTo({
					scrollTop: 289,
					duration: 300
				});
				this.tabType = value
			}
		},
		onPageScroll(e) {
			console.log(e.scrollTop)
			this.scrollTop= e.scrollTop
		}
	}
</script>

<style>
	.header{
		width: 100%;
		height: 290upx;
		position: relative;
	}
	.backgroup{
		height: 100%;
		background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561467102487&di=51a2165e4319ce957afd6b2ba0d90d99&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130705%2F9527735_231540074000_2.jpg");
		background-size:cover;
		opacity: 0.7;
		box-shadow: inset 0px -60upx 60upx #000000;
	}
	.header .photo {
		position: absolute;
		width: 140upx;
		height: 140upx;
		left: 50upx;
		top: 150upx;
		border: 8upx solid #dddd;
		border-radius: 140upx;
		overflow: hidden;
	}
	.photo image {
		width: 100%;
		height: 100%;
	}
	.title {
		position: absolute;
		height: 100upx;
		line-height: 60upx;
		left: 260upx;
		top: 190upx;
		color: #ffffff;
		font-weight: bolder;
	}
	.context {
		height: 170upx;
		background-color: #4e4d4d;
		color: #ffff;
		font-size: 32upx;
		text-align: center;
		padding: 60upx;
	}
	.context .fens {
		display: flex;
		justify-content: center;
	}
	.context .opertor {
		display: flex;
		justify-content: center;
	}
	.context .fens .item {
		width: 210upx;
	}
	.context .fens .item .num {
		font-size: 40upx;
		font-weight: bold;
	}
	.context .fens .item .zi {
		font-size: 24upx;
	}
	.border_hen {
		position: relative;
	}
	.border_hen:before {
		content: "";
		position: absolute;
		width: 0;
		height: 32upx;
		border: 2upx solid #8a8a8a;
		top: 30upx;
		right: 0;
	}
	.operorCom {
		width: 170upx;
		background-color: #5eaef3;
		height: 60upx;
		line-height: 60upx;
		border-radius: 30upx;
		border: 1px solid #5eaef3;
	}
	.opertor .sixin {
		background-color: #4e4d4d;
		border: 1px solid #FFFFFF;
	}
	.opertor {
		padding-top: 50upx;
	}
	.ta {
		padding: 20upx;
	}
</style>
