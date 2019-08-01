<template>
	<view class="login">
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image :src="logoImage"></image>
			</view>
			<!-- 主体表单 -->
			<view class="main">
				<wInput
					v-model="phoneData"
					type="text"
					maxlength="11"
					placeholder="用户名/电话"
				></wInput>
				<wInput
					v-model="passData"
					type="password"
					maxlength="11"
					placeholder="密码"
				></wInput>
			</view>
			<wButton 
				text="登 录"
				:rotate="isRotate" 
				bgColor="#5eaef3"
				@click.native="startLogin()"
			></wButton>
			
			<!-- 其他登录 -->
			<view class="other_login cuIcon">
				<view class="login_icon" style="color: #62b900">
					<view class="cuIcon-weixin" @tap="login_weixin"></view>
				</view>
				<view class="login_icon" style="color: #e64340">
					<view class="cuIcon-weibo" @tap="login_weibo"></view>
				</view>
				<view class="login_icon">
					<view class="cuIcon-github" @tap="login_github"></view>
				</view>
			</view>
			
			<!-- 底部信息 -->
			<view class="footer">
				<navigator url="forget" open-type="navigate">找回密码</navigator>
				<text>|</text>
				<navigator url="register" open-type="navigate">注册账号</navigator>
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
				logoImage: "../../static/ju2.png",
				phoneData:'', //用户/电话
				passData:'', //密码
				isRotate: false, //是否加载旋转
			};
		},
		components:{
			wInput,
			wButton,
		},
		onLoad() {
			_this= this;
			this.isLogin();
		},
		methods: {
			isLogin(){
				uni.getUserInfo({
					success: function(obj){
						console.log(obj)
					}
				})
				try {
					const value = uni.getStorageSync('islogin');
					if (value) {
						uni.reLaunch({
							url: '../index/index',
						});
					}  
				} catch (e) {
					// error
				}
			},
		    startLogin(){
				//登录
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (this.phoneData.length == "") {
				     uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '用户名不能为空'
				    });
				    return;
				}
		        if (this.passData.length < 2) {
		            uni.showToast({
		                icon: 'none',
						position: 'bottom',
		                title: '密码不正确'
		            });
		            return;
		        }
				
				
				this.isRotate=true
				uni.showLoading({
					title: '登录中'
				});
				userApi.login({
					userPin: this.phoneData,
					password: this.passData
				}).then(res => {
					if(res && res.data.islogin){
						uni.showToast({
							icon: 'success',
							position: 'bottom',
							title: '登录成功'
						});
						uni.reLaunch({
							url: '../index/index',
						});
						uni.setStorageSync('islogin', true);
						uni.setStorageSync('userPin', res.data.userPin);
					}else{
						_this.passData=""
						uni.showToast({
							icon: 'error',
							position: 'bottom',
							title: '账号或密码错误，账号admin密码admin'
						});
					}
					this.isRotate=false
				}).catch(err => {
					uni.hideLoading();
					this.isRotate=false
				})
		    }
			,
			login_weixin() {
				//微信登录
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
					 if(loginRes.authResult){
						 uni.getUserInfo({
							success: function(obj){
								if(obj)
								userApi.register({
									nickName: obj.userInfo.nickName,
									gender: obj.userInfo.gender,
									city: obj.userInfo.city,
									province: obj.userInfo.province,
									country: obj.userInfo.country,
									avatarUrl: obj.userInfo.avatarUrl
								}).then(res => {
									if(res.data.code === 200){
										uni.reLaunch({
											url: './userMsg'
										});
									}
								})
							}
						})
					 }
				  }
				});
			},
			login_weibo() {
				//微博登录
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
					console.log(loginRes.authResult);
				  }
				});
			},
			login_github() {
				//github登录
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
					console.log(loginRes.authResult);
				  }
				});
			}
		}
	}
</script>

<style>
	@import url("../../components/watch-login/css/icon.css");
	@import url("./css/main.css");
</style>
