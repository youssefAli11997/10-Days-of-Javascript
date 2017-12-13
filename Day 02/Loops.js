problem link : https://www.hackerrank.com/challenges/js10-loops/problem
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowels = [], constants = [];
    for(var i=0; i<s.length; i++){
        if(isVowel(s[i])){
            vowels.push(s[i]);
        }
        else{
            constants.push(s[i]);
        }
    }
    
    printFormatted(vowels);
    printFormatted(constants);
    
}

function printFormatted(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

function isVowel(x){
    x = x.toLowerCase();
    return x == 'a' || 
           x == 'i' || 
           x == 'e' || 
           x == 'o' ||
           x == 'u' ;
}
