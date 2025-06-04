let username;
document.getElementById("sub-btn").onclick=function(){
    username = document.getElementById("ipt").value;
    console.log("username");
    document.getElementById("h1").textContent=username;
}