<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
