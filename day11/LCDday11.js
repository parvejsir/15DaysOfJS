//leetcode:2634
var filter = function(arr, fn) {
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

//leetcode:2626
var reduce = function(nums, fn, init) {
    let value = init;
    for(let i=0;i<nums.length;i++){
        value = fn(val,nums[i]);
    }
    return value;
};