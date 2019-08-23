<template>
	<view class="index_con">
		<uni-nav-bar fixed="true" :backgroundColor="'#5eaef3'" :color="'#fff'">
			<view @click="gotoSearch" class="search">
				<!-- <input type="text" placeholder="你想玩啥" /> -->
				<text class="input">你想玩啥</text>
				<text class="iconfont icon-sousuo1" style="color: #000000;"></text>
			</view>
			<view @click="goCity" slot="left" class="topBarCen">
				<text class="iconfont icon-location">{{city}}</text>
			</view>
			<view slot="right" class="topBarCen">
				<text class="iconfont icon-saoma" @click="saomaFun"></text>
			</view>
		</uni-nav-bar>
		<view class="index_body">
			
			<!-- 轮播图--- -->
			<view class="swip">
				<swiperSilder :swipArr="swipArr" :autoplay="true"></swiperSilder>
			</view>
			<!-- 选择运动的类型 -->
			<view class="chooseType" style="margin-bottom: 40upx;">
				<view @click="goToFilter('basketball')">
					<text class="iconfont icon-lanqiu"></text>
					<view class="go_swipLabel">篮球</view>
				</view>
				<view @click="goToFilter('football')">
					<text class="iconfont icon-zuqiu"></text>
					<view class="go_swipLabel">足球</view>
				</view>
				<view @click="goToFilter('badminton')">
					<text class="iconfont icon-yumaoqiu1"></text>
					<view class="go_swipLabel">羽毛球</view>
				</view>
				<view @click="goToFilter('tennis')">
					<text class="iconfont icon-wangqiu"></text>
					<view class="go_swipLabel">网球</view>
				</view>
				<view @click="goToFilter('tennis')">
					<text class="iconfont icon-yingyu-cuotiben"></text>
					<view class="go_swipLabel">英语角</view>
				</view>
			</view>
			<!-- 服务类型 -->
			<view class="servers_type" style="margin-bottom: 40upx;">
				<view class="typeItem" @click="selecttypeFun('ground')">
					<view>我的地盘我做主</view>
					<view class="btn">立即找场</view>
				</view>
				<view class="typeItem" @click="selecttypeFun('group')">
					<view>无兄弟不运动</view>
					<view class="btn">搜索运动局</view>
				</view>
				<view class="typeItem">
					<view>跟着专业的玩</view>
					<view class="btn">找教练</view>
				</view>
				<view class="typeItem">
					<view>传授洪荒之力</view>
					<view class="btn">找学员</view>
				</view>
			</view>
			<!-- EasyDo有一件解决 -->
			<view class="easyDo" style="margin-bottom: 40upx;">
				<view class="title">Easy Do</view>
				<view class="msg">
					专治运动障碍综合症，帮助您一键解决“去哪”“和谁”，快来一起 
					<text class="go">Easy Do</text>
					<text class="iconfont icon-you1"></text>
				</view>
			</view>
			<!-- 场地 -->
			<view class="playground" style="margin-bottom: 40upx;">
				<view class="title">精选场地</view>
				<view class="list">
					<groundlistItem v-for="(item, index) in groundlist" 
							:path="'components/groundlist'"
							:dataItem="item"
							:key="index" 
							:bottomBorder="index !== (groundlist.length-1)"></groundlistItem>
				</view>
				<view @click="selecttypeFun('ground')" class="checkMore">查看更多场地</view>
			</view>
			<!-- 球局 -->
			<view class="playgroup" style="margin-bottom: 40upx;">
				<view class="title">热门局</view>
				<view class="list">
					<groupListItem v-for="(item, index) in grouplist" 
							:path="'components/grouplist'"
							:value="item"
							:key="index" 
							:bottomBorder="index !== (grouplist.length-1)"></groupListItem>
				</view>
				<view @click="selecttypeFun('group')" class="checkMore">查看更多局</view>
			</view>
		
		<!-- 弹出层 -->
		<xy-dialog 
			:showDia="showSelect" 
			:isShowFirm="false"
			@cancelButton="clickCancel">
			<view class="dia_slot">
				<view @click="selecttypeFun('ground')">找场</view>
				<view @click="selecttypeFun('group')">找局</view>
			</view>
			
		</xy-dialog>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import xyDialog from "@/components/xy-dialog.vue"
	import groundlistItem from './components/groundlist/groundListItem.vue'
	import groupListItem from './components/grouplist/groupListItem.vue'
	import swiperSilder from "./components/swiperSilder.vue"
	import userApi from "../../common/api/userApi"
	export default {
		components: {uniNavBar, xyDialog, groundlistItem, groupListItem, swiperSilder},
		data() {
			return {
				indexData: [],
				groundlist: [{}],
				grouplist: [{}],
				showSelect: false,
				city: '' ,
				swipArr: []
			}
		},
		onLoad(option) {
			this.showSelect = false
			console.log(option)
			this.city = option.city || "北京"
		},
		methods: {
			goToFilter(type){
				this.showSelect = true
			},
			clickCancel(){
				this.showSelect = false
			},
			selecttypeFun(type){
				let params = {
					animationType: 'pop-in',
					animationDuration: 200,
					success: ()=>{
						this.showSelect = false
					}
				}
				if(type === "ground"){
					params.url = './components/groundlist/groundlist'
				}else if(type === "group"){
					params.url = './components/grouplist/grouplist'
				}
				uni.navigateTo(params)
			},
			goCity(){
				uni.navigateTo({
					url: "./components/selectCity?city="+this.city,
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			gotoSearch(){
				uni.navigateTo({
					url: "./components/searchPage/searchPage",
					animationType: 'pop-in',
					animationDuration: 200
				})
			},
			saomaFun(){
				uni.scanCode({
					success: function (res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			getUserInfo(){
				let userPin = uni.getStorageSync('userPin');
				userApi.getIndexData({
					userPin: userPin
				}).then(res => {
					if(res && res.data && res.data.result){
						this.indexData = res.data.result
						this.swipArr = this.indexData.swipPics
						this.groundlist = this.indexData.groundIndexList
						this.grouplist = this.indexData.groupIndexList
						this.city = this.indexData.regionId
					}
				})
			}
		},
		onLoad(){
			this.getUserInfo()
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
	.index_con .search .input{
		color: #878484;
		position: absolute;
		top: -12upx;
		left: 70upx;
	}
	.index_con .icon-sousuo1{
		position: absolute;
		left: 5px;
		top: -5px;
		font-size: 21px;
	}
	.index_con .index_body {
		padding-top: 44px;
	}
	.index_con .chooseType {
		height: 160upx;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		padding: 0 20upx;
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
		/* padding-top: 10upx; */
	}
	.index_con .swip .swiper-item {
		height: 100%;
		background-size:cover;
	}
	.index_con .servers_type {
		padding: 0 20upx;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.servers_type .typeItem {
		margin: 8upx;
		height: 140upx;
		width: 40%;
		border: 2upx solid #f1ebeb;
		border-radius: 12upx;
		padding: 20upx;
	}
	.servers_type .typeItem .btn {
		font-size: 14px;
		background-color: #5eaef3;
		width: 100px;
		text-align: center;
		color: #fff;
		margin-top: 10px;
		height: 24px;
		line-height: 24px;
		border-radius: 6px;
	}
	.index_con .easyDo {
		padding: 20upx;
	}
	.easyDo .title {
		height: 24px;
		border-left: 6px solid #5eaef3;
		line-height: 24px;
		padding-left: 6px;
	}
	.easyDo .msg {
		font-size: 28upx;
		border: 2upx solid #ddd;
		margin-top: 20upx;
		padding: 20upx;
		border-radius: 16upx;
		color: #908b8b;
	}
	.easyDo .msg .go {
		color: #000000;
		padding-left: 10upx;
	}
	.easyDo .msg .iconfont {
		font-size: 24upx;
		color: #000000;
	}
	.playground {
		padding: 20upx;
	}
	.playground .title {
		height: 24px;
		border-left: 6px solid #5eaef3;
		line-height: 24px;
		padding-left: 6px;
	}
	.playground .list {
		padding-top: 20upx;
	}
	.playground .checkMore {
		width: 100%;
		text-align: center;
		height: 80upx;
		line-height: 80upx;
		background-color: #f7f5f5;
	}
	.playgroup {
		padding: 20upx;
	}
	.playgroup .title {
		height: 24px;
		border-left: 6px solid #5eaef3;
		line-height: 24px;
		padding-left: 6px;
	}
	.playgroup .checkMore {
		width: 100%;
		text-align: center;
		height: 80upx;
		line-height: 80upx;
		background-color: #f7f5f5;
	}
	.playgroup .list {
		padding-top: 20upx;
	}
	.index_con .dia_slot {
		height: 240upx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.index_con .dia_slot view{
		height: 34px;
		width: 140px;
		margin-top: 16px;
		line-height: 34px;
		color: #ffff;
		background-color: #5eaef3;
		border-radius: 10px;
	}
</style>
