function sum(){
    var num = prompt("Enter Array Length");
    var arr = [];
    var c=8;
    for(var i=0;i<num;i++){
        arr[i]=prompt("Enter the array Element:"+i);
    }
    for(var i=0;i<arr.length;i++){
        for(var j=(i+1);j<arr.length;j++){
           
            if(Number(arr[i])+Number(arr[j])==8){
                document.getElementById("1").innerHTML += "<br/>"+"("+arr[i]+","+arr[j]+")";
            }
        }
    }
   
}