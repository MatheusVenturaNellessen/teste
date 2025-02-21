import ValideCpf from './ValideCpf'

export default class GenerateCpf {
    rand(min = 100000000, max = 999999999) {
        return String(Math.round(Math.random() * (max - min) + min));
    }

    generateNewCpf() {
        const cpfWithoutDigits = this.rand();

        const firstDigit = ValideCpf.generateDigit(cpfWithoutDigits);
        const secondDigit = ValideCpf.generateDigit(cpfWithoutDigits + firstDigit);

        const newCpf =  cpfWithoutDigits + firstDigit + secondDigit;
        return newCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
}
