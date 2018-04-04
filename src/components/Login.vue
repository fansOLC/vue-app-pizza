<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../../src/assets/icon.png" alt="">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label>用户名</label>
              <input  type="text" class="form-control"  v-model="user.uname"/>
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="user.password"/>
            </div>
            <button type="submit" class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import api from '../api/api'
	export default{
		data(){
			return{
				user:{
					uname:'',
					password:''
				}
			}
		},
		beforeRouteEnter(to,from,next){
			next(vm=>{
				vm.$store.dispatch("setUser",null);
			});
		},
		methods:{
			onSubmit(){
				api.login(this.user).then(res=>{
					if(res.userName){
						this.$store.dispatch("setUser",res.userName);
						this.$router.push({name:'HomeLink'});
					}else{
						alert("用户名或密码错误");
						this.$store.dispatch("setUser",null);
					}
				}).catch(err=>{
					console.log(err);
				})
			}
		}
	}
</script>