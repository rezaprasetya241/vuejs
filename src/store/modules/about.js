const About = {
  namespaced: true,
  state: () => ({
    warding: 'hello world',
    show: false,
  }),
  mutations: {
    setWarding(state, payload) {
      state.show = !payload
    },
  },
  actions: {
    wardingFooter(context, payload) {
      context.commit('setWarding', payload)
    },
  },
}

export default About
