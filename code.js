function binarySearch(list, element) {
    var tmp = -1;
    var mid = Math.floor((list.length)/2);
    if (list.length==1) {
        if (list[0] == element) {tmp = 0;}}
    else if (element < list[mid]) {
        binarySearch(list.slice(0,mid), element); }
    else if (element > list[mid]) {
        binarySearch(list.slice(mid,list.length), element); }
    else if (element == list[mid]) {
        var tmp = mid;
       /* for (var i = mid -1; i >= 0; i--) {
            if (element == list[i]) {
                tmp = i;
            }
        }*/
    }
    // else {return;}
    return tmp;
}



var arrSearch2 = [0,1,1,2,3,4,5,5,5,5,5,6,7,8,9,10];
var arrSearch = [3, 3, 3, 3, 3, 3, 3, 3,3 ,3 , 3,3, 3, 3, 3, 3];
var arrSearch3= [0];
var isIn = 20;
var isIn2 = 20;
var isNot = 100;

console.log(binarySearch(arrSearch2, 0))
console.log(binarySearch(arrSearch2, 1))
console.log(binarySearch(arrSearch2, 9))
