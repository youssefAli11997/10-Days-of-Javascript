//link: https://www.hackerrank.com/challenges/js10-count-objects/problem
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    return objects.filter(function(o){
        return o.x == o.y;
    }).length;
}
//method 2
let c=0;
objects.forEach(function(i) {
if(i.x==i.y)
    c++;
})
    return c
}
