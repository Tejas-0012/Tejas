function per(){
    var per=Math.random()*100;
    var res=document.getElementById("res");
    if(res>70){
    res.innerHTML='Result is:❤️❤️❤️'+per;
    }
    else{
        res.innerHTML='Result is:'+per;
    }
}