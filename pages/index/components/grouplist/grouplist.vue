<template>
	<view class="group">
		<view class="search_bar">
			<view class="search">
				<input type="text" placeholder="输入关键字" />
				<text class="iconfont icon-sousuo1"></text>
			</view>
			<view class="menu">
				<slFilter :isTransNav="true" 
						:navHeight="0"  
						:menuList="menuList"></slFilter>
			</view>
		</view>
		<view class="list">
			<groupListItem v-for="(item, index) in golist" 
							:value="item"
							:key="index" 
							:bottomBorder="index !== (golist.length-1)"></groupListItem>
		</view>
		<switchType :text="'去找场'" :url="'../groundlist/groundlist'"></switchType>
	</view>
</template>

<script>
	import slFilter from '@/components/sl-filter/sl-filter.vue';
	import groupListItem from './groupListItem.vue'
	import switchType from '../switchType.vue'
	export default {
		components: {
            slFilter,
			groupListItem,
			switchType
        },
		data() {
			return {
				golist: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
				menuList: [
					{
						'title': '运动类型',
						'detailTitle': '请选择想玩的项目',
						'isMutiple': false,
						'key': 'sportType',
						'reflexTitle': true,
						'detailList': [
							{
								'title': '不限',
								'value': ''
							},
							{
								'title': '篮球',
								'value': 'basketball'
							},
							{
								'title': '足球',
								'value': 'footBall'
							},
							{
								'title': '羽毛球',
								'value': 'badminton'
							},
							{
								'title': '网球',
								'value': 'tennis'
							},
							{
								'title': '英语角',
								'value': 'enCorner'
							}
						]
					},
					{
						'title': '收费方式',
						'detailTitle': '输了爬起来赢回来',
						'key': 'payType',
						'isMutiple': false,
						'reflexTitle': true,
						'detailList': [
							{
								'title': '不限',
								'value': ''
							},
							{
								'title': '免费',
								'value': 'free'
							},
							{
								'title': 'AA制',
								'value': 'AA'
							},
							{
								'title': '竞赛（谁输谁付）',
								'value': 'race'
							}
						]
					},
					{
						'title': '排列方式',
						'detailTitle': '请选择排列方式',
						'key': 'sortType',
						'isSort': true,
						'isMutiple': false,
						'detailList': [
							{
								'title': '距离优先',
								'value': 'distance'
							},
							{
								'title': '人气优先',
								'value': 'mood'
							},
							{
								'title': '环境优先',
								'value': 'environment'
							},
							{
								'title': '低价优先',
								'value': 'highPay'
							},
							{
								'title': '高价优先',
								'value': 'lowPay'
							}
						]
					}
				]
			}
		},
		methods: {
			
		},
		onLoad(option) {
			
		}
	}
</script>

<style>
	.group{
		padding: 0 40upx;
	}
	.list {
		padding-top: 20upx;
	}
	.search_bar{
		padding: 20upx 0;
		
	}
	.search{
		background-color: #f5f5f5;
		height: 80upx;
		width: 100%;
		border-radius: 8upx;
		position: relative;
	}
	.search input{
		height: 80upx;
		width: 84%;
		margin-left: 12%;
	}
	.search .icon-sousuo1{
		position: absolute;
		left: 10upx;
		top: 18upx;
		font-size: 21px;
	}
</style>
