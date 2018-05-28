function closestPower(){
    var num = parseInt(document.getElementById("num").value);
    var sum=0;
    var count=Number(0);
    var power=1;
    //alert(sum);
    while(power<=num){
        power*=2;
        count++;
    }
    alert(count);
    sum=parseInt(parseInt(count)-1);
    //alert("Sum of Numbers Divisible by 3 & 5are"+sum);
    document.getElementById("output").innerHTML=sum;
}