<template>
	<view class="city">
		<view class="search">
			<input type="text" placeholder="输入城市名进行搜索" />
			<text class="iconfont icon-sousuo-m"></text>
		</view>
		<view class="locale">
			<view class="title">当前城市</view>
			<view class="selected">
				<text @click="chooseItem(selectedcity)" class="iconfont icon-dingwei">{{selectedcity}}</text>
				<text @click="localeCity" class="iconfont icon-qiehuan4"></text>
			</view>
		</view>
		<uni-select :navAttr="navAttr" 
					:listAttr="listAttr" 
					:quickPanelData="quickPanelData" 
					:listData="listData" 
					@chooseItem="chooseItem"></uni-select>
	</view>
</template>

<script>
	import uniSelect from '@/components/lee-select/wxcomponents/lee-select/lee-select.vue'
	import listData from '../../../components/lee-select/common/city.js'
	export default {
		components: {
			uniSelect
		},
		data(){
			return {
				selectedcity: "",
				listData: listData,
				quickPanelData:[
					{
						title:'热门城市',
						navName: '热',
						data:['上海','北京','成都','昆明','西安'],
						height: 224
					}
				],
				listAttr: {
					listBackgroundColor:'none',
					titleFontSize: 28,
					titleColor: '#333',
					titleHeight: 60,
					titleBackground: '#f5f5f5',
					titlePadding: 20,
					itemHeight: 80,
					itemFontSize: 28,
					itemBorderBottom: '1px solid rgba(0, 0, 0, 0.1)',
					itemColor: '#333'
				},
				navAttr: {
					enable: true,
					backgroundColor: 'rgba(0, 0, 0, 0.4)',
					color: '#333',
					activeColor: '#fff',
					fontSize: 20,
					itemPadding:'6 0',
					borderRadius: 100,
					padding:'20 0'
				}
			}
		},
		methods:{
			chooseItem(item) {
				uni.reLaunch({
					url: '../index'
				})
			},
			localeCity(){
				uni.getLocation({
					type: 'wgs84',
					success: function (res) {
						alert(1)
						console.log('当前位置的经度：' + res.address);
						console.log('当前位置的纬度：' + res.latitude);
					}
				});
			}
		},
		onLoad(option) {
			console.log(option)
			this.selectedcity = option.city
		}
	}
</script>

<style>
	.city {
		padding: 20upx;
	}
	.search{
		background-color: #f5f5f5;
		height: 80upx;
		width: 100%;
		border-radius: 8upx;
		position: relative;
		margin-bottom: 40upx;
	}
	.search input{
		height: 80upx;
		width: 84%;
		margin-left: 12%;
	}
	.search .icon-sousuo-m{
		position: absolute;
		left: 10upx;
		top: 18upx;
		font-size: 21px;
	}
	.locale .title {
		font-size: 14px;
		color: rgb(51, 51, 51);
		height: 60upx;
		background: rgb(245, 245, 245);
		padding-left: 20upx;
		line-height: 60upx;
	}
	.locale .selected {
		display: flex;
		justify-content: space-between;
		padding: 0 20upx;
		height: 80upx;
		line-height: 80upx;
		/* background-color: #f5f5f5; */
		margin: 20upx 0;
	}
</style>
