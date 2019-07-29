<template>
    <view>
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
    data() {
        return {
            isRotate: false
        }
    },
    methods: {
        ensureFun(){

        }
    }
}
</script>

<style>

</style>



