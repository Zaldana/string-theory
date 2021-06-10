//Original statement

const str = 'hello world! what a nice Wednesday morning.';

//problem name

console.log("xify");

//function

function xify(str) {

    let outputStr = '';

    for (const ch of str) {


        if (ch !== "x") {

            outputStr += "x";
        } 

    }

    return outputStr;

}
//function log
console.log(xify(str));
console.log();

//problem name
console.log("yellingChars");

//function

function yellingChars(str) {

    //output
    let outputStr = '';
    
    //for loop
    for (const ch of str) {
        //if the character doesnt include a !
        if (ch !== "!") {
        //output
        outputStr += ch + "!";
        
        }

    }

    return outputStr;

}

//function log
console.log(yellingChars(str));
console.log();

//problem name
console.log("indexedChars");

//function

function indexedChars(str) {

    //output
    let outputStr = '';
    
    //for loop
    for (i = 0; i < str.length; i++) {

        //output
        outputStr += i + str[i];
        
    }

    return outputStr;

}

//function log
console.log(indexedChars(str));
console.log();

//problem name
console.log("numberedChars");

//function

function numberedChars(str) {

    //output
    let outputStr = '';
    
    //for loop
    for (i = 0; i < str.length; i++) {

        //output
        outputStr += '(' + (i + 1) + ')' + str[i];
        
    }

    return outputStr;

}

//function log
console.log(numberedChars(str));
console.log();

//problem name
console.log('exclaim');

//function
function exclaim(str) {

    let outputStr = "";

    //for loop
    for (const ch of str) {

        //if statement
        if (ch === "?" || ch === ".") {

            outputStr += "!"

        } else {

            outputStr += ch;

        }
    }

    return outputStr;

}

//log
console.log(exclaim(str));
console.log();

//problem name
console.log("repeatIt");

//function

function repeatIt(str, n) {

    //output
    let outputStr = '';

    //for loop
    for (i = 0; i < n; i++) {
    
        //output
        outputStr += str;
        
    }

    return outputStr;

}

//function log
console.log(repeatIt(str, 5));
console.log();

///problem name
console.log("truncate");

//function
function truncate(str) {

    //output
    let outputStr = '';

    //for loop
    if (str.length >= 15) {
    
        for (i = 0; i < 15; i++) {
        
            outputStr += str[i];
        
        }
    } if (str.length <= 15) {

        for (i = 0; i < str.length; i++) {

            outputStr += str[i]
        }
    }

    if (outputStr.length >= 15) {

        outputStr += "..."
    }
    return outputStr;

}

//function log
console.log(truncate(str));
console.log();

//problem name
console.log("ciEmailify");

//Email example
const string = 'Colin Jaffe';

//function

function ciEmailify(string) {

    let outputString = '';

    const lCstring = string.toLowerCase();

    for (const ch of lCstring) {

        if (ch !== ' ') {
   
            outputString += ch;
   
        } if (ch === ' ') {

            outputString += '.';
   
    }

}
    return outputString + "@codeimmersives.com";
}

console.log(ciEmailify(string));
console.log();

//Problem name
console.log("reverse");

function reverse(string) {

    //output
    let outputStr = '';
    
    //for loop
    for (i = string.length - 1; i >= 0; i--) {

        //output
        outputStr += string[i];
        
    }

    return outputStr;

}

console.log(reverse(string));
console.log();

 //Problem name
console.log("onlyVowels");

//function
function onlyVowels(str) {

    let outputString = '';

     for (const ch of str) {

         if (ch === "a" ||
             ch === "e" ||
             ch === "i" ||
             ch === "o" ||
             ch === "u") {
   
             outputString += ch;

        }
    }
     
    return outputString

}

console.log(onlyVowels(str));
console.log();

//Problem name
console.log("crazyCase");

//function
function crazyCase(str) {

    let outputString = '';

    const lCstr = str.toLowerCase();

    const uCstr = str.toUpperCase();

    for (i = 0; i < lCstr.length; i++) {

        if (str[i] % 2 === 1) {
   
            outputString += uCstr[i];

        }
    }

    return outputString;

}

console.log(crazyCase(str));
console.log();

// //Problem name
// console.log("titleCase");

// //function
// function titleCase(str) {

//     let outputString = '';

//     const lCstr = str.toLowerCase();

//     for (i = 0; i < str.length; i++) {
   
//             outputString += ch;
   
//     }

//     return outputString;
// }

// console.log(titleCase(str));
// console.log();

// //Problem name
// console.log("camelCase");
// console.log();
// //Problem name
// console.log("crazyCase2ReturnOfCrazyCase`");
// console.log();
