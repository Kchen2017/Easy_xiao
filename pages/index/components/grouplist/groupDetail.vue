<template>
	<view class="groupD">
		<view class="header">
			<view class="backgroup"></view>
			<view class="photo">
				<image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3000033855,214344624&fm=26&gp=0.jpg"></image>
			</view>
			<view class="title">
				<view>龙骑士</view>
				<view style="font-size: 14px;">签名：不服就干</view>
			</view>
		</view>
		<view class="context"></view>
		
		
		
		
	</view>
</template>

<script>
	import {uniTag } from '@dcloudio/uni-ui'
	export default {
		components: {
			uniTag 
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style>
	.header{
		width: 100%;
		height: 240upx;
		position: relative;
	}
	.backgroup{
		height: 100%;
		background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561467102487&di=51a2165e4319ce957afd6b2ba0d90d99&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130705%2F9527735_231540074000_2.jpg");
		background-size:cover;
		/* opacity: 0.5; */
	}
	.header .photo {
		position: absolute;
		width: 200upx;
		height: 200upx;
		left: 100upx;
		top: 140upx;
		border: 20upx solid #dddd;
		border-radius: 200upx;
		overflow: hidden;
	}
	.photo image {
		width: 100%;
		height: 100%;
	}
	.title {
		position: absolute;
		height: 100upx;
		line-height: 60upx;
		left: 380upx;
	}
</style>
