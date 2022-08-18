<template>
  <div id="app">
    <div class="nav">
      <nav>
        <ul class="links-list">
          <li>
            <router-link class="joinBtn" to="/login">Login</router-link>
          </li>
          <li>
            <router-link class="joinBtn" to="/register">Register</router-link>
          </li>

          <li>
            <router-link class="joinBtn" to="/users">Users</router-link>
          </li>
        </ul>
      </nav>
      <div class="Sea"> <input class="s" type="text" v-model="search"></div>
    </div>

    <div class="container">
      <router-view :search="search"/>
    </div>

  </div>
</template>

<script>
import { store } from './store'
export default {

  name: 'App',
  watch: {
    search () {
      console.log('setting --->' + this.search)
      store.state.search = this.search
    }
  },
  data () {
    return {
      search: '',
      self: this
    }
  }
}
</script>

<style -scoped>
*{
  box-sizing: border-box;
}
.container {

  max-width: 100%;
  margin-top: 10px;

}

li {
  display: inline-block;
  margin: 0px 10px;
}

.nav {
  background-color: rgb(49, 45, 45);
    border-radius: 10px;
    margin: auto;
    width: 98%;
    overflow: auto;
      overflow: hidden;
}
.links-list a{
  padding-top: 10px;
   text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 12px;
}
.links-list{
  margin: 5px 5px;
  padding: 2px;

}
.joinBtn {
  width: 10em;
  height: 5ex;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  text-align: center;
}

.joinBtn:active {
  box-shadow: 2px 2px 5px #fc894d;
}
.joinBtn:focus{
  background-image: linear-gradient(135deg, #9c40f3 20%, #fc894d );
  box-shadow: 2px 2px 5px #fc894d;
}
.s{

  padding: 10px;
  width: 250px;
  margin-top: 8px;
  height: 40px;
  border-radius: 20px;
  align-content: flex-end;

}

</style>
