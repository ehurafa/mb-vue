import MESSAGES from "./messages";

const UTILS = {
    validateEmail: (email) => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return true;
        } else {
            return false;
        }
    }
}

export default UTILS;