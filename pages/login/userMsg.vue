<template>
	<view class="container flex">
		<view style="text-align: center;">
			<image :src="src" class="avatar" @tap="upload"></image>
			<view class="item flex" @tap="upload">点我头像</view>
		</view>
        <wButton 
            text="确定"
            :rotate="isRotate" 
            bgColor="#5eaef3"
            @click.native="ensureFun"
        ></wButton>
	</view>
</template>

<script>
import wButton from '../../components/watch-login/watch-button.vue' //button
export default {
    components: {
        wButton
    },
    data(){
		return {
            src: '',
            isRotate: false
        }
	},
	methods:{
		upload() {
			uni.chooseImage({
				count: 1, // 默认9
				sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				success(res) {
					const src = res.tempFilePaths[0];
		
					uni.redirectTo({
						url: './upload?src=' + src
					});
				}
			});
        },
        ensureFun(){

        }
	},
	onLoad(option) {
		let { avatar } = option;
		if (avatar) {
			this.src=avatar;
		}
	}
}
</script>

<style>
.container{
    width: 100%;
    height: 100%;
}

.avatar-container{
    position: relative;
    text-align: center;
    padding-top: 50%;
}


.avatar{
    width: 5rem;
    height: 5rem;
    background-color: #e5e5e5;
    border-radius: 50%;
	margin: 20px;
}

.item{
    line-height: 3rem;
}
</style>




