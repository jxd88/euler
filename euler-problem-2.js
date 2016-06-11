var x;
var y = 0;
var i = 2;
var fib = [];
fib[0] = 1;
fib[1] = 2;
do {
    fib[i] = fib[i-2] + fib[i-1];
    i++;
}
while(fib[i-1]<4000000);
console.log(i-1);

for(x=0;x<=i-2;x++)
{
    if(fib[x]%2===0)
    {
    y+=fib[x];    
    }
    else{}
}
console.log(y);
