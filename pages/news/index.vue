<template>
	<view class="moments">
		<view ref="kkk" class="moments__post" v-for="(post,index) in posts" :key="index" :id="'post-'+index">
			<view class="post-left">
				<image class="post_header" :src="post.avatarUrl"></image>
			</view>

			<view class="post_right">
				<text class="post-userPin">{{post.userPin}}</text>
				<view id="paragraph" class="paragraph">{{post.content.text}}</view>
				<!-- 相册 -->
				<view v-if="post.content.type === 'image'" class="thumbnails" >
					<view :class="post.content.images.length === 1?'my-gallery':'thumbnail'" v-for="(image, index_images) in post.content.images" :key="index_images">
						<image class="gallery_img" lazy-load mode="aspectFill" :src="image" :data-src="image" @tap="previewImage(post.content.images,index_images)"></image>
					</view>
				</view>
				<!-- 视频 -->
				<view v-else-if="post.content.type === 'vedio'" class="thumbnails" @click="videoFun('video'+index)">
					<video :ref="'video'+index" :id="'video'+index"  :src="post.content.vedio"  objectFit="fill" :show-center-play-btn="false"></video>
				</view>
				<!-- 资料条 -->
				<view class="toolbar">
					<view class="timestamp">{{post.timestamp}}</view>
					<view class="like" @tap="like(index)">
						<image :src="post.islike==0?'../../static/index/islike.png':'../../static/index/like.png'"></image>
					</view>
					<view class="comment" @tap="comment(index)">
						<image src="../../static/index/comment.png"></image>
					</view>
				</view>
				<!-- 赞／评论区 -->
				<view class="post-footer">
					<view class="footer_content">
						<image class="liked" src="../../static/index/liked.png"></image>
						<text class="nickname" v-for="(user,index_like) in post.like.content" :key="index_like">{{user.userPin}}</text>
					</view>
					<view class="footer_content" v-for="(comment,comment_index) in post.comments.comment" :key="comment_index" @tap="reply(index,comment_index)">
						<text class="comment-nickname">{{comment.userPin}}: <text class="comment-content">{{comment.content}}</text></text>
					</view>
				</view>
			</view>
			<!-- 结束 post -->
		</view>

		<view class="foot" v-show="showInput">
			<chat-input @send-message="send_comment" @blur="blur" :focus="focus" :placeholder="input_placeholder"></chat-input>
			<!-- <chat-input @send-message="send_comment" @blur="blur" :placeholder="input_placeholder"></chat-input> -->
		</view>
		<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>

		<switchType v-if="isShowP" :text="'发表'" :url="'./publish/publish'"></switchType>
	</view>

</template>

<script>
	import chatInput from '../../components/im-chat/chatinput.vue'; //input框
	// import postData from '../../common/index/index.post.data.js';//朋友圈数据
	import switchType from '../index/components/switchType.vue'
	import dongtaiApi from '../../common/api/dongtaiApi'
	import moment from 'moment'
	
	export default {
		components: {
			chatInput,
			switchType
		},
		props: {
			isShowP: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				posts: [],//模拟数据
				user_id: 4,

				index: '',
				comment_index: '',

				input_placeholder: '评论', //占位内容
				focus: false, //是否自动聚焦输入框
				is_reply: false, //回复还是评论
				showInput: false, //评论输入框

				screenHeight: '', //屏幕高度(系统)
				platform: '',
				windowHeight: '' ,//可用窗口高度(不计入软键盘)
				
				loadMoreText: "加载中...",
				showLoadMore: false,
				userPin: uni.getStorageSync('userPin'),
				pageNumber: 1
			}
		},
		onLoad() {
			uni.getSystemInfo({ //获取设备信息
				success: (res) => {
					this.screenHeight = res.screenHeight;
					this.platform = res.platform;
				}
			});
			uni.startPullDownRefresh();
			this.getDongTaiList()
		},
		onShow() {
			uni.onWindowResize((res) => { //监听窗口尺寸变化,窗口尺寸不包括底部导航栏
				if(this.platform === 'ios'){
					this.windowHeight = res.size.windowHeight;
					this.adjust();
				}else{
					if (this.screenHeight - res.size.windowHeight > 60 && this.windowHeight <= res.size.windowHeight) {
						this.windowHeight = res.size.windowHeight;
						this.adjust();
					}
				}
			});
		},
		onHide() {
			uni.offWindowResize(); //取消监听窗口尺寸变化
		},
		onUnload() {
			this.max = 0,
				this.data = [],
				this.loadMoreText = "加载更多",
				this.showLoadMore = false;
		},
		onReachBottom() { //监听上拉触底事件
			this.getDongTaiList()
		},
		onPullDownRefresh() { //监听下拉刷新动作
			console.log('onPullDownRefresh');
			this.getDongTaiList()
		},
		onPageScroll(e){
			this.posts.forEach((post, index) => {
				if(post.content.type === "vedio"){
					uni.createSelectorQuery().select("#video3").boundingClientRect(data=>{
						if(!this.$refs.video3) return 
						if(data.top < -180 && this.$refs.video3[0].playing){
							console.log(1)
							this.$refs.video3[0].pause()
						}else if(data.top > this.screenHeight && this.$refs.video3[0].playing){
							console.log(2)
							this.$refs.video3[0].pause()
						}else if(data.top > -170 && data.top< (this.screenHeight-100) && !this.$refs.video3[0].playing){
							console.log(3)
							this.$refs.video3[0].play()
						}
						
					}).exec()
				}
			})
		},
		methods: {
			moment,
			test(){
				this.navigateTo('../test/test');
			},
			navigateTo(url) {
				uni.navigateTo({
					url: url
				});
			},
			like(index) {
				if (this.posts[index].islike == 0) {
					this.posts[index].islike = 1;
					this.posts[index].like.content.push({
						"uid": this.user_id,
						"userPin": "," + this.userPin
					});
					dongtaiApi.dongtaiLike({
						islike: 1,
						post_id: this.posts[index].post_id,
						likecontent: {
							"uid": this.user_id,
							"userPin": this.userPin
						}
					})
				} else {
					this.posts[index].islike = 0;
					this.posts[index].like.content.splice(this.posts[index].like.content.indexOf({
						"uid": this.user_id,
						"userPin": "," + this.userPin
					}), 1);
					dongtaiApi.dongtaiLike({
						islike: 0,
						post_id: this.posts[index].post_id,
						likecontent: {
							"uid": this.user_id,
							"userPin": this.userPin
						}
					})
				}
			},
			comment(index) {
				this.showInput = true; //调起input框
				this.focus = true;
				this.index = index;
			},
			adjust() { //当弹出软键盘发生评论动作时,调整页面位置pageScrollTo
				// return;
				uni.createSelectorQuery().selectViewport().scrollOffset(res => {
					var scrollTop = res.scrollTop;
					let view = uni.createSelectorQuery().select("#post-" + this.index);
					view.boundingClientRect(data => {
						console.log("data:" + JSON.stringify(data));
						console.log("手机屏幕高度:" + this.screenHeight);
						console.log("竖直滚动位置" + scrollTop);
						console.log("节点离页面顶部的距离为" + data.top);
						console.log("节点高度为" + data.height);
						console.log("窗口高度为" + this.windowHeight);

						uni.pageScrollTo({
							scrollTop: scrollTop - (this.windowHeight - (data.height + data.top + 45)), //一顿乱算
							// scrollTop: 50, 
							duration: 300
						});
					}).exec();
				}).exec();
			},
			reply(index, comment_index) {
				this.is_reply = true; //回复中
				this.showInput = true; //调起input框
				let replyTo = this.posts[index].comments.comment[comment_index].userPin;
				this.input_placeholder = '回复' + replyTo;
				this.index = index; //post索引
				this.comment_index = comment_index; //评论索引
				this.focus = true;
			},
			blur: function() {
				this.init_input();
			},
			send_comment: function(message) {
				if (this.is_reply) {
					var reply_userPin = this.posts[this.index].comments.comment[this.comment_index].userPin;
					var comment_content = '回复' + reply_userPin + ':' + message.content;
				} else {
					var comment_content = message.content;
				}
				this.posts[this.index].comments.total += 1;
				this.posts[this.index].comments.comment.push({
					"uid": this.user_id,
					"userPin": this.userPin,
					"content": comment_content //直接获取input中的值
				});
				dongtaiApi.sendComment({
					post_id: this.posts[this.index].post_id,
					commit: {
						"uid": this.user_id,
						"userPin": this.userPin,
						"content": comment_content //直接获取input中的值
					}
				})
				this.init_input();
			},
			init_input() {
				this.showInput = false;
				this.focus = false;
				this.input_placeholder = '评论';
				this.is_reply = false;
			},
			previewImage(imageList, image_index) {
				var current = imageList[image_index];
				uni.previewImage({
					current: current,
					urls: imageList
				});
			},
			goPublish() {
				uni.navigateTo({
					url: './publish/publish',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			videoFun(index){
				console.log(uni.createSelectorQuery().select("#" + index))
				console.log(this.$refs)
				// this.$refs[index][0].enterFullscreen()
				uni.createSelectorQuery().select("#" + index).fields({
					size: true,
  					scrollOffset: true
				}, data=>{
					console.log(data)
				}).exec()
			},
			getDongTaiList(){
				dongtaiApi.dongtaiList({
					userPin: this.userPin,
					pageNumber: this.pageNumber,
					pageSize: 4
				}).then(res => {
					if(res && res.data && res.data.result){
						if(res.data.result.length > this.posts.length){
							res.data.result.map(item => {
								if(this.posts.filter(post => {return post.post_id === item.post_id}).length === 0){
									this.posts.push(item)
								}
							})
						}
						console.log(this.posts)
						
					}
					uni.stopPullDownRefresh()
				})
			}
		}
	}
</script>

<style scoped>
	@import '../../common/uni.css';
	@import url("../../common/index/index.css");
	.moments .uni-loadmore {
		width: 100%;
		text-align: center;
	}
	.thumbnails video {
		width: 558upx;
		height: 340upx;
	}
</style>
