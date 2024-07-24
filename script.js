let number = prompt("enter a number between 0 and 1 million")

let output,sum=0;
 
if(number <=10){
    for (let i = 1; i <= number; i++) {
        sum += i;
        output=("Sum of numbers up to ",number," is" ,sum);
    }   
}
else{
    output="Invalid number"
}

document.write(output)
console.log(output)