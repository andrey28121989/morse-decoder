const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let codeArray = [];
    let string = '';

    for (let i =  0; i < expr.length; i += 10) {
        let string = expr.slice(i, (i + 10));
          if (string == '**********') {
            string = ' ';
          }
          codeArray.push(string);
      }

    let result = [];

    for (let i = 0; i < codeArray.length; i++) {
        let word = '';
        if (codeArray[i] == ' ') {
          result.push(codeArray[i]);
        }

        else {
            for (let j = 0; j < codeArray[i].length - 1; j += 2) {
              string = codeArray[i].substr(j, 2);
                if (string == '11') {
                  string = '-';
                }
               else if (string == '10') {
                   string = '.';
                }
               else {
                 string = '';
                }
             word +=string;
            }
          result.push(MORSE_TABLE[word]);
        }
      }
      return result.join('');
}

module.exports = {
    decode
}