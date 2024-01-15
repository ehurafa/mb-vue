
const userMixin = {
    methods: {
        showErrorMessage(message) {
            console.log('message ', message);
            this.$emit('message', message);
        }
    },
}

export default userMixin;