<template>
	<view class="my_con">
		<view class="info">
			<view class="photo">
				<image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3000033855,214344624&fm=26&gp=0.jpg"></image>
			</view>
			<view class="title">
				<view class="name">亦可往</view>
				<view class="medle">
					<view class="bor">粉丝11</view>
					<view>关注22</view>
				</view>
				<view class="myweb">个人主页<text class="iconfont icon-jiantou"></text></view>
			</view>
		</view>
		<view class="operThree">
			<view class="item">
				<text class="iconfont icon-shoucang1"></text>
				<view>收藏</view>
			</view>
			<view class="item">
				<text class="iconfont icon-shoucang1"></text>
				<view>关注</view>
			</view>
			<view class="item">
				<text class="iconfont icon-shoucang1"></text>
				<view>浏览</view>
			</view>
		</view>
		<view class="operator">
			
		</view>
	</view>
</template>

<script>
</script>

<style>
	.my_con {
		padding: 40upx;
	}
	.info {
		display: flex;
		position: relative;
	}
	.photo {
		height: 160upx;
		width: 160upx;
		overflow: hidden;
		border-radius: 160upx;
		border: 6upx solid #007AFF;
	}
	.photo image {
		height: 100%;
		width: 100%;
	}
	.myweb {
		background-color: #5eaef3;
		width: 180upx;
		text-align: center;
		border-radius: 160upx;
		height: 60upx;
		line-height: 60upx;
		font-size: 28upx;
		color: #fff;
		position: absolute;
		right: -60upx;
	}
	.title {
		margin-left: 30upx;
		font-size: 28upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.title .name {
		font-size: 40upx;
		margin-bottom: 10upx;
	}
	.medle {
		display: flex;
	}
	.medle view{
		height: 50upx;
		line-height: 50upx;
		width: 120upx;
		color: #C0C0C0;
		position: relative;
	}
	.medle .bor:before {
		position: absolute;
		right: 18upx;
		top: 12upx;
		height: 20upx;
		border: 2upx solid #ddd;
		content: "";
	}
	.operThree {
		display: flex;
		justify-content: space-between;
		padding: 40upx 80upx;
		font-size: 28upx;
	}
	.operThree .item{
		width: 100upx;
		text-align: center;
	}
	.operThree .item .iconfont {
		font-size: 70upx;
		margin-bottom: 20upx;
	}
	.marBtom {
		margin-bottom: 20upx;
	}
</style>
