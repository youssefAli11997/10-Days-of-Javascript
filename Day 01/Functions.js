link : https://www.hackerrank.com/challenges/js10-function/problem
/*
 * Create the function factorial here
 */
function factorial(n){
    if(n == 0)
        return 1;
    return n * factorial(n-1);
}
