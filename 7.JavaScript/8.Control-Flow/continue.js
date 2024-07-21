// The continue statement skips the current iteration of the loop and proceeds to the next iteration.
// Ex1:
for(let i=1; i<=10; i++){
    if(i > 4 && i < 9){
        continue; //skip iterations between 4 and 9 
    }
    console.log(i)
}

// Ex2:
let num=1
while(num<=10){
    if(num%2==0){
        ++num
        continue;
    }
    console.log(num)
    ++num
}