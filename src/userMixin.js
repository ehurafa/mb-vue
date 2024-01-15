
const userMixin = {
    data() {
        return {
            user: {
                email: '',
                name: '',
                cpf: '',
                birthdate: '',
                phone: '',
                password: '',
                companyname: '',
                cnjp: '',
                creationdate: '',
                companyphone: '',
                user_type: ''
            },
            rules: {
                email: {
                    valid: null
                },
                user_type: {
                    valid: null
                },
                name: {
                    valid: null
                },
                cpf: {
                    valid: null
                },
                birthdate: {
                    valid: null
                },
                phone: {
                    valid: null
                }
            },
            valid_routes: {
                welcome: true,
                physical_person: false,
                legal_person: false,
                password: false,
                review_information: false
            }
        }
    },
    methods: {
        showErrorMessage(message) {
            console.log('message ', message);
            this.$emit('message', message);
        }
    } 
}

export default userMixin;