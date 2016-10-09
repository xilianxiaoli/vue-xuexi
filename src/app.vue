<template>

	<header>
		<poi-header v-bind:father-name="hahaObj" v-on:head-vali="head(123)"></poi-header>
	</header>

	<section>
	    <div class="page">
    	    <router-view transition="expand"></router-view>  <!--顶级的外链。它会渲染一个和顶级路由匹配的组件-->
    	</div>
	</section>

	<footer>
	    <poi-footer v-on:footer="onFooter" v-show="footShow"></poi-footer> <!--或者通过 v-on 标签绑定派发监听事件-->
	</footer>
	<!--
	关于子组件调用父组件的方法，只能通过向上广播的方式调用，
	在父组件中监听的方式有两种  1. 标签上 v-on:footer="onFooter" ， 监听footer句柄，触发onFooter方法
	2. events 中监听
	-->

</template>

<script>
//	import poiHeader from './components/header.vue';
	import poiFooter from './components/footer.vue';

	var poiHeader = require ('./components/header.vue')

	export default {
		data() {
			return {
				footShow:true,
				haha: 'fuck',
				hahaObj:{
					name:'fuckObj'
				}
			}
		},
		components: {
			poiHeader,
			poiFooter
		},
		methods: {
			onFooter:function(msg) {
				console.log(msg)
			},
			head:function(msg) {
				console.log("app headVali"+msg)
			}
		},
		created() {

		},
		events:{  //调用$on监听派发事件
			'child-msg':function(msg) {
				console.log(msg)
			}
		}
	};
</script>

<style>
	
	p {
		font-size: 2em;
	}

</style>
