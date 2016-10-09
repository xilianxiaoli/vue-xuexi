module.exports = function(router){
	router.transitionOnLoad = true;
	router.map({
		'/index': {
			component: require('./components/index.vue'),
			auth:true,
			subRoutes: {
				'/xiaoli/:id':{
					component:require('./components/menu2/index.vue')
				}
			}
		},
		'/timeline': {
			name:'time',
			component: require('./components/menu2/index.vue')
		},
		'/404': {
			component: {
				component: require('./404.vue')
			}
		},
		'comm':{
			name:'comm',
			component:require('./components/menu2/comm.vue')
		}
	});
};
