<template>
	<view class="groundDetail">
		<view class="swip_con">
			<swiperSilder :swipArr="swipArr"></swiperSilder>
			<view class="operator">
				<text @click="savein=!savein" class="iconfont" :class="{'icon-shoucang': savein, 'icon-shoucang1': !savein}"></text>
				<text @click="shareFun" class="iconfont icon-fenxiang2"></text>
			</view>
		</view>
		<view class="bodycon">
			<view >
				<view class="tag">
					<text>免费</text><text>学校</text><text>大神多</text>
				</view>
				<view>
					北京信息科技大学（小营桥小区篮球场）南区
				</view>
				<view class="address">
					<view>
						<text class="iconfont icon-location"></text>
						<text class="address_msg">北京市海淀区清河小营东路12号北信科（清河校区）</text>
					</view>
					<map style="width: 100%; height: 130px;" :latitude="latitude" :longitude="longitude"></map>
				</view>
			</view>
			<view class="group">
				<view class="title">
					<text>局</text>
					<text style="font-size: 12px; color: #ccc;">更多局<text class="iconfont icon-you2" style="font-size: 12px;"></text></text>
				</view>
				<scroll-view class="list" scroll-y="true">
					<groupListItem v-for="(item, index) in golist" 
							:value="item"
							:key="index" 
							:bottomBorder="index !== (golist.length-1)"></groupListItem>
				</scroll-view>
			</view>
			<view class="quan">
				<view class="title">
					<text>圈子</text>
					<text style="font-size: 12px; color: #ccc;">进圈<text class="iconfont icon-you2" style="font-size: 12px;"></text></text>
				</view>
				<scroll-view class="list" scroll-y="true">
					<dongtaiCom></dongtaiCom>
				</scroll-view>
			</view>
			<view class="king">
				<view class="title">
					<text>王者榜</text>
					<text style="font-size: 12px; color: #ccc;">更多榜<text class="iconfont icon-you2" style="font-size: 12px;"></text></text>
				</view>
				<scroll-view class="list" scroll-y="true">
					<groupListItem v-for="(item, index) in golist" 
							:value="item"
							:key="index" 
							:bottomBorder="index !== (golist.length-1)"></groupListItem>
				</scroll-view>
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
		<view v-if="popupshow" class="popup">
			<text class="iconfont icon-shoucang-copy-copy"></text><br>
			<text>{{popupMsg}}</text>
		</view>
	</view>
</template>

<script>
	import swiperSilder from "../swiperSilder.vue"
	import {uniPopup} from '@dcloudio/uni-ui'
	import groupListItem from '../grouplist/groupListItem.vue'
	import dongtaiCom from "../dongtaiCom.vue"
	import uniFab from '@/components/uni-fab.vue';
	export default {
		components: {
			swiperSilder,
			uniPopup,
			groupListItem,
			dongtaiCom,
			uniFab
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
				popupshow: false,
				popupMsg: "关注成功",
				golist: [{},{},{},{}],
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
				]
			}
		},
		methods: {
			popupShowFun(){
				setTimeout(() => {
					this.popupshow = !this.popupshow
				},1000)
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
		height: 120upx;
		line-height: 60upx;
		overflow: hidden;
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
</style>
