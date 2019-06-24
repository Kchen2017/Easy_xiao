<template>
	<view>
		<view>
			<uni-select :navAttr="navAttr" 
						:listAttr="listAttr" 
						:quickPanelData="quickPanelData" 
						:listData="listData" 
						@chooseItem="chooseItem"></uni-select>
		</view>
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
				listData: listData,
				quickPanelData:[
					{
					title:'当前城市',
					navName: '当前',
					data:['上海'],
					height: 150
				},
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
					titleBackground: '#ccc',
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
				console.log(item)
			}
		},
	}
</script>

<style>
	
</style>
