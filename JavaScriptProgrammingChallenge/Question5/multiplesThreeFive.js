function multiplesThreeFive(){
    var num = prompt("Enter a Number");
    var arr = [];
    for(var i=1;i<=num;i++){
        if(i%3==0){
            arr[i-1]="Fizz";
        }
        else if(i%5==0){
            arr[i-1]="Buzz";
        }
        else{
            arr[i-1]=i;
        }
    }
    var array = arr.toString();
    document.getElementById("1").innerHTML = array;
}