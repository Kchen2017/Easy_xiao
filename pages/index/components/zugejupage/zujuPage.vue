<template>
	<view class="zujuFrom">
		<uni-steps :options="optionlist"
			:active="stepIndex" />
			
		<view class="form">
			<basicMsg v-if="stepIndex === 0"></basicMsg>
            <wherewhoMsg v-if="stepIndex === 1"></wherewhoMsg>
            <limitMsg v-if="stepIndex === 2"></limitMsg>
		</view>
		<view :class="{'btn': stepIndex !== 0}">
            <button v-if="stepIndex !== 0" @click="upFun" type="primary">上一步</button>
            <button v-if="stepIndex !== 2" @click="downFun" type="primary">下一步</button>
			<button v-if="stepIndex === 2" @click="sureFun" type="primary">确定</button>
		</view>
	</view>
</template>

<script>
    import {uniSteps} from '@dcloudio/uni-ui'
    import basicMsg from './basicMsg'
    import wherewhoMsg from  './wherewhoMsg'
    import limitMsg from './limitMsg'
	export default {
		components: {uniSteps, basicMsg, wherewhoMsg, limitMsg},
		data() {
			return {
				stepIndex: 0,
				optionlist: [{
					title: '第一步'
				},{
					title: '第二步'
				},{
					title: '第三步'
				}]
			}
		},
		methods: {
			downFun(){
                if(this.stepIndex === 3) return
                this.stepIndex++
            },
            upFun(){
                if(this.stepIndex === 0) return
                this.stepIndex-- 
            },
            sureFun(){

            }
		}
	}
</script>

<style>
	.zujuFrom{
		padding: 40upx;
		font-size: 14px;
	}
    .form{
        padding: 40upx 0;
    }
	.btn{
        display: flex;
    }
</style>
