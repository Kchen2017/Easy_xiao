<template>
	<view class="zujuFrom">
		<view class="form">
			<view class="item">
				<view class="tit">
					场地：
				</view>
				<view class="txt">北京五棵松开伊拉克球场</view>
				<text class="iconfont icon-you2"></text>
			</view>
			<view class="item">
				<view class="tit">
					人数：
				</view>
				<view class="txt">
					<input type="text">
				</view>
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
	.form .tit {
		width: 20%;
		text-align: right;
	}
	.form .txt {
		width: 65%;
		overflow: hidden;
	}
</style>
