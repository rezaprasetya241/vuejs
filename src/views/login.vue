<template>
  <div class="formPage justify-center align-center">
    <v-row>
      <v-col cols="6" class="pa-0">
        <img src="../assets/formLogin.png" class="logo-img" />
      </v-col>
      <v-col class="login-form" cols="6">
        <div>
          <h1>UKM UAD</h1>
          <p>Pendidikan dan Peraturan adalah berpikir secara logis</p>
          <v-form ref="form" lazy-validation class="form">
            <p>Email Adress:</p>
            <v-text-field
              label="Name"
              placeholder="Dense & Rounded"
              filled
              :error-messages="nameErrors"
              v-model="$v.login.name.$model"
              rounded
              dense
            ></v-text-field>
            <!-- <v-text-field
              v-model="$v.login.name.$model"
              label="Name"
              :error-messages="nameErrors"
            ></v-text-field> -->

            <p>Password:</p>

            <v-text-field
              label="E-mail"
              placeholder="Email Address..."
              filled
              :error-messages="emailErrors"
              v-model="login.email"
              @blur="$v.login.email.$touch"
              rounded
              dense
            ></v-text-field>
            <!-- <v-text-field
              v-model="login.email"
              label="E-mail"
              :error-messages="emailErrors"
              @blur="$v.login.email.$touch"
            ></v-text-field> -->

            <!-- <v-checkbox
                v-model="checkbox"
                :rules="[(v) => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
            ></v-checkbox> -->

            <v-btn color="success" class="mr-4" @click="handleSubmit">
              Validate
            </v-btn>

            <!-- <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn> -->

            <!-- <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn> -->
          </v-form>
        </div>
      </v-col>
    </v-row>
    <div>
      <!-- <p>Name: {{ dataLogin.name }}</p>
      <p>Email: {{ dataLogin.email }}</p> -->
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'loginView',
  data() {
    return {
      valid: true,
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      login: {
        name: '',
        email: '',
      },
    }
  },
  validations() {
    const login = {
      name: { required, minLength: minLength(10) },
      email: { required, email },
    }
    return {
      login,
    }
  },
  computed: {
    dataLogin() {
      return this.$store.state.moduleLogin.dataLogin
    },

    nameErrors() {
      const errors = []
      if (!this.$v.login.name.$dirty) return errors
      !this.$v.login.name.required && errors.push('Name is required.')
      !this.$v.login.name.minLength &&
        errors.push('Name must be at least 10 characters long')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.login.email.$dirty) return errors
      !this.$v.login.email.required && errors.push('Email is required.')
      !this.$v.login.email.email && errors.push('Email is not valids')
      return errors
    },
  },
  methods: {
    handleSubmit() {
      this.$v.login.$touch()
      //   this.$refs.form.validate()
      if (this.$v.login.$invalid) return
      console.log(this.login)
      this.$store.dispatch('moduleLogin/loginName', this.login)
    },
  },
}
</script>
<style scoped>
.formPage {
  padding: 0 !important;
  margin: 0 !important;
  /* display: flex; */
  background: #fcfaf7;
}
.logo-img {
  width: 100%;
  height: 100%;
}
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  background: white !important;
  padding: 12px;
  border-radius: 12px;
}
.form input {
  background: tan !important;
}
</style>
