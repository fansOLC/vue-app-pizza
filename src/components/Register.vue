<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../../src/assets/icon.png" alt="">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label>用户名</label>
              <input 
                type="text"
                class="form-control"
                v-model="user.nuame"
                required="true" 
                >
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input 
                type="password"
                class="form-control"
                v-model="user.password"
                required="true" 
                >
            </div>
            <div class="form-group">
              <label for="confirm-password">确认密码</label>
              <input 
                type="password"
                class="form-control"
                v-model="user.confirmPassword"
                required="true" 
                >
            </div>
            <button type="submit" class="btn btn-block btn-success">注册</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        user:{
          uname:'',
          password:'',
          confirmPassword:''
        }
      }
    },
    methods:{
      onSubmit(){
        if(this.user.password==this.user.confirmPassword){
            alert("注册通过，但是不能用！打我啊，O(∩_∩)O哈哈~");
        }
      }
    }
  }
</script>