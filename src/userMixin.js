
const userMixin = {
    data: () => {
        return {
            user: {
                email: '',
                name: '',
                cpf: '',
                birthdata: '',
                phone: '',
                password: '',
                companyname: '',
                cnjp: '',
                creationdate: '',
                companyphone: '',
                person_type: ''
            }
        }
    },
    methods: {
      hello: function () {
        console.log('hello from mixin!!!!')
      }
    }
  }

export default userMixin;