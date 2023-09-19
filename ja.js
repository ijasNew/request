function firstFunction(){
    let nX = document.getElementById('name').value;
    document.getElementById('uk').innerHTML = nX;
    document.cookie = nX; 
    location.href = "/name.html"; 

}
document.getElementById('userInfoHere').innerHTML = document.cookie;
