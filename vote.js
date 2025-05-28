function vote(){
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let res=document.getElementById("res");

    if(age<18){
        res.innerHTML=`YOU ARE NOT ELIGIBLE!!`;
    }
    else{
        res.innerHTML="You are Eligible";
    }
}