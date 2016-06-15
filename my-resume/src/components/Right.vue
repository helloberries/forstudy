<template>
	<div class="col-md-9 r-content">
		<div class="flexslider">
			<div class="slides">
				<section v-for="slide in slides" id="{{ slide.id }}">
					<profile></profile>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
	import Profile from './Profile.vue'

	export default {
		name: 'Right',
		data: function () {
			return {
				slides: [
					{ id: 'profile', tagname: '<profile>', endtag: '</profile>'},
					{ id:'demos', tagname:'<demos>', endtag: '</demos>' },
					{ id: 'experience', tagname: '<experience>', endtag: '</experience>' },
					{ id: 'contact', tagname: '<contact>', endtag: '</contact>' }
				]
			}
		},
		components: {
			Profile
		}
	}
</script>
