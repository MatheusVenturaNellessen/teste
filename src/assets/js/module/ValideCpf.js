export default class ValideCpf {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfOnlyNumbers', {
            enumerable: false,
            configyrable: false,

            get: function() {
                return cpf.replace( /\D+/g, '');
            }
        });
    }

    static generateDigit(cpfWithoutDigits) {
        const array = Array.from(cpfWithoutDigits);
        let multiplier = array.length + 1;
        const number = array.reduce(function(adder, value) {
            adder += Number(value) * multiplier;
            multiplier--;
            return adder;
        }, 0)

        const digit = 11 - (number % 11);

        return digit > 9 ? '0' : String(digit);
    }

    generateCpf() {
        const cpfWithoutDigits = this.cpfOnlyNumbers.slice(0, -2);

        const firstDigit = ValideCpf.generateDigit(cpfWithoutDigits);

        const secondDigit = ValideCpf.generateDigit(cpfWithoutDigits + firstDigit);

        return cpfWithoutDigits + firstDigit + secondDigit;
    }

    isSequence() {
        return this.cpfOnlyNumbers[0].repeat(this.cpfOnlyNumbers.length) === this.cpfOnlyNumbers;
    }

    valide() {
        if(!this.cpfOnlyNumbers) return false;
        if(this.isSequence()) return false;
        if(this.cpfOnlyNumbers.length !== 11) return false;
        if(typeof this.cpfOnlyNumbers !== 'string') return false;

        const comparatorCpf = this.generateCpf()
        if(comparatorCpf === this.cpfOnlyNumbers) {
            return true;
        } else {
            return false;
        }
    }
}
