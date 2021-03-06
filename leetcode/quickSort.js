var quickSort = (items, left, right) => { 

    var pivotIndex; 
    
    if(items.length > 1) { 
        pivotIndex = partition(items, leftIndex, rightIndex);
        if (left < pivotIndex) { 
            quickSort(items, leftIndex, pivotIndex - 1)
        }

        if (right < pivotIndex) { 
            quickSort(items, pivotIndex, right)
        }
        
    }
    return items; 
}
var partition = (items, left, right) => { 
    var pivot = items[Math.floor(right + left )/ 2];
    var l = left;
    var r = right; 

    while (l <= r) { 
        while (items[l] < pivot) { 
            l++;
        }
        while (items[r] > pivot) {
            r--;
        }

        if (l <= r) {
            swap(items, l, r); 
            l++;
            r--;
        }
    }
    return l;
}
