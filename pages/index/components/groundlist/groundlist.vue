<template>
	<view class="ground">
		<view class="search_bar">
			<view class="search">
				<input type="text" placeholder="输入关键字" />
				<text class="iconfont icon-sousuo-m"></text>
			</view>
			<view class="menu">
				<slFilter :isTransNav="true" 
						:navHeight="0"  
						:menuList="menuList"></slFilter>
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
						'title': '类型',
						'detailTitle': '子标题1',
						'isMutiple': true,
						'key': 'key_1',
						'detailList': [
							{
								'title': '不限',
								'value': ''
							},
							{
								'title': '条件_1_1',
								'value': 'val_1_1'
							},
							{
								'title': '条件1_2',
								'value': 'val_1_2'
							}
						]
					},
					{
						'title': '菜单2',
						'detailTitle': '子标题2',
						'key': 'key_2',
						'isMutiple': false,
						'detailList': [
							{
								'title': '不限',
								'value': ''
							},
							{
								'title': '条件_2_1',
								'value': 'val_2_1'
							},
							{
								'title': '条件_2_2',
								'value': 'val_2_2'
							}
						]
					},
					{
						'title': '距离',
						'detailTitle': '子标题3',
						'key': 'key_3',
						'isSort': true,
						'isMutiple': false,
						'detailList': [
							{
								'title': '条件_3_1',
								'value': 'val_3_1'
							},
							{
								'title': '条件_3_2',
								'value': 'val_3_2'
							},
							{
								'title': '条件_3_3',
								'value': 'val_3_3'
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
	.search .icon-sousuo-m{
		position: absolute;
		left: 10upx;
		top: 18upx;
		font-size: 21px;
	}
	
</style>
