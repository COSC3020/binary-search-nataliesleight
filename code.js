function binarySearch(list, element) {
    var tmp = -1;
    var mid = Math.floor((list.length)/2);
    if (list.length==1) { if (list[0] == element) {tmp = 0;}}
    else if (element < list[mid]) { return binarySearch(list.slice(0,mid), element); }
    else if (element > list[mid]) { return mid + binarySearch(list.slice(mid+1,list.length), element); }
    else if (element == list[mid]) {
        tmp = mid;
        for (var i = mid -1; i >= 0; i--) { if (element == list[i]) { tmp = i; } }
    }
    return tmp;
}
