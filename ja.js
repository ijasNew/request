function firstFunction(){
    let nX = document.getElementById('name').value;
    document.cookie = nX;
    alert(nX);
    location.href = "/name.html"; 

}
document.getElementById('userInfoHere').innerHTML = document.cookie;
