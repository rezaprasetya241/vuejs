<template>
  <div>
    <h1>Form</h1>
    <h1>{{ form.email }}</h1>
    <input v-model="form.email" placeholder="email" type="email" />
    <button @click="submit">Submit</button>
  </div>
</template>
<script>
export default {
  name: 'formView',
  data() {
    return {
      form: {
        email: '',
      },
    }
  },
  methods: {
    submit() {
      console.log(this.form)
    },
  },
}
</script>
