function binarySearch(list, element) {
    var returnValue = -1;
    var start = 0;
    if (list.length == 0) {return -1;}
    if (list.length == 1) {
        if (list[0] = element) {return 0;}
        return -1;
    }
    var end = list.length -1;
    function recursiveSearch(start, end) {
        if (start > end) { 
            returnValue = -1;
            return }
        if (end == 0) return;    
        var mid = Math.floor((start + end)/2)
        if (list[mid] === element) {
            returnValue = mid;
            lookLeft(list,mid);
            return;}
        if (list[mid] > element) {
            recursiveSearch(start, mid - 1)
        }
        else {
            recursiveSearch(mid + 1, end)
        }
    }
    function lookLeft(lookArray, currentIndex) {
        if (currentIndex == 0) {return;}
        if (lookArray[currentIndex] == lookArray[currentIndex -1]) {
            returnValue = currentIndex-1;
            lookLeft(lookArray, currentIndex-1);
        }
        else {return;}
    }
    var functionReturn = recursiveSearch(start, end)
    return returnValue;
}
