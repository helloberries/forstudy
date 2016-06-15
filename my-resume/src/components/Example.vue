<template>
	<button v-on:click="greet" class="btn">Greet {{ name }}</button>
</template>

<script>
	export default {
		name: 'Example',
		data: function () {
			return {
				name: 'Vue.js'
			}
		},
		methods: {
	    greet: function (event) {
	      // 方法内 `this` 指向 vm
	      alert('Hello ' + this.name + '!')
	      // `event` 是原生 DOM 事件
	      alert(event.target.tagName)
    }
  }
	}
</script>
