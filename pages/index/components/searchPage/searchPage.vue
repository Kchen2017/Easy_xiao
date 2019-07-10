<template>
	<view class="serP">
		<view class="search">
			<input type="text" placeholder="请输入关键字" />
			<text class="iconfont icon-sousuo1"></text>
		</view>
		<view class="history">
			<view class="title">
				<view class="tit1">
					搜索记录
				</view>
				<view class="tit2">
					清空
				</view>
			</view>
			<view class="tag">
				<view class="item">篮球</view>
				<view class="item">五道口</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.serP {
		padding: 40upx;
	}
	.search{
		background-color: #f5f5f5;
		height: 80upx;
		width: 100%;
		border-radius: 8upx;
		position: relative;
		margin-bottom: 40upx;
		border: 1px solid #ddd;
	}
	.search input{
		height: 80upx;
		width: 84%;
		margin-left: 12%;
	}
	.search .iconfont{
		position: absolute;
		left: 10upx;
		top: 18upx;
		font-size: 21px;
	}
	.history .title {
		display: flex;
		justify-content: space-between;
		height: 100upx;
		line-height: 100upx;
		font-weight: bold;
	}
	.history .tit2 {
		font-size: 28upx;
		color: #bababa;
	}
	.history .tag {
		display: flex;
		flex-wrap: wrap;
	}
	.history .tag .item {
		font-size: 32upx;
		height: 60upx;
		line-height: 60upx;
		background-color: #ddd;
		padding: 0 20upx;
		border-radius: 40upx;
		margin-right: 20upx;
	}
</style>
