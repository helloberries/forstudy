<template>
	<div class="col-md-3 l-content">
		<div class="profile-pic">
			<div class="pic-bg">
				<img src="http://webpentagon.com/demo/themeforest/wordpress/vcard/wp-content/themes/vcard/includes/images/profile-avatar.png" class="img-responsive" alt="" />
			</div>
		</div>
		<nav>
			<ul class="navigation">
				<li v-for="nav in navs" class="menu-item">
					<a href="{{ nav.src }}">
						<i class="{{ nav.icon }}"></i>
						<span>{{ nav.text }}</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'Left',
		data: function () {
			return {
				navs: [
					{ text: '简介', src: '/', icon: 'icon-user' },
					{ text: '作品', src: '/#demos', icon: 'icon-briefcase'},
					{ text: '经历'},
					{ text: '联系', src: '/#contact', icon: 'icon-envelope'}
				],
			}
		}
	}
</script>

<style scoped>
ul,li {
	list-style: none;
}

/* PROFILE */

.l-content {
	background: #000;
	width: 27.7%;
	padding: 0;
}

.profile-pic {
	background: url('http://webpentagon.com/demo/themeforest/wordpress/vcard/wp-content/themes/vcard/includes/images/profile-bg.jpg') no-repeat;
	height: 266px;
	position: relative;
}

.pic-bg {
	background: url('http://webpentagon.com/demo/themeforest/wordpress/vcard/wp-content/themes/vcard/includes/images/pic-bg.png') no-repeat;
	width: 140px;
	height: 140px;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: table-cell;
	margin: auto;
	vertical-align: middle;
	padding: 10px;
}

.pic-bg img {
	border-radius: 100%;
	height: 100%;
}

/* NAVIGATION */
.navigation {
	padding: 0;
	margin: 0
}

.navigation li {
	border-bottom: 1px solid #222b2e;
	position: relative;
	list-style: none;
	background: -moz-linear-gradient(top,  #2c383c 0%, #2a363a 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#2c383c), color-stop(100%,#2a363a));
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#2c383c), color-stop(100%,#2a363a));
	background: -o-linear-gradient(top,  #2c383c 0%,#2a363a 100%);
	background: -ms-linear-gradient(top,  #2c383c 0%,#2a363a 100%);
	background: linear-gradient(to bottom,  #2c383c 0%,#2a363a 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2c383c', endColorstr='#2a363a',GradientType=0 );
}

.navigation li:last-child {
	border-bottom: none;
}

.navigation li a {
	padding: 23.7px 25px;
	display: table;
	width: 100%;
	text-align: right;
	font-family: 'Microsoft Yahei', sans-serif;
	font-size: 17px;
	color: #d1d1d1;
	position: relative;
}

.navigation li a i {
	display: inline-block;
	font-family: FontAwesome;
	font-style: normal;
	font-weight: normal;
	line-height: 1;
	-webkit-font-smoothing: antialiased;
	float: right;
	font-size: 20px;
	position: relative;
	top: 1px;
	margin-left: 15px;
	color: #d1d1d1;
}

.navigation li a:hover, .navigation li a:hover i, .flex-active a, .flex-active a i {
	color: #2c383c !important;
}

.navigation li:before {
	content: '';
	position: absolute;
	top: 0px;
	width: 0%;
	height: 100%;
	right: 0px;
	background: #ffd42d;
	-webkit-transition: all .3s ease-in-out;
	-moz-transition: all .3s ease-in-out;
	-o-transition: all .3s ease-in-out;
	transition: all .3s ease-in-out;
}

.navigation li:hover:before ,
.navigation li.flex-active:before {
	content: '';
	width: 100% !important;
	-webkit-transition: all .3s ease-in-out;
	-moz-transition: all .3s ease-in-out;
	-o-transition: all .3s ease-in-out;
	transition: all .3s ease-in-out;
}

</style>
