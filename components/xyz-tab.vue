<template>
	<view class="tab">
		<scroll-view scroll-x style="white-space:nowrap;" scroll-with-animation :scroll-left="scrollLeft">
			<view class="tab_main">
				<view style="display: inline-block;" :class="index == tabIdx ? 'tab_active' : ''" v-for="(item, index) in tabList" :key="index" @click="tabSelect(index, item.value)">
					{{ item.label }}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	props: {
		tabList: {
			type: Array,
			default: []
		},
		tabActiveIdx: {
			type: Number,
			default: 0
		},
		isScroll: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			tabIdx: 0,
			scrollLeft: 0
		};
	},
	watch: {
		tabActiveIdx(newValue, oldValue) {
			console.log('newValue', newValue);
			this.tabSelect(newValue);
		}
	},
	methods: {
		tabSelect(idx, value) {
			this.tabIdx = idx;
			this.scrollLeft = idx * 30;
			this.$emit('tabSelect', value);
		}
	}
};
</script>
<style lang="less" scoped>
.tab {
	min-width: 100%;
	border-bottom: 2upx solid #dddd;
	background-color: #ffff;
	.tab_main {	
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 34upx;
		text-align: center;
		>view{
			padding:0 20upx;
			height: 80upx;
			line-height: 80upx;
			&.tab_active {
				font-size: 36upx;
				font-weight: bold;
				color: #5eaef3;
				border-bottom:2upx solid #5eaef3;
				
			}
		}
		
	}
	
}
</style>
