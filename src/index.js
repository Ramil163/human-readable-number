module.exports = function toReadable(number) {
    let counter = number;
    // const word = "";
    const arrNumbers = [
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
    const arrDecades = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const arrHundreds = [
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
    ];

    if (number === 0) {
        return "zero";
    }

    if (number < 20) {
        return arrNumbers[counter];
    }

    if (number < 100 && (number + "")[1] === "0") {
        return arrDecades[(number + "")[0] - 2];
    }

    if (number < 100) {
        return (
            arrDecades[(number + "")[0] - 2] +
            " " +
            arrNumbers[(number + "")[1]]
        );
    }

    if ((number + "")[1] === "0" && (number + "")[2] === "0") {
        return arrHundreds[Number((number + "")[0]) - 1];
    }

    if ((number + "")[1] === "0" && (number + "")[2] !== "0") {
        return (
            arrHundreds[Number((number + "")[0]) - 1] +
            " " +
            arrNumbers[(number + "")[2]]
        );
    }
    if (
        (number + "")[0] !== "0" &&
        Number((number + "")[1] + (number + "")[2]) < 20
    ) {
        return (
            arrHundreds[Number((number + "")[0]) - 1] +
            " " +
            arrNumbers[Number((number + "")[1] + (number + "")[2])]
        );
    }

    if ((number + "")[1] !== "0" && (number + "")[2] === "0") {
        return (
            arrHundreds[Number((number + "")[0]) - 1] +
            " " +
            arrDecades[Number((number + "")[1]) - 2]
        );
    }

    return (
        arrHundreds[Number((number + "")[0]) - 1] +
        " " +
        arrDecades[Number((number + "")[1]) - 2] +
        " " +
        arrNumbers[(number + "")[2]]
    );

    // return number + "qw";
};
