<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza!</h1>
        <h2>这里有你非常喜欢的pizza!</h2>
        <button @click="goToMenu" class="btn btn-success">Let's order!</button>
      </div>
    </div>
  </div>
</template>
<script>
	export default{
		methods:{
			goToMenu(){
				this.$router.push({
					 path:'/menu',
					name:'MenuLink',
					query:{
						firstName:'ou',
						lastName:'Liancheng'
					}
					,
					params:{
						firstName:'Xie',
						lastName:'Zhengyun'
					}
				});
			}
		}
		
	}
</script>

<style scoped>
div.row{
	margin:0;
}
#home{
	background: url('../assets/pizza.jpg') no-repeat;
	 background-size:cover;
	 height:800px;
	 padding:100px;
}
.background{
	background: #eee;
	opacity:0.8;
	margin:0 auto;
	padding:10px;
}
</style>