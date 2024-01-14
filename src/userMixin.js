
const userMixin = {
    data() {
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
                user_type: ''
            },
            rules: {
                email: {
                    valid: false
                },
                user_type: {
                    valid: false
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