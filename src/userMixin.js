const userMixin = {
    data: () => {
        return {
            message: '',
        }
    },
    methods: {
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