// leetcode 2629

var compose = function(functions) {
    
    return function(x) {
        let  outerFunc= x;
        for(let i=functions.length-1; i>=0;i--){
            let innerFunc = functions[i];
            outerFunc = innerFunc(outerFunc); //function compose        
        }
        return outerFunc;
    }
};


// leetcode 2666
var once = function(fn) {
    let calledTimes = 0;
    return function(...args){
        if(calledTimes== 0){
            calledTimes = 1;
            return fn(...args);
        }else{
            return undefined;
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */