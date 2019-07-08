<template>
	<view class="groundDetail">
		<view class="swip_con">
			<swiperSilder :swipArr="swipArr"></swiperSilder>
			<view class="operator">
				<text @click="savein=!savein" class="iconfont" :class="{'icon-shoucang': savein, 'icon-shoucang1': !savein}"></text>
				<text class="iconfont icon-fenxiang2"></text>
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
			<view class="group d_jump">
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
			<view class="quan d_jump">
				<view class="title">
					<text>圈子</text>
					<text style="font-size: 12px; color: #ccc;">进圈<text class="iconfont icon-you2" style="font-size: 12px;"></text></text>
				</view>
				<scroll-view class="list" scroll-y="true">
					<dongtaiCom></dongtaiCom>
				</scroll-view>
			</view>
			<view class="king d_jump">
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
		<view class="btn">
			<text @click="gotoZu" class="zu">组个局</text>
			<text @click="jump(0)">局</text>
			<text @click="jump(1)">圈</text>
			<text @click="jump(2)">榜</text>
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
	import groupListItem from '../grouplist/groupListItem.vue'
	import dongtaiCom from "../dongtaiCom.vue"
	export default {
		components: {
			swiperSilder,
			uniPopup,
			groupListItem,
			dongtaiCom
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
			}
		},
		methods: {
			popupShowFun(){
				setTimeout(() => {
					this.popupshow = !this.popupshow
				},1000)
			},
			jump (index) {
				// 用 class="d_jump" 添加锚点
				let jump = document.querySelectorAll('.d_jump')
				let total = jump[index].offsetTop
				let distance = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
				// 平滑滚动，时长500ms，每10ms一跳，共50跳
				let step = total / 50
				if (total > distance) {
					smoothDown()
				} else {
				let newTotal = distance - total
					step = newTotal / 50
					smoothUp()
				}
				function smoothDown () {
					if (distance < total) {
						distance += step
						document.body.scrollTop = distance
						document.documentElement.scrollTop = distance
						window.pageYOffset = distance
						setTimeout(smoothDown, 10)
					} else {
						document.body.scrollTop = total
						document.documentElement.scrollTop = total
						window.pageYOffset = total
					}
				}
				function smoothUp () {
					if (distance > total) {
						distance -= step
						document.body.scrollTop = distance
						document.documentElement.scrollTop = distance
						window.pageYOffset = distance
						setTimeout(smoothUp, 10)
					} else {
						document.body.scrollTop = total
						document.documentElement.scrollTop = total
						window.pageYOffset = total
					}
				}
			},
			gotoZu(){
				uni.navigateTo({
					url: "../zugejupage/zugejupage"
				})
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
