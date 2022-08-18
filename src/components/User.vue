<template>
  <div class="hello">
      <div class="row">
        <div class="col-25"> <label for="fname"><span> First Name:</span></label></div>
        <div class="col-75">{{ user.fullName }}</div>
      </div>
      <div class="row">
        <div class="col-25"> <label for="fname"><span> First Name:</span></label></div>
        <div class="col-75">{{ user.firstName }}</div>
      </div>

      <div class="row">
        <div class="col-25"><label for="lname"><span>Last Name:</span></label></div>
        <div class="col-75"> {{ user.lastName}}</div>
      </div>

      <div class="row">
        <div class="col-25">
          <label for="email"><span>Email:</span></label>
        </div>
        <div class="col-75">
          {{user.email}}
        </div>
      </div>

      <div class="row">
        <div class="col-25"> <label for="contact"><span>Contact:</span></label></div>
        <div class="col-75"> {{user.contact}}</div>
      </div>

    </div>

</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      msg: 'User',
      user: {}
    }
  },
  beforeCreate () {
    console.log(`the component is now before create--user`)
    console.log(this.msg)
  },
  created () {
    this.getUser()
    console.log(`the component is now created.---user`)
    console.log(this.msg)
  },
  beforeMount () {
    console.log(`the component is now before mount.---user`)
    console.log(this.msg)
  },
  mounted () {
    console.log(`the component is now mounted.---user`)
    console.log(this.msg)
  },
  methods: {
    async getUser () {
      this.$http.get('http://localhost:8080/FormProject/get' + '?id=' + this.$route.params.userId).then((response) => {
        this.user = response.data.result.User
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  border-radius: 5px;
background-color: rgb(49, 45, 45);

}
.row {
  margin: 30px 30px;

}

.col-25 {
  padding: 20px;
  float: left;
  margin-left: 200px;
  width: 30%;
  margin-top: 6px;
  text-align: right;
}

.col-75 {
  padding: 20px;
  font-size: 1.7em;
  color: rgb(243, 236, 237);
  float: left;
  width: 30%;
  margin-top: 6px;

}
label>span {
  font-size: 1.7em;
  color: rgb(252, 8, 41);
}
@media screen and (max-width: 600px) {

  .col-25,
  .col-75,
  input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
.console-container {

  font-family: Khula;
  font-size: 4em;
  text-align: center;
  color: white;
  margin: auto;
}

.console-underscore {
  display: inline-block;
  position: relative;
  top: -0.14em;
  left: 10px;
}
@import url(https://fonts.googleapis.com/css?family=Khula:700)
</style>
