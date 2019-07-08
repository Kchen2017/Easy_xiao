<template>
	<view class="quan">
		<view class="quanItem" v-for="(item, index) in dongList" :key="index">
			<view class="quanHead">
				<image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3000033855,214344624&fm=26&gp=0.jpg"></image>
			</view>
			<view class="quanCon">
				<view class="nameTitle">科比</view>
				<view>我见过凌晨四点钟洛杉矶的太阳！！！</view>
				<view class="photos">
					<image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3000033855,214344624&fm=26&gp=0.jpg"></image>
					<image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3000033855,214344624&fm=26&gp=0.jpg"></image>
					<image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3000033855,214344624&fm=26&gp=0.jpg"></image>
					<image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3000033855,214344624&fm=26&gp=0.jpg"></image>
				</view>
				<view class="commit">
					<text>一小时前</text>
					<text class="iconfont icon-qiehuan"></text>
				</view>
				<view class="zanzan">
					<text class="iconfont icon-shoucang diandian"></text> 
					<text>James</text>
					<text>Curry</text>
				</view>
				<view class="pinlun">
					<view><text>艾弗森:</text>过你一百遍！！</view>
					<view><text>奥尼尔:</text>good for you buddy！！</view>
					<view><text>库里:</text>大哥带上我！！</view>
				</view>
			</view>
		</view>
    </view>
</template>

<script>
	export default {
		data(){
			return {
				dongList: [{}, {}, {}, {}]
			}
		}
	}
</script>

<style>
	 .quan {
        padding: 32upx;
		font-size: 14px;
    }
    .quan .quanItem {
        display: flex;
        justify-content: flex-start;
        padding-top: 32upx;
    }
    .quanItem .quanHead image{
        width: 100upx;
        height: 100upx;
    }
    .quanItem .quanCon{
        text-align: left;
        padding-left: 32upx;
    }
    .quanItem .quanCon .nameTitle {
        color: cornflowerblue;
        padding-bottom: 16upx
    }
    .quanItem .quanCon .photos {
        display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-content: stretch;
    }
    .quanItem .quanCon .photos image {
        width: 100upx;
        height: 100upx;
        margin: 0 32upx 32upx 0;
    }
    .quanItem .quanCon .commit {
        display: flex;
        justify-content: space-between;
    }
    .quanItem .quanCon .commit text:nth-child(1) {
        font-size: 16upx;
        color: #9a9494;
    }
    /* .quanItem .quanCon .commit span:nth-child(2) {
        background-color: #f3f1f1;
        display: inline-block;
        width: 2em;
        text-align: center;
        border-radius: 1em;
    } */
    .quanItem .quanCon .zanzan{
        font-size: 32upx;
        line-height: 32upx;
        color: cornflowerblue;
        background-color: #f9f7f7;
        padding: 16upx;
        margin-top: 10upx;
    }
    .quanItem .quanCon .zanzan text {
        margin-right: 32upx;
    }
    
    .quanItem .quanCon .diandian{
        font-size: 32upx;
        color: #d2578d;
    }
    .quanItem .quanCon .pinlun{
        border-top: 1px solid #eae6e6;
        padding: 8px;
        background-color: #f9f7f7;
    }
    .quanItem .quanCon .pinlun text {
        color: cornflowerblue;
        margin-right: 5px;
    }
</style>
