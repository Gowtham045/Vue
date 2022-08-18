<template>
  <div >
     {{msg}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello'
    }
  },
  beforeCreate () {
    console.log(`the component is now before create--hello`)
    console.log(this.msg)
  },
  created () {
    console.log(`the component is now created.---hello`)
    console.log(this.msg)
  },
  beforeMount () {
    console.log(`the component is now before mount.---hello`)
    console.log(this.msg)
  },
  mounted () {
    console.log(`the component is now mounted.---hello`)
    console.log(this.msg)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
