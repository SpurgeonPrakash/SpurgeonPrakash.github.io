function repeating(){
    var num = prompt("Enter Array Length");
    var arr = [];
    var arr1 =[];
    var inc=0;
    
  
    
    for(var i=0;i<num;i++){
        arr[i]=prompt("Enter the array Element:"+i);
    }
    for(var i=0;i<arr.length;i++){
        for(var j=(i+1);j<arr.length;j++){

           
            if(Number(arr[i])==Number(arr[j])){
                arr1[inc]=arr[i];
                inc++; 
            }
           
        }
    }
    var str = arr1.toString();
    document.getElementById("1").innerHTML = "repeted elements within the array:"+str;
}