<template>
	<view class="zujuFrom">
		<view class="from">
			<view class="item">
				<text class="tit">
					场地：
				</text>
				<text>北京五棵松开伊拉克球场</text>
				<text class="iconfont icon-you2"></text>
			</view>
		</view>
		<view>
			<button type="primary">确定</button>
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
	.zujuFrom{
		padding: 40upx;
	}
	.item {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 40px;
		line-height: 40px;
		background-color: #dddd;
	}
</style>
