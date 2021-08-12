module.exports = function toReadable(number) {
    const arr = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const arrDozens = [
        "twenty",
        "thirty",
        "fourty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number < 20) {
        const word = arr[number];
    }
    if (100 > number >= 20) {
        let decades = Math.floor(number / 10);
        let word2 = arrDozens[decades];
        let word = arr[number];
        const word = word2 + word;
    }
    return word;
};
