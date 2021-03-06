/* 

problem: given an array nums containing n + 1 integers where each int is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one 

you must not modify the array 
use only constant space 
runtime < O(n^2)

strategies: 
1. Binary Search 
    for each selected number (mid), count all the numbers equal to or less than mid 
        if count >  number, search space will be [1, mid]
        else [mid + 1, n]
    includes pigeon hole principle 
2. Linked list cycle detection method 
    substract 1 from each element in the array
    choose the last element as the head of linked list 
    example: 
        index: 0 1 2 3 4 5 
        value: 2 5 1 1 4 3 
        -- substract 1 from values 
        index: 0 1 2 3 4 5
        value: 1 4 0 0 3 2

        5 -> 2 -> 0 <- 3 
                  |    | cycle here 
                  ˇ    |
                  4 -> 3 
*/

var findDuplicateBinarySearch = function(nums) { 
    var low = 1; 
    var high = nums.length - 1; 

    while (low < high) { 
        var mid = Math.floor((low + high) / 2);
        var count = 0;
        for (var i = 0; i < nums.length; i++) { 
            if (nums[i] <= mid) { 
                count++
            }
            
        }
        if (count <= mid) {
            low = mid + 1;
        } else {
            high = mid;
        }
        
    }
    return low;
}
var findDuplicateLinkedListCycle = function(nums) {
    var n = nums.length; 
    var slow = n; 
    var fast = n; 
    do { 
        slow = nums[slow - 1];
        fast = nums[nums[fast - 1] - 1];   
    } while (slow !== fast)
    slow = n; 
    while (slow !== fast) { 

        slow = nums[slow - 1];
        fast = nums[fast - 1];
    }
    
    return slow;
    // if ( n > 1) { 

    //     var slow = nums[0];
    //     var fast = nums[nums[0]];
    //     while (slow !== fast) { 
    //         slow = nums[slow];
    //         fast = nums[nums[fast]];
    //          console.log('slow: ', slow);
    //          console.log('fast: ', fast);
    //     }
    //     console.log('-------');
    //     console.log('slow: ', slow);
    //     console.log('fast: ', fast);

    //     fast = 0; 
    //     while (fast !== slow) { 
    //         fast = nums[fast];
    //         slow = nums[slow];
    //     }
    //     return slow
    // }
}

var test = [2, 5, 1, 1, 4, 3]
console.log("hello");
console.log(findDuplicateBinarySearch(test));