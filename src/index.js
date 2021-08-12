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
        "thirti",
        "fourty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const word = arr[number];
    if (100 > number >= 20) {
        let decades = Math.floor(number / 10);
        let word2 = arrDozens[decades];
        return word2 + word;
    }
    return word;
};
