function sumOfDivisibles(){
    var num = parseInt(document.getElementById("num").value);
    var sum=0;
    var count=0;
    //alert(sum);
    for(var i=1;i<=num;i++){
        if(i%3==0 || i%5==0){
            count++;
        }
        else {
            count = 0;
        }

        if(count>0){
            sum=sum+i;
        }
    }
    //alert("Sum of Numbers Divisible by 3 & 5are"+sum);
    document.getElementById("output").innerHTML=sum;
}