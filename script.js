function buttonclick(val)
{
    
    document.getElementById("screen").value=document.getElementById("screen").value+val;

}
function operclick(val)
{

    num1=document.getElementById("screen").value;
   
    document.getElementById("screen").value=""
     op=val;
     a=0
}
function clr()
{
    document.getElementById("screen").value=""
}
var a=0
function equalclick(){
    num2=document.getElementById("screen").value;
   
    if(a==0){
        if(op=='+'){
            var result=eval(num1)+eval(num2)
        
    
        // result=""
    }
    else if(op=='-')
    {
            var result=eval(num1)-eval(num2)
        
    }
    else if(op=='/')
    {
        var result=eval(num1)/(num2)
        
    }
    else 
    {
        var result=eval(num1)*(num2)
        
    }
     
        document.getElementById("screen").value=result;
        a=1;
    }
    else{
        document.getElementById("btn1").value.disabled
    }  
}

/*var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result*/