<template lang="jade">
div.topnav
	a(v-link="{ path: '/' }") 个人档案
</template>

<style lang="sass">
.topnav {
	width: 100%;
	height: 60px;
	background: #101010;

  & a:link, & a:active {
		font-family: 'Microsoft Yahei', sans-serif;
		text-decoration: none;
	}

	& a:hover, & a:visited {
		color: #f0f0f0;
	}
}
</style>
