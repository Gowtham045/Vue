<template>
  <div>
    <input v-model="message">
    {{message}}
  </div>

</template>

<script>
export default {
  name: 'input',
  data () {
    return {
      message: 'Input Component'
    }
  },
  beforeCreate () {
    console.log(`the component is now before create`)
    console.log(this.msgChild)
  },
  created () {
    console.log(`the component is now created.`)
    console.log(this.msgChild)
  },
  beforeMount () {
    console.log(`the component is now before mount.`)
    console.log(this.msgChild)
  },
  mounted () {
    console.log(`the component is now mounted.`)
    console.log(this.msgChild)
  },
  methods: {
    msgChange (event) {
      this.message = event.target.value
      this.$emit('msgChildChangedInChild', this.message)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
