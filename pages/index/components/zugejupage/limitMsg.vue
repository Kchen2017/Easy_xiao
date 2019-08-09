<template>
    <view class="basic">
        <picker mode="date" :value="limitData.date" :start="startDate" :end="endDate" @change="bindDateChange">
            <view class="formitem">
                {{limitData.date}}
            </view>
		</picker>
        <picker mode="time" :value="limitData.startTime" start="00:00" end="24:00" @change="bindstartTimeChange">
            <view class="formitem">
                   {{limitData.startTime}}
            </view>
        </picker>
        
        <picker mode="time" :value="limitData.endTime" :start="limitData.startTime" end="24:00" @change="bindendTimeChange">
            <view class="formitem">
                {{limitData.endTime}}
            </view>
        </picker>
        <picker @change="bindpayChange" :value="payType" :range="payTypeArr">
            <view class="formitem">
               {{payTypeArr[payType]}}
            </view>
        </picker>
        <picker @change="bindPersonChange" :value="limitData.count" :range="countArr">
            <view class="formitem">
               {{limitData.count}}
            </view>
        </picker>
    </view>
</template>

<script>
export default {
    props: ["value"],
    data(){
        return {
            limitData: this.value,
            countArr: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
            payTypeArr: ["免费", "AA", "竞赛"],
            payType: 0
        }
    },
    methods: {
        bindDateChange: function(e) {
            this.limitData.date = e.target.value
        },
        bindstartTimeChange: function(e) {
            this.limitData.startTime = e.target.value
        },
        bindendTimeChange: function(e) {
            this.limitData.endTime = e.target.value
        },
        bindPersonChange: function(e) {
            this.limitData.count = e.target.value
        },
        bindpayChange: function(e) {
            this.payType = e.target.value
            this.limitData.payType = this.payTypeArr[e.target.value]
        },
        getDate(type) {
            const date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if (type === 'start') {
                year = year - 60;
            } else if (type === 'end') {
                year = year + 2;
            }
            month = month > 9 ? month : '0' + month;;
            day = day > 9 ? day : '0' + day;
            return `${year}-${month}-${day}`;
        },
    },
    computed: {
        startDate() {
            return this.getDate('start');
        },
        endDate() {
            return this.getDate('end');
        }
    },
}
</script>

<style>
.basic {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        min-height: 800upx;
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


