// 2) Write a javascript function find_largest to return the nth largest number

// in an array-
// eg- given an array of integers- [3,45,6,7,23,5,7,8]

// find_largest(3) will return third largest number from the above array -
// which is 8.

let arr = [3,45,6,7,23,5,7,8];
let highest = 3;

function find_largest(arr, highest){

            let x = 0, 
                y = 0,
				z = 0,
				temp = 0,
				tnum = arr.length, 
				flag = false, 
				result = false; 
   
			while(x < tnum){
				y = x + 1; 
				
				if(y < tnum){
					for(z = y; z < tnum; z++){
						
						if(arr[x] < arr[z]){
							temp = arr[z];
							arr[z] = arr[x];
							arr[x] = temp;
							flag = true; 
						}else{
							continue;
						}	
					}					
				}
				
				if(flag){
					flag = false;
				}else{
					x++; 
					if(x === highest){ 
						result = true;
					}	
				}
				if(result){
					break;
				}
			}
			return (arr[(highest - 1)]);	
}

console.log(find_largest(arr, highest));