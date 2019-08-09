<template>
    <view class="basic">
        <view style="text-align: center;">
			<image :src="basicData.avatar" class="avatar" @tap="upload"></image>
			<view class="item flex" @tap="upload">点击更换头像</view>
		</view>
        <text class="formitem" @click="showTypePicker">
            {{basicData.typeju}}
        </text>
        <mpvue-picker themeColor="#007AFF" ref="mpvuePicker" mode="multiLinkageSelector" deepLength="2" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
        

        <input v-model="basicData.nameju" class="formitem inputStyle" type="text" placeholder="请为您的局起个名">
    </view>
</template>

<script>
import commonData from '../../../../common/data/commonData'
import mpvuePicker from '../../../../components/mpvuePicker'
export default {
    props: ["value"],
    components: {mpvuePicker},
    data(){
        return {
            pickerValueArray: [],
            pickerValueDefault: [],
            basicData: this.value
        }
    },
    methods: {
        onConfirm(e) { 
            this.basicData.typeju = e.label
            this.$emit("input", this.basicData)
        },
        showTypePicker() {
            this.pickerValueArray = commonData.zuTypeArrObj
            this.pickerValueDefault = [0, 0]
            this.$refs.mpvuePicker.show()
        },
        upload() {
			uni.chooseImage({
				count: 1, // 默认9
				sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				success(res) {
					const src = res.tempFilePaths[0];
		
					uni.redirectTo({
						url: '../../../login/upload?source=msg&src=' + src
					});
				}
			});
        },
    },
    onLoad(option) {
		let { avatar } = option;
		if (avatar) {
			this.basicData.avatar=avatar;
		}
	}
}
</script>

<style>
    .basic {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        min-height: 700upx;
    }
    .basic .formitem {
        padding: 20upx;
        border-bottom: 2upx solid #c3bebe;
        color: #c3bebe;
    }
    .basic .inputStyle{
        width: 245upx
    }
    .avatar{
        width: 5rem;
        height: 5rem;
        background-color: #e5e5e5;
        border-radius: 50%;
        margin: 20px;
    }
</style>
