//link: https://www.hackerrank.com/challenges/js10-objects/problem
/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
}
//method 2
function Rectangle(a, b) {
    const rec={
        length:a,
        width:b,
        perimeter:2*(a+b),
        area:a*b
    }
    return rec 
}
