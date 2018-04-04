<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="pizza in allPizza" :key="pizza.type">
          <tr>
            <td>{{pizza.type}}</td>
            <td>
              <button @click="deleteType(pizza)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
	import api from '../api/api'
	import NewPizza from './NewPizza.vue'
	export default{
		data(){
			return{
			}
		},

		components:{
	      'app-new-pizza':NewPizza
	    },	

	    computed:{
	    	allPizza(){
	    		return this.$store.state.allPizza
	    	}
	    },
	    
	    created(){
	    	api.searchPizza().then(res=>{
	    		//存储在vuex，修改属性状态
	    		this.$store.dispatch("getAllPizzas",res.content);
	    	}).catch(err=>{
	    		console.log(err);
	    	})
	    },
	    
	    methods:{
	    	deleteType(pizza){
	    		if(confirm("确定删除吗？")){
	    			api.deletePizza({id:pizza.id}).then(res=>{
	    				if(res.state=="success"){
	    					//在vuex中修改allPizza属性状态
	    					this.$store.dispatch("removeOnePizza",pizza);
	    				}else{
	    					alert(res.msg)
	    				}	
		    		}).then(err=>{
		    			console.log(err);
		    		});
	    		}
	    	}
	    }
		// beforeRouteEnter:(to,from,next)=>{
			/**
			****执行此方法是获取不到data中的值的(下面的方法可以获取)***
			*/
			//alert("hello"+this.name);
			//next();


			/**
			*****获取data中的属性,next()回调函数传入vm
			*/
			/*console.log(to);
			console.log(from);
			next(vm=>{//异步
				alert("hello"+vm.msg);
			});*/
		// },
		
		/*beforeRouteLeave (to, from , next) {
		  const answer = window.confirm('确定要离开吗？')
		  if (answer) {
		    next()
		  } else {
		    next(false)
		  }
		}*/
	}
</script>