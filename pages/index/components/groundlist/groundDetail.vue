<template>
	<view class="groundDetail">
		<view class="swip_con">
			<swiperSilder :swipArr="swipArr"></swiperSilder>
			<view class="operator">
				<text @click="savein=!savein;popupShowFun()" class="iconfont" :class="{'icon-shoucang': savein, 'icon-shoucang1': !savein}"></text>
				<text @click="shareFun" class="iconfont icon-fenxiang2"></text>
			</view>
		</view>
		<view class="bodycon">
			<view >
				<view class="tag">
					<text  v-for="(item, index) in groundDetail.tagsArr" :key="index">{{item}}</text>
				</view>
				<view>
					{{groundDetail.name}}
				</view>
				<view class="address">
					<view class="itemCon">
						<text class="iconfont icon-location"></text>
						<text class="address_msg">{{groundDetail.adress}}</text>
					</view>
					<map style="width: 100%; height: 130px;" :latitude="latitude" :longitude="longitude"></map>
				</view>
			</view>
			<view class="group">
				<view class="title">
					<text>局</text>
					<text style="font-size: 12px; color: #ccc;">更多局<text class="iconfont icon-you2" style="font-size: 12px;"></text></text>
				</view>
				<view >
					<groupListItem v-for="(item, index) in groupList" 
							:value="item"
							:key="index" 
							:bottomBorder="index !== (groupList.length-1)"></groupListItem>
				</view>
			</view>
			<view class="quan">
				<view class="title">
					<text>圈子</text>
					<text style="font-size: 12px; color: #ccc;">进圈<text class="iconfont icon-you2" style="font-size: 12px;"></text></text>
				</view>
				<view >
					<dongtaiCom :isShowP="false"></dongtaiCom>
				</view>
			</view>
			<view class="king">
				<view class="title">
					<text>王者榜</text>
					<text style="font-size: 12px; color: #ccc;">更多榜<text class="iconfont icon-you2" style="font-size: 12px;"></text></text>
				</view>
				<view >
					<kingList v-for="(item, index) in kingList" 
							:value="item"
							:key="index" 
							:bottomBorder="index !== (kingList.length-1)"></kingList>
				</view>
			</view>
			
		</view>
		<uni-fab
            :pattern="pattern"
            :content="content"
            horizontal="right"	
            vertical="bottom"
            direction="horizontal"
            @trigger="trigger"
        ></uni-fab>
		<uni-popup
			ref="popup"
			:custom="true"
			:type="type"
			@change="change">
			<view class="uni-share">
				<view class="uni-share-title">分享到</view>
				<view class="uni-share-content">
				<view
					v-for="(item, index) in bottomData"
					:key="index"
					@click="sharesendFun(item.type, item.name)"
					class="uni-share-content-box">
					<view class="uni-share-content-image"><image
					:src="item.icon"
					class="image" /></view>
					<view class="uni-share-content-text">{{ item.text }}</view>
				</view>
				</view>
				<view
				class="uni-share-btn"
				@click="cancel">取消分享</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import swiperSilder from "../swiperSilder.vue"
	import uniPopup from "@/components/uni-popup.vue"
	import groupListItem from '../grouplist/groupListItem.vue'
	import dongtaiCom from "../../../news/index"
	import uniFab from '@/components/uni-fab.vue';
	import groundApi from "../../../../common/api/groundApi"
	import groupApi from "../../../../common/api/groupApi"
	import userApi from "../../../../common/api/userApi"
	import kingApi from "../../../../common/api/kingApi"
	import kingList from "../king/list"

	const allShareArr = [
		{
			text: '微信',
			icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
			name: 'weixin',
			type: 'WXSceneSession'
		},
		{
			text: '朋友圈',
			icon: '../../../../static/pengyouquan.png',
			name: 'weixin',
			type: 'WXSenceTimeline'
		},
		{
			text: '新浪微博',
			icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png',
			name: 'sinaweibo',
			type: 'sinaweibo'
		}
	]
	export default {
		components: {
			swiperSilder,
			uniPopup,
			groupListItem,
			dongtaiCom,
			uniFab,
			kingList
		},
		data(){
			return {
				groundDetail: {},
				swipArr: [],
				savein: true,
				popupshow: false,
				latitude: 39.909,
				longitude: 116.39742,
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#5eaef3',
					buttonColor:"#5eaef3"
				},
				content: [
					{
						iconPath: '/static/zu1.png',
						selectedIconPath: '/static/zu2.png',
						text: '组个局',
						active: false
					},
					{
						iconPath: '/static/ju1.png',
						selectedIconPath: '/static/ju2.png',
						text: '局',
						active: false
					},
					{
						iconPath: '/static/quan1.png',
						selectedIconPath: '/static/quan2.png',
						text: '圈子',
						active: false
					},
					{
						iconPath: '/static/king1.png',
						selectedIconPath: '/static/king2.png',
						text: '王者榜',
						active: false
					}
				],
				bottomData: [
					{
						text: '其他',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png',
						name: 'more',
						type: 'more'
					}
				],
				type: "bottom",
				groupList: [],
				groundId: "",
				userPin: uni.getStorageSync('userPin'),
				kingList: []
			}
		},
		methods: {
			popupShowFun(){
				if(!this.savein){
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '收藏成功'
					});
				}else{
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '取消收藏'
					});
				}
				userApi.setCollectApi({
					groundId: this.groundId,
					savein: this.savein,
					userPin: this.userPin
				})
			},
			trigger(e) {
				if(e.item.text === "组个局"){
					uni.navigateTo({
						url: "../zugejupage/zujuPage"
					})
				}

				if(e.item.text === "局"){
					uni.navigateTo({
						url: "../grouplist/grouplist"
					})
				}

				if(e.item.text === "圈子"){
					uni.navigateTo({
						url: "../zugejupage/zugejupage"
					})
				}

				if(e.item.text === "王者榜"){
					uni.navigateTo({
						url: "../zugejupage/zugejupage"
					})
				}
				
			},
			shareFun(){
				this.$refs.popup.open()
			},
			cancel () {
				this.$refs.popup.close()
			},
			change (e) {
				console.log(e.show)
			},
			sharesendFun(type, name){
				uni.share({
					provider: name,
					scene: type,
					type: 1,
					summary: "一起来玩",
					success: res =>{
						uni.showToast({
							icon: 'none',
							position: 'bottom',
							title: '分享成功'
						});
						this.$refs.popup.close()
					},
					fail: err => {
						uni.showToast({
							icon: 'none',
							position: 'bottom',
							title: '分享失败'
						});
						this.$refs.popup.close()
					}
				});
			}
		}, 
		onLoad(params) {
			this.groundId = params.id
			uni.getProvider({
				service: 'share',
				success: res => {
					var providerTypeArr = res.provider
					var hadShareArr = allShareArr.filter(itemAll => {
						return providerTypeArr.indexOf(itemAll.name) > -1
					})
					this.bottomData.unshift(...hadShareArr)
				}
			});
			groundApi.getGround({
				groundId: params.id
			}).then(res => {
				if(res && res.data && res.data.result){
					this.groundDetail = res.data.result
					this.swipArr = this.groundDetail.swips
				}
				groupApi.getGroups({
					groundId: params.id
				}).then(res => {
					if(res && res.data && res.data.result){
						this.groupList = res.data.result.splice(0,4)
					}
				})
				kingApi.getKings({
					groundId: params.id
				}).then(res => {
					if(res && res.data && res.data.result){
						this.kingList = res.data.result.splice(0,4)
					}
				})
			})
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
	.bodycon {
		padding: 30upx;
	}
	.tag {
		margin-bottom: 20upx;
	}
	.tag text {
		display: inline-block;
		width: 100upx;
		height: 50upx;
		font-size: 24upx;
		background-color: #ccc;
		line-height: 50upx;
		text-align: center;
		border-radius: 30upx;
		color: #fff;
		margin-right: 20upx;
	}
	.group {
		margin-top: 20upx;
	}
	.list {
		height: 500upx;
		margin-top: 20upx;
	}
	.title {
		height: 60upx;
		line-height: 60upx;
		padding-left: 20upx;
		border-left: 10upx solid #5eaef3;
		display: flex;
		justify-content: space-between;
	}
	.address {
		margin-top: 20upx;
		position: relative;
	}
	.address:before {
		position: absolute;
		left: 0;
		top: -10upx;
		content: "";
		width: 100%;
		height: 0;
		border: 1upx solid #ddd;
	}
	.address view {
		display: flex;
		
	}
	.icon-location {
		height: 120upx;
		line-height: 120upx;
		display: inline-block;
		width: 120upx;
		text-align: center;
		font-size: 50upx;
	}
	.address_msg {
		font-size: 28upx;
		overflow: hidden;
		display: flex;
		align-items: center;
	}
	.btn {
		position: fixed;
		width: 80upx;
		line-height: 100upx;
		text-align: center;
		right: 20upx;
		top: 520upx;
		opacity: 0.6;
		border-radius: 40upx;
		padding: 40upx 0px;
		display: flex;
		flex-flow: column;
		justify-content: space-between;
		font-size: 24upx;
		color: #FFFFFF;
	}
	.btn text {
		background-color: #2187E7;
		margin-bottom: 4upx;
		border-radius: 40upx;
	}
	.btn .zu {
		height: 140upx;
		line-height: 140upx;
	}
	/* 底部分享 */
.uni-share {
	background: #fff;
}

.uni-share-title {
	line-height: 60upx;
	font-size: 24upx;
	padding: 15upx 0;
	text-align: center;
}

.uni-share-content {
	display: flex;
	flex-wrap: wrap;
	padding: 15px;
}

.uni-share-content-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 25%;
	box-sizing: border-box;
}

.uni-share-content-image {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60upx;
	height: 60upx;
	overflow: hidden;
	border-radius: 10upx;
}

.uni-share-content-image .image {
	width: 100%;
	height: 100%;
}

.uni-share-content-text {
	font-size: 26upx;
	color: #333;
	padding-top: 5px;
	padding-bottom: 10px;
}

.uni-share-btn {
	height: 90upx;
	line-height: 90upx;
	border-top: 1px #f5f5f5 solid;
	text-align: center;
	color: #666;
}
</style>
