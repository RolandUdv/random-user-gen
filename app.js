// Get country flag from iso2 and convert to emoji
const iso2FlagEmoji = iso => String.fromCodePoint(...[...iso.toUpperCase()].map(char => char.charCodeAt(0) + 127397)); // https://gist.github.com/sandgraham/1ee713da09f7e0d10548cf9ad8c399cb

const app = Vue.createApp({
  data() {
    return {
      title: 'Mr',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      dob: '1 January 1990',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
      nationality: 'HU 🇭🇺'
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()

      // console.log(results)
      
      this.title = results[0].name.title
      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.email = results[0].email
      this.dob = moment(results[0].dob.date).format('D MMMM YYYY')
      this.gender = results[0].gender
      this.picture = results[0].picture.large
      this.nationality = `${results[0].nat} ${iso2FlagEmoji(results[0].nat)}`
    },
  },
})

app.mount('#app')
