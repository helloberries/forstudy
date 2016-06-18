'use strict'

export default function (router) {
	router.map({
		'/profile': {
			component: require('./views/Profile.vue')
		},
		'/demos': {
			component: require('./views/Demos.vue')
		}
	})
}
