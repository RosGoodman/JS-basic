/**Класс описывающий число в виде кол-ва единиц, десятков и сотен.* */
class ObjectNumber {
    units = 0;
    tens = 0;
    hundreds = 0;

    /**
     * @param {number} newUnits, количество единиц в числе.
     * @param {number} newTens, количество десяток в числе.
     * @param {number} newHundreds, количество сотен в числе.
     * */
    constructor(newUnits, newTens, newHundreds) {
        this.units = newUnits;
        this.tens = newTens;
        this.hundreds = newHundreds;
    }
}