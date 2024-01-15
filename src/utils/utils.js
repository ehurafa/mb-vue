import MESSAGES from "./messages";

const UTILS = {
    validateEmail: (email) => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return true;
        } else {
            return false;
        }
    },
    validateCPF: (cpf) => {
        var cpfRegex = /^(?:(\d{3}).(\d{3}).(\d{3})-(\d{2}))$/;
        if (!cpfRegex.test(cpf)) {
            return false;
        }

        var numeros = cpf.match(/\d/g).map(Number);
        var soma = numeros.reduce((acc, cur, idx) => {
            if (idx < 9) {
            return acc + cur * (10 - idx);
            }
            return acc;
        }, 0);

        var resto = (soma * 10) % 11;

        if (resto === 10 || resto === 11) {
            resto = 0;
        }

        if (resto !== numeros[9]) {
            return false;
        }

        soma = numeros.reduce((acc, cur, idx) => {
            if (idx < 10) {
            return acc + cur * (11 - idx);
            }
            return acc;
        }, 0);

        resto = (soma * 10) % 11;

        if (resto === 10 || resto === 11) {
            resto = 0;
        }

        if (resto !== numeros[10]) {
            return false;
        }

        return true;
    },
    validateCNPJ: (cnpj) => {
        var b = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ]
        var c = String(cnpj).replace(/[^\d]/g, '')
        
        if(c.length !== 14)
            return false
    
        if(/0{14}/.test(c))
            return false
    
        for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
        if(c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
            return false
    
        for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
        if(c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
            return false
    
        return true
    },
    phoneMask: (value) => {
        console.log('phoneMask')
        if (!value) return ""
        value = value.replace(/\D/g,'')
        value = value.replace(/(\d{2})(\d)/,"($1) $2")
        value = value.replace(/(\d)(\d{4})$/,"$1-$2")
        return value
    }
}

export default UTILS;