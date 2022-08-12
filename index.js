const input1 = 3;
const input2 = 4;

function primeNumber(n){
    for(i=2;i<n;i++){
        
        if(n%i===0){
            return('no');
        }
        else{ return('yes');}
    }
}
console.log(primeNumber(input1));
console.log(primeNumber(input2)); 


