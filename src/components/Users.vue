<template>
  <div>
    <!-- <div>{{returnMethon()}}</div> -->
    <div v-if="show" class="userContainer">
      <div v-if="filteredUsers.length ===0" class="Emp">No users Found!😥</div>

      <div class="flip-card" v-for="user in filteredUsers" :key="user.id" @click="getUser(user.id)">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
            <div class="content">
              <ul>
                <li>Name:{{user.fullName}}</li>
                <li>Contact:{{user.contact}}</li>
                <li>E-Mail{{user.email}}</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>hidden

    <router-view></router-view>
  </div>
</template>

<script>
import Input from './Input.vue'
// import { store } from '../store'
export default {
  components: { Input },
  props: ['search'],
  name: 'Users',
  watch: {
    $route (to, from) {
      var pattern = to.path
      var out = pattern.match('/users/user/')
      if (out == null) { this.show = true } else this.show = false
      console.log('out-->' + out)
    }
  },
  computed: {
    // search: function () {
    //   console.log('getting-->' + store.state.search)
    //   return store.state.search
    // },
    returnMethon () {
      console.log('helo')
      return 'hlo'
    },
    filteredUsers () {
      console.log('fxhjrtj')
      return this.Users.filter((user) => {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.msg = this.search
        return user.fullName.match(this.search)
      })
    }
  },
  data () {
    return {
      msg: 'Users',
      Users: [],
      show: true,
      empty: false
    }
  },
  beforeCreate () {
    console.log(`the component is now before create--users`)
    console.log(this.msg)
  },
  created () {
    this.getData()
    console.log(`the component is now created.---users`)
    console.log(this.msg)
  },
  beforeMount () {
    console.log(`the component is now before mount.---users`)
    console.log(this.msg)
  },
  mounted () {
    console.log(`the component is now mounted.---users`)
    console.log(this.msg)
  },
  methods: {
    getData () {
      this.$http.get('http://localhost:8080/FormProject/list').then((response) => {
        this.Users = response.data.result.Users
      })
    },
    getUser (id) {
      console.log('is->' + id)
      this.show = false
      var url = '/users/user/' + id
      this.$router.push(url)
    },
    checkEmpty () {
      console.log('Check empty called--')
      // if (this.filteredUsers && this.filteredUsers.length === 0) {
      //   console.log('Empty')
      //   return true
      // } else {
      //   console.log('Not Empty')
      //   return false
      // }
    }
  }
}
</script >

<!--asyn await, store, element ui -->
<style scoped>
.Emp{
  font-size: 2em;
  color:red;
  margin:auto;
}
.content{
  position: relative;
  right: 45px;
  background-color: transparent;
}
div {
  margin-top: 50px;
  border-radius: 5px;
  background-color: rgb(49, 45, 45);
}
.flip-card {
  background-color: transparent;
  background-color: rgb(84, 116, 184);
  width: 300px;
  padding: 20px;
  height: 300px;
  margin-right: 80px

}
.flip-card-inner{
  padding:15px;
  width: 250px;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.userContainer{
  margin-top: 0px;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgb(49, 45, 45);
}
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  margin-bottom: 30px;
  position: relative;
  bottom: 80px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}

</style>
