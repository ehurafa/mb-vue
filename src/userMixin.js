const userMixin = {
    data: () => {
        return {
            message: '',
        }
    },
    methods: {
        showErrorMessage(message) {
            console.log('message ', message);
            this.$emit('message', message);
        },
        showSnackbar(message) {
            this.message = message;
            this.show_snackbar = true;
        },
        hideSnackbar() {
            this.message = '';
            this.show_snackbar = false;
        }
    }
}

export default userMixin;