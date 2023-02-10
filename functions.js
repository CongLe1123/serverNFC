function decrypt(inStr) {

    const dict = {
        "N" : "A",
        "O" : "B",
        "P" : "C",
        "Q" : "D",
        "R" : "E",
        "S" : "F",
        "T" : "G",
        "U" : "H",
        "V" : "I",
        "W" : "J",
        "X" : "K",
        "Y" : "L",
        "Z" : "M",
        "A" : "N",
        "B" : "O",
        "C" : "P",
        "D" : "Q",
        "E" : "R",
        "F" : "S",
        "G" : "T",
        "H" : "U",
        "I" : "V",
        "J" : "W",
        "K" : "X",
        "L" : "Y",
        "M" : "Z",
        " " : " ",
        "-" : "-",
        "_" : "_",
        "." : ".",
        "&" : "&",
        "?" : "?",
        "!" : "!",
        "@" : "@",
        "#" : "#",
        "/" : "/",
        "1" : "1",
        "2" : "2",
        "3" : "3",
        "4" : "4",
        "5" : "5",
        "6" : "6",
        "7" : "7",
        "8" : "8",
        "9" : "9",
        "0" : "0",
    };

    resultStr = '';
    for (char of inStr) {
        resultStr += dict[char]
    }
    
    return resultStr;

};

module.exports = {decrypt};