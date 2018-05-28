function sumNatural(){
    var num = parseInt(document.getElementById("num").value);
    var sum=0;
    
    for(var i=1;i<=num;i++){
        sum=sum + i;
       
    }
    //alert(sum);
    document.getElementById("output").innerHTML=sum;
}