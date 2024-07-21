// JS Function To Generate Multiplication Table
function tableGenerate(num , range){
    for(let i=1;i<=range;i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}

tableGenerate(10,10)