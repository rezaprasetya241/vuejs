const Login = {
  namespaced: true,
  // state: () => ({
  //   warding: 'hello world',
  //   show: false,
  // }),
  // mutations: {
  //   setWarding(state, payload) {
  //     state.show = !payload

  // },
  // actions: {
  //   wardingFooter(context, payload) {
  //     context.commit('setWarding', payload)
  //   },
  // },
  state: () => ({
    dataLogin: {
      name: '',
      email: '',
    },
  }),
  mutations: {
    setDataLogin(state, payload) {
      state.dataLogin = payload
    },
  },
  actions: {
    loginName(context, payload) {
      context.commit('setDataLogin', payload)
    },
  },
}

export default Login
