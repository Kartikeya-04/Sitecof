
document.querySelector(".btn").addEventListener("click",function(){
    

var disc=document.querySelector("#Dj").value;
var dis=Calc(disc);



document.querySelector("#Answer").value=dis;
document.querySelector("#Answer").disabled=true;
console.log(dis);
function Calc(k){
    if(k<5){
        var ans=k*10;
        return ans;
    }

    else if(k>=5 && k<=10){
        var ans1=k*10;
        ans1=((ans1*5)/100);
        return ans1;
    }
    else if(k>10){
        var ans2=k*10;
        ans2=((ans2*10)/100);
        return ans2;
    }
}
}
)

$(".toggle").on("click",function(){
  

    $(".contain").toggleClass("dark");
    $("h1").toggleClass("bg1");
    $("h3").toggleClass("bg2");
    $("#dd").toggleClass("neo");

})







