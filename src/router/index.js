import Vue from 'vue'
import store from '../store/store.js'//为什么还要引入？？？？？？？？

import Router from 'vue-router'
import appHeader from '../components/header'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Admin from '../components/Admin'
import About from '../components/about/About'
import Login from '../components/Login'
import Register from '../components/Register'

// 二级路由
import History from '../components/about/History'
import Contact from '../components/about/Contact'
import Delivery from '../components/about/Delivery'
import OrderingGuide from '../components/about/OrderingGuide'

//三级路由
import Phone from '../components/about/contact/Phone'
import Person from '../components/about/contact/Person'

Vue.use(Router)

export   const router =  new Router({
  routes: [
    {path: '/',name: 'HomeLink',component: Home},
    {path: '/menu',name: 'MenuLink',component: Menu},
    {path: '/admin',name: 'AdminLink',component: Admin,
    	/**
		*   路由独享守卫(还有全局守卫，还有组件内守卫：在Admin组件内)
    	*/
    	/*beforeEnter:(to,from,next)=>{
    		alert("非登录状态，请先登录");
    		// next(false);
    		next('/login');
    	}*/
	},
    {path: '/about',name: 'AboutLink',component: About,redirect:'/about/history',children:[
    	{path: 'history',name: 'HistoryLink',component: History},
    	{path: 'contact',name: 'ContactLink',component: Contact,redirect:'/about/contact/person',children:[
    		{path: 'phone',name: 'PhoneLink',component: Phone},
    		{path: 'person',name: 'PersonLink',component: Person}
    	]},
    	{path: 'delivery',name: 'DeliveryLink',component: Delivery},
    	{path: 'orderingGuide',name: 'OrderingGuideLink',component: OrderingGuide},
    ]},
    {path: '/login',name: 'LoginLink',component: Login},
    {path: '/register',name: 'RegisterLink',component: Register},
    {path: '*',redirect:'/'}
  ],
  mode:'history',//去除url中的“#”号
  scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
	    return savedPosition
	  } else {
	    return { x: 0, y: 0 }
	  }
	  //return {x:0,y:100}
  }
})



//全局守卫
router.beforeEach((to, from, next) => {
   //console.log(store.state.isLogin);
  //判断store.getters.isLogin===false
  /*if(to.path=='/login' || to.path=="/register"){
  	next();
  }else{
  	alert("请先登录！");
  	next('/login');
  }	*/	
  let isLogin=store.getters.isLogin;
  if(isLogin){
  	next();
  }else{
  	if(to.path=='/login' || to.path=="/register"){
  		next();
  	}else{
  		alert("请先登录！");
  		next('/login');
  	}
  }
})




//导入导出(第二种)：
/*const router =  new Router({
  routes: [
    {path: '/',name: 'HomeLink',component: Home},
    {path: '/menu',name: 'MenuLink',component: Menu},
    {path: '/admin',name: 'AdminLink',component: Admin},
    {path: '/about',name: 'AboutLink',component: About},
    {path: '/login',name: 'LoginLink',component: Login},
    {path: '/register',name: 'RegisterLink',component: Register},
    {path: '*',redirect:'/'}
  ]
})*/

//全局守卫
/*router.beforeEach((to, from, next) => {
  next();
})

export default router;
//main.js引入时不用加’{}‘
*/