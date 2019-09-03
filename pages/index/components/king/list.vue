<template>
    <view class="kingItem" :class="{border: bottomBorder}">  
        <view class="photo">
            <image :src="value.avatarUrl"></image>
        </view>
        <view class="info">
            <view>{{value.name}}</view>
            <view>身高：<text>{{value.tall}}cm</text></view>
            <view>积分：<text>{{value.score}}</text></view>
        </view>
    </view>
</template>
<script>
export default {
    props: ["value", "bottomBorder"]
}
</script>
<style>
    .kingItem {
        display: flex;
        margin-bottom: 40upx;
        margin-top: 20upx;
        position: relative;
        font-size: 28upx;
    }
    .photo image {
        width: 100upx;
        height: 100upx;
        border-radius: 100upx;
        overflow: hidden;
    }
    .kingItem .info {
        text-align: left;
        padding-left: 50upx;
        display: flex;
        flex-direction:column;
        justify-content: space-between;
    }
    .border:before {
		content: "";
		position: absolute;
		height: 0;
		width: 680upx;
		border: 1px solid #f1eeee;
		left: 0;
		bottom: -16upx;
	}
</style>


