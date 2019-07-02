<template>
	<view class="zujuFrom">
		<view class="form">
			<view @click="gotoSelectGround" class="item boderbottom">
				<view class="tit">
					场地：
				</view>
				<view class="txt">北京五棵松开伊拉克球场</view>
				<text class="iconfont icon-you2"></text>
			</view>
			<view class="item boderbottom">
				<view class="tit">
					名称：
				</view>
				<view class="txt">
					<input type="text">
				</view>
				<text class="iconfont icon-you2"></text>
			</view>
			<picker @change="bindPersonChange" :value="count" :range="countArr">
				<view class="item boderbottom">
					<view class="tit">
						限制人数：
					</view>
					<view class="txt">{{count}}</view>
					<text class="iconfont icon-you2"></text>
				</view>
			</picker>
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="item boderbottom">
					<view class="tit">
						日期：
					</view>
					<view class="txt">{{date}}</view>
					<text class="iconfont icon-you2"></text>
				</view>
			</picker>
			
			<picker mode="time" :value="startTime" start="00:00" end="24:00" @change="bindstartTimeChange">
				<view class="item boderbottom">
					<view class="tit">
						开始时间：
					</view>
					<view class="txt">{{startTime}}</view>
					<text class="iconfont icon-you2"></text>
				</view>
			</picker>
			
			<picker mode="time" :value="endTime" :start="startTime" end="24:00" @change="bindendTimeChange">
				<view class="item boderbottom">
					<view class="tit">
						结束时间：
					</view>
					<view class="txt">{{endTime}}</view>
					<text class="iconfont icon-you2"></text>
				</view>
			</picker>
			<picker @change="bindpayChange" :value="payType" :range="payTypeArr">
				<view class="item boderbottom">
					<view class="tit">
						支付方式：
					</view>
					<view class="txt">{{payTypeArr[payType]}}</view>
					<text class="iconfont icon-you2"></text>
				</view>
			</picker>
			<view class="item">
				<view class="tit">
					头像：
				</view>
				<view class="photo">
					<text class="iconfont icon-tianjiatouxiang1"></text>
					<text class="iconfont icon-you2"></text>
				</view>
			</view>
		</view>
		<view>
			<button type="primary">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date: "",
				startTime: "",
				endTime: "",
				count: "",
				countArr: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
				payType: "",
				payTypeArr: ["免费", "AA", "竞赛"]
			}
		},
		methods: {
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindstartTimeChange: function(e) {
				this.startTime = e.target.value
			},
			bindendTimeChange: function(e) {
				this.endTime = e.target.value
			},
			bindPersonChange: function(e) {
				this.count = e.target.value
			},
			bindpayChange: function(e) {
				this.payType = e.target.value
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
			gotoSelectGround(){
				uni.navigateTo({
					url: "../groundlist/groundlist"
				})
			}
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
	.zujuFrom{
		padding: 40upx;
		font-size: 14px;
	}
	.item {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		/* background-color: #dddd; */
	}
	.boderbottom {
		border-bottom: 2upx solid #ccc;
	}
	.form {
		border: 2upx solid #ddd;
		margin-bottom: 60upx;
	}
	.form .tit {
		width: 30%;
		text-align: right;
	}
	.form .txt {
		width: 65%;
		overflow: hidden;
	}
	.txt input {
		height: 100%;
	}
	.photo {
		width: 15%;
		display: flex;
		justify-content: space-between;
	}
</style>
