<template>
	<view class="container flex">
		<view style="text-align: center;">
			<image :src="src" class="avatar" @tap="upload"></image>
			<view class="item flex" @tap="upload">点击更换头像</view>
		</view>
		<view class="form" style="text-align: center;">
			<picker mode="date" :value="date" @change="bindDateChange">
				<text class="formitem">
					{{date}}
				</text>
			</picker>
			<picker :value="genderIndex" @change="bindgenderChange" :range="genderArray">
				<text class="formitem">
					{{gender||genderArray[genderIndex]}}
				</text>
			</picker>
			
			<picker mode="multiSelector" :value="tallweightIndex" :range="twArray" @change="bindTWChange">
				<text class="formitem">
					{{tallWeight||bodyWeight}}
				</text>
			</picker>
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
import {uniPopup } from '@dcloudio/uni-ui'
import commonData from '../../common/data/commonData'
import userApi from '../../common/api/userApi.js'
export default {
    components: {
		wButton,
		uniPopup
    },
    data(){
		return {
            src: '',
			isRotate: false,
			genderArray: ["汉子", "妹子", "其他"],
			date: "点击选择出生日期",
			gender: "点击选择性别",
			tallWeight: "点击选择身型",
			genderIndex: 0,
			tallweightIndex: 0,
			twArray: commonData.tallWeightData,
			bodyWeight: "偏胖",
			msg: {
				gender: 1,
				birthday: "",
				tall: "", 
				weight: ""
			}
        }
	},
	methods:{
		bindDateChange(e) {
			this.date = e.target.value
			this.msg.birthday = e.target.value
		},
		bindgenderChange(e) {
			this.gender = false
			this.genderIndex = e.target.value
			this.msg.gender = this.genderArray[e.target.value] 
		},
		bindTWChange(e) {
			this.tallWeight = false
			this.msg.tall = this.twArray[0][e.target.value[0] || 0]
			this.msg.weight = this.twArray[1][e.target.value[1] || 0]
		},
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
			let userPin = uni.getStorageSync('userPin');
			
			userApi.registerMsg({
				userPin: "Kchen",
				msg: this.msg
			}).then(res => {
				uni.reLaunch({
					url: '../index/index',
				});
			}).catch(err => {
				uni.reLaunch({
					url: '../index/index',
				});
			})
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

.form {
	display: flex;
	justify-content: space-between;
    flex-direction: column;
    height: 580upx;
}
.form .formitem {
	padding: 20upx;
    border-bottom: 2upx solid #c3bebe;
    color: #c3bebe;
}
</style>




