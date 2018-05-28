function factorial(){
    var num= parseInt(document.getElementById("num").value);
    var factValue=1;
    for(var i=1;i<=num;i++){
        factValue = factValue*i;
    }
    document.getElementById("output").innerHTML=factValue;
}