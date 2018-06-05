function palindrome(){
    var str=document.getElementById("stri").value;

    var i,c=1,j=str.length;
    j--;    
    for(i=0;i<=j;i++,j--)
    {
        if(str.charAt(i)!=str.charAt(j))
           { c=0;
            break;
           }
    }
    if(c==1)
    {
        document.getElementById("res").innerHTML="yes";
    }
    else
        document.getElementById("res").innerHTML="No";
    
}

