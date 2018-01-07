//link: https://www.hackerrank.com/challenges/js10-bitwise/problem
/*
*	Return the largest value of any a & b < k in S (where a < b).
* 	
*	n: Set S is a sequence of distinct integers from 1 to n (i.e., {1, 2, ..., n}).
*	k: An integer.
*/
function getMaxLessThanK(n, k) {
    var mx = -1;
    for(var i=1; i<=n; i++){
        for(var j=i+1; j<=n; j++){
            var res = i & j;
            if(res > mx && res < k){
                mx = res;
            }
        }
    }
    return mx;
}
