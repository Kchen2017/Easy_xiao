<template>
	<view class="my_con">
		<view class="info">
			<view class="photo">
				<image :src="userObj.avatarUrl"></image>
			</view>
			<view class="title">
				<view class="name">{{userObj.nickName || "--"}}</view>
				<view class="medle">
					<view class="bor">粉丝{{userObj.fans}}</view>
					<view>关注{{userObj.beFans}}</view>
				</view>
				<view @click="gotoper" class="myweb">个人主页<text class="iconfont icon-jiantou"></text></view>
			</view>
		</view>
		<view class="operThree">
			<view class="item">
				<text class="iconfont icon-shoucang3"></text>
				<view class="marTop">收藏</view>
			</view>
			<view class="item">
				<text class="iconfont icon-shoucang2"></text>
				<view class="marTop">关注</view>
			</view>
			<view class="item">
				<text class="iconfont icon-liulanjilu1"></text>
				<view class="marTop">浏览</view>
			</view>
		</view>
		<view class="operator">
			<view class="item itemborder">
				<view class="tit">
					<text class="iconfont icon-layer"></text>
					<view>订单</view>
				</view>
				<text class="iconfont icon-jiantou"></text>
			</view>
			<view class="item itemborder">
				<view class="tit">
					<text class="iconfont icon-jifen2"></text>
					<view>积分</view>
				</view>
				<text class="iconfont icon-jiantou"></text>
			</view>
			<view class="item itemborder">
				<view class="tit">
					<text class="iconfont icon-qianbao1"></text>
					<view>钱包</view>
				</view>
				<text class="iconfont icon-jiantou"></text>
			</view>
			<view class="item itemborder">
				<view class="tit">
					<text class="iconfont icon-shezhi1"></text>
					<view>设置</view>
				</view>
				<text class="iconfont icon-jiantou"></text>
			</view>
			<view class="item" @click="gotoPhone">
				<view class="tit">
					<text class="iconfont icon-a069"></text>
					<view>客服</view>
				</view>
				<view>
					<text style="color:#c9d0cb;margin-right: 40upx">118118</text>
					<text class="iconfont icon-jiantou"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import userApi from "../../common/api/userApi"
	export default {
		data(){
			return {
				userObj: {}
			}
		},
		methods: {
			gotoper(){
				uni.navigateTo({
					url: "../index/components/friends_per"
				})
			},
			getUser(){
				let userPin = uni.getStorageSync('userPin');
				userApi.getUserMsg({
					userPin: userPin
				}).then(res => {
					if(res && res.data && res.data.result){
						this.userObj = res.data.result[0]
					}
				})
			},
			gotoPhone(){
				uni.makePhoneCall({
					phoneNumber: '118118'
				});
			}
		},
		onLoad(){
			this.getUser()
		}
	}
</script>

<style>
	.my_con {
		padding: 40upx;
	}
	.info {
		display: flex;
		position: relative;
	}
	.photo {
		height: 160upx;
		width: 160upx;
		overflow: hidden;
		border-radius: 160upx;
		border: 6upx solid #007AFF;
	}
	.photo image {
		height: 100%;
		width: 100%;
	}
	.myweb {
		background-color: #5eaef3;
		width: 180upx;
		text-align: center;
		border-radius: 160upx;
		height: 60upx;
		line-height: 60upx;
		font-size: 28upx;
		color: #fff;
		position: absolute;
		right: -60upx;
	}
	.title {
		margin-left: 30upx;
		font-size: 28upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.title .name {
		font-size: 40upx;
		margin-bottom: 10upx;
	}
	.medle {
		display: flex;
	}
	.medle view{
		height: 50upx;
		line-height: 50upx;
		width: 120upx;
		color: #C0C0C0;
		position: relative;
	}
	.medle .bor:before {
		position: absolute;
		right: 18upx;
		top: 12upx;
		height: 20upx;
		border: 2upx solid #ddd;
		content: "";
	}
	.operThree {
		display: flex;
		justify-content: space-between;
		padding: 40upx 80upx;
		font-size: 28upx;
	}
	.operThree .item{
		width: 100upx;
		text-align: center;
	}
	.operThree .item .iconfont {
		font-size: 70upx;
		margin-bottom: 20upx;
	}
	.marBtom {
		margin-bottom: 20upx;
	}
	
	.operThree{
		margin-top: 60upx;
		border-radius: 40upx;
		box-shadow: 0px 0px 60upx #ddd;
	}
	.operator {
		margin-top: 50upx;
		font-size: 28upx;
	}
	.operator .item {
		display: flex;
		justify-content: space-between;
		position: relative;
		height: 100upx;
		line-height: 100upx;
	}
	.operator .itemborder:before {
		position: absolute;
		height: 0;
		width: 600upx;
		bottom: 0;
		left: 56upx;
		border: 1upx solid #f0f0f0;
		content: "";
	}
	.operator .item .tit {
		width: 120upx;
		display: flex;
		justify-content: space-between;
	}
	.operator .item .tit .iconfont {
		font-size: 42upx;
	}
	.marTop {
		margin-top: 10upx;
	}
</style>
