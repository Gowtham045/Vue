<template>
  <div class="con">

    <h1 v-show="!show">Registerd Successfully!</h1>
    <form v-show="show"  @submit.prevent="submit()">
      <h1>Regi<span id="Register">ster</span></h1>
      <div class="row">
        <div class="col-25"> <label for="fname"><span> First Name:</span></label></div>
        <div class="col-75"><input type="text" v-model="user.firstName"></div>
      </div>

      <div class="row">
        <div class="col-25"><label for="lname"><span>Last Name:</span></label></div>
        <div class="col-75"> <input type="text" v-model="user.lastName"></div>
      </div>

      <div class="row">
        <div class="col-25">
          <label for="email"><span>Email:</span></label>
        </div>
        <div class="col-75">
          <input type="text" v-model="user.email">
        </div>
      </div>

      <div class="row">
        <div class="col-25"> <label for="contact"><span>Contact:</span></label></div>
        <div class="col-75"> <input type="number" v-model="user.contact"></div>
      </div>

      <div class="row">
        <div class="col-25"><label for="pass"><span>Password:</span></label></div>
        <div class="col-75"><input type="text" v-model="user.password"></div>
      </div>

      <div class="divB">
        <input type="submit" value="Submit">
      </div>

    </form>
    <h4>{{ j }}</h4>
  </div>

</template>

<script>
import Input from './Input.vue'
export default {
  components: { Input },
  name: 'Form',
  data () {
    return {
      show: true,
      msg: 'Register',
      user: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: '19eumt033@skcet.ac.in',
        contact: 9095305385,
        password: 'Password'
      },
      users: [],
      j: ''

    }
  },
  beforeCreate () {
    console.log(`the component is now before create--form`)
    console.log(this.msg)
  },
  created () {
    console.log(`the component is now created.---form`)
    console.log(this.msg)
  },
  beforeMount () {
    console.log(`the component is now before mount.---form`)
    console.log(this.msg)
  },
  mounted () {
    console.log(`the component is now mounted.---form`)
    console.log(this.msg)
  },
  methods: {
    async getData () {
      this.$http.get('http://localhost:8080/FormProject/list').then((response) => {
        this.users = response.data.result.Users
      })
      // try {
      //   const response = await this.$http.post(
      //     // eslint-disable-next-line quotes
      //     "http://localhost:8080/FormProject/list"
      //   )
      //   // JSON responses are automatically parsed.
      //   this.users = response.data.result.users
      // } catch (error) {
      //   console.log(error)
      // }
    },
    async postData () {
      const self = this
      this.$http.post('http://localhost:8080/FormProject/add', { user: this.user })
        .then(function (response) {
          console.log(response)
          var re = response.data.result.status
          console.log(re)
          self.j = re
        })
      // this.$http.post('http://localhost:8080/FormProject/add', { user: this.user })
      //   .then((response) => {
      //     console.log(response)
      //     var re = response.data.result.status
      //     console.log(re)
      //     this.j = re
      //   })
    },
    submit () {
      if (this.Validate()) {
        this.postData()
        if (this.show === true) {
          this.show = false
        }
      }
    },
    Validate () {
      // eslint-disable-next-line no-useless-escape
      var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      // eslint-disable-next-line no-unused-vars
      var phoneNumberRegex = /^[7-9][0-9]{9}$/
      // eslint-disable-next-line no-unused-vars, no-useless-escape
      var nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
      if (!emailRegex.test(this.user.email)) {
        alert('Enter Valid Email')
      } else if (!phoneNumberRegex.test(this.user.contact)) {
        alert('Enter Valid Contact Number')
        return false
      } else {
        return true
      }
    },
    toggle () {
      if (this.flag === true) {
        this.$router.push('/form/input')
        this.flag = !this.flag
      } else {
        this.flag = !this.flag
        this.$router.push('/form/hello')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Register{
 color:white;
 font-size:1em;
}
*{
  font-family: 'Crimson Text', serif;
  box-sizing: border-box;

}
.con {
    margin-top: 20px;
    border-radius: 10px;
    background-color: rgb(49, 45, 45);

    text-align: center;
}
form {
  color: rgb(252, 8, 41);
  overflow: auto;
  margin:0px 0px;
}
h1,h4{
  color: rgb(240, 8, 39);
}
label {
  margin-bottom: 20px;
  margin-top: 10px;

}
label>span{
  font-size: 1.7em;
}
input{
   border-radius: 12px;
   width: 60%;
   height: 40px;
   font-size:1.3em;
}
input[type=submit]{
  margin-top: 20px;
    background-color: rgb(224, 14, 60);
    color: white;
    font-size: 1.5em;
    width: 15%;
}
input[type=submit]:hover {
  background: #ddd;
    color: black;
}
span{
  font-size: 20px;
}
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.row{
  margin: 30px 30px;
}
.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}
@media screen and (max-width: 600px) {

  .col-25,
  .col-75,
  input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
.divB{
  padding-bottom: 15px;
}
</style>
