<template>
    <view class="basic">
        <input v-model="wwData.ground" class="formitem inputStyle" type="text" placeholder="选场地">
        <map style="width: 100%; height: 130px;" :latitude="latitude" :longitude="longitude"></map>
    </view>
</template>

<script>
export default {
    props: ["value"],
    data(){
        return {
            wwData: this.value,
            latitude: 39.909,
			longitude: 116.39742,
        }
    },
    methods: {

    }
}
</script>

<style>
.basic {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        min-height: 400upx;
    }
    .basic .formitem {
        padding: 20upx;
        border-bottom: 2upx solid #c3bebe;
        color: #c3bebe;
    }
    .basic .inputStyle{
        width: 245upx
    }
</style>
