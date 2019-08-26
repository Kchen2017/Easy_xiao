<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			//app启动时打开启动广告页
			// var w = plus.webview.open(
			// 	'hybrid/html/advertise/advertise.html',
			// 	'本地地址',
			// 	{ top: 0, bottom: 0, zindex: 999 },
			// 	'fade-in',
			// 	500
			// );
			// //设置定时器，4s后关闭启动广告页
			// setTimeout(function() {
			// 	plus.webview.close(w);
			// }, 4000);
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("./common/css/ui.css");
	/*每个页面公共css */
	.index_con .uni-navbar-container {
		display: flex;
		align-items: center;
	}
	.long-title{width:480upx;white-space:nowrap; overflow:hidden; word-break:keep-all; text-overflow:ellipsis;word-wrap:normal;}
</style>
