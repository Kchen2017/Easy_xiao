<template>
	<view class="ground">
		<view class="search_bar">
			<view class="search">
				<input type="text" placeholder="输入关键字" />
				<text class="iconfont icon-sousuo1"></text>
			</view>
			<view class="menu">
				<slFilter :isTransNav="true" 
						:navHeight="0"  
						:menuList="menuList"
						@result="filerFun"></slFilter>
			</view>
		</view>
		<view class="list">
			<groundlistItem v-for="(item, index) in golist" 
							:value="item"
							:key="index" 
							:bottomBorder="index !== (golist.length-1)"></groundlistItem>
		</view>
		<switchType :text="'去找局'" :url="'../grouplist/grouplist'"></switchType>
	</view>
</template>

<script>
	import slFilter from '@/components/sl-filter/sl-filter.vue';
	import groundlistItem from './groundListItem.vue'
	import switchType from '../switchType.vue'
	export default {
		components: {
            slFilter,
			groundlistItem,
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
						'detailTitle': '想怎么玩就怎么玩',
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
								'title': '包场',
								'value': 'wholeGround'
							},
							{
								'title': '散场',
								'value': 'eachPay'
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
			filerFun(val){
				console.log(val)
			}
		},
		onLoad(option) {
			
		}
	}
</script>

<style>
	.ground{
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
