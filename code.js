function binarySearch(list, element,) {
    var returnValue = -1;
    var start = 0;
    if (list.length == 0) {return -1;}
    var end = list.length -1;
    function recursiveSearch(start, end) {
        if (start > end) { 
            returnValue = -1;
            return }
        var mid = Math.floor((start + end)/2)
        if (list[mid] === element) {
            returnValue = mid;
            return;}
        if (list[mid] > element) {
            recursiveSearch(start, mid - 1)
        }
        else {
            recursiveSearch(mid + 1, end)
        }
    }
    var functionReturn = recursiveSearch(start, end)
    return returnValue;
}
