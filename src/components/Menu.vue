<template>
  <div class="row">
  	<!-- 菜单 -->
    <div class="col-md-8 col-sm-12">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
       <tbody v-for="content in contents" :key="content.type">
         <tr>
           <td><strong>{{content.type}}</strong></td>
         </tr>
         <tr>
           <td>{{content.size1}}</td>
           <td>{{content.price1}}</td>
           <td><button @click="addPizza(content.type,content.size1,content.price1)" class="btn btn-sm btn-outline-success">+</button></td>
         </tr>
         <tr>
           <td>{{content.size2}}</td>
           <td>{{content.price2}}</td>
           <td><button @click="addPizza(content.type,content.size2,content.price2)" class="btn btn-sm btn-outline-success">+</button></td>
         </tr>
       </tbody> 
      </table>
    </div>
    <!-- 购物车 -->
    <div class="col-md-4 col-sm-12">
    	<div v-if="collectPizzas.length>0">
	    	<table class="table">
	    		<thead class="thead-default">
	    			<tr>
	    				<th>数量</th>
	    				<th>品种</th>
	    				<th>尺寸</th>
	    				<th>价格</th>
	    			</tr>
	    		</thead>
	    		<tbody>
	    			<tr v-for="pizza in collectPizzas">
	    				<td>
	    					<button @click="reduceCount(pizza)" class="btn btn-sm">-</button>
	    					<span>{{pizza.count}}</span>
	    					<button @click="addCount(pizza)" class="btn btn-sm">+</button>
	    				</td>
	    				<td>{{pizza.type}}</td>
	    				<td>{{pizza.size}}</td>
	    				<td>{{pizza.price*pizza.count}}</td>
	    			</tr>
	    		</tbody>
	    	</table>
	    	<p>总价：{{totalMoney}}</p>
	    	<button class="btn btn-success btn-block">提交</button>
    	</div>
    	<div v-else>
    		<h5 style="text-align:center">购物车没有任何商品</h5>
    	</div>
    </div>
  </div>
</template>
<script>
  import api from '../api/api'	
  export default{
    data(){
      return{
      		//contents:[],//已存储在vuex
      		collectPizzas:[]
       }
    },
    created(){
    	api.searchPizza().then(res=>{
    		//存储在组件内
    		//this.contents=res.content;
    		
    		//存储在vuex
    		this.$store.dispatch("getAllPizzas",res.content);
    	})
    },
    computed:{
    	totalMoney(){
    		let sum=0;
    		for(let i=0;i<this.collectPizzas.length;i++){
    			sum+=this.collectPizzas[i].count*this.collectPizzas[i].price
    		}
    		return sum;
    	},
    	contents(){
    		return this.$store.state.allPizza
    	}
    },
    methods:{
    	addPizza(type,size,price){
    		let pizza={
    			type:type,
    			size:size,
    			price:price,
    			count:1
    		}

    		if(this.collectPizzas.length>0){
    			let result=this.collectPizzas.filter((onePizza)=>{
    				return type==onePizza.type&&size==onePizza.size;
    			});
    			if(result.length>0){
    				result[0].count++;
    			}else{
    				this.collectPizzas.push(pizza);
    			}	
    		}else{
    			this.collectPizzas.push(pizza);
    		}	
    	},
    	reduceCount(pizza){
    		if(pizza.count<=1){
    			this.collectPizzas.splice(this.collectPizzas.indexOf(pizza),1);	
    		}else{
    			pizza.count--;	
    		}
    	},
    	addCount(pizza){//直接传count不起作用，传对象，才能对属性起作用
    		pizza.count++
    	}
    }
  }
</script>

