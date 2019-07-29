<template>
	<view class="register">
	
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image :src="logoImage"></image>
			</view>
			<!-- 主体 -->
			<view class="main">
					<wInput
						v-model="userName"
						type="text"
						maxlength="15"
						placeholder="用户名"
						@blurFun="isCorrect('name')"
					></wInput>
					<wInput
						v-model="phoneData"
						type="text"
						maxlength="11"
						placeholder="手机号"
						@blurFun="isCorrect('phone')"
					></wInput>
					<wInput
						v-model="passData"
						type="password"
						maxlength="11"
						placeholder="登录密码"
						isShowPass
					></wInput>
					<wInput
						v-model="verCode"
						type="number"
						maxlength="4"
						placeholder="验证码"
						isShowCode
						ref="runCode"
						@setCode="getVerCode()"
					></wInput>
					
				</view>
				
				<wButton 
					text="注 册"
					:rotate="isRotate" 
					bgColor="#5eaef3"
					@click.native="startReg()"
				></wButton>
			
			<!-- 底部信息 -->
			<view class="footer">
				<text 
					@tap="isShowAgree" 
					class="cuIcon"
					:class="showAgree?'cuIcon-radiobox':'cuIcon-round'"
				>同意</text>
				<!-- 协议地址 -->
				<navigator url="" open-type="navigate">《协议》</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	var _this;
	import wInput from '../../components/watch-login/watch-input.vue' //input
	import wButton from '../../components/watch-login/watch-button.vue' //button
	import userApi from '../../common/api/userApi.js'
	
	export default {
		data() {
			return {
				//logo图片 base64
				logoImage: "../../static/ju2.png",
				userName: '',
				phoneData:'', // 用户/电话
				passData:'', //密码
				verCode:"", //验证码
				showAgree:true, //协议是否选择
				isRotate: false, //是否加载旋转
			}
		},
		components:{
			wInput,
			wButton,
		},
		mounted() {
			_this= this;
		},
		methods: {
			isShowAgree(){
				//是否选择协议
				_this.showAgree = !_this.showAgree;
			},
			getVerCode(){
				//获取验证码
				if (_this.phoneData.length != 11) {
				     uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号不正确'
				    });
				    return false;
				}
				console.log("获取验证码")
				this.$refs.runCode.$emit('runCode'); //触发倒计时（一般用于请求成功验证码后调用）
				uni.showToast({
				    icon: 'none',
					position: 'bottom',
				    title: '模拟倒计时触发'
				});
				
				setTimeout(function(){
					_this.$refs.runCode.$emit('runCode',0); //假装模拟下需要 终止倒计时
					uni.showToast({
					    icon: 'none',
						position: 'bottom',
					    title: '模拟倒计时终止'
					});
				},3000)
			},
		    async startReg() {
				let iscanRe = await this.isCorrect(false, true)
				if(iscanRe) {
					return
				}
				//注册
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (this.showAgree == false) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '请先同意《协议》'
				    });
				    return false;
				}
				if (/^1[3|4|5|7|8][0-9]{9}$/.test(this.phoneData)) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号不正确'
				    });
				    return false;
				}
		        if (this.passData.length < 6) {
		            uni.showToast({
		                icon: 'none',
						position: 'bottom',
		                title: '密码不正确'
		            });
		            return false;
		        }
				if (this.verCode.length != 4) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '验证码不正确'
				    });
				    return false;
				}
				_this.isRotate=true
				userApi.register({
					phoneNum: this.phoneData,
					password: this.passData,
					userPin: this.userName
				}).then(res => {
					_this.isRotate=false  
					if(res.data.code === 200){
						uni.reLaunch({
							url: './userMsg',
						});
					}
				})
			},
			isCorrect(type, reg=false){
				let params = {}

				if(reg||type === "name"){
					params.userPin = this.userName
				}
				if(reg||type === "phone"){
					params.phoneNum = this.phoneData
				}
				return new Promise((resolve, reject) => {
					userApi.isRegistered(params).then(res => {
						if(res && res.data && res.data.exist){
							if(type === "name"){
								uni.showToast({
									icon: 'none',
									position: 'bottom',
									title: '该手机已注册'
								});
							}
							if(type === "phone"){
								uni.showToast({
									icon: 'none',
									position: 'bottom',
									title: '用户名已存在'
								});
							}
							
							resolve(true)
						}else{
							resolve(false)
						}
					}).catch(err => {
						reject(err)
					})
				})
			}
		}
	}
</script>

<style>
	@import url("../../components/watch-login/css/icon.css");
	@import url("./css/main.css");
</style>