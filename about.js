var typed=new Typed(".multiple-text" ,{
    strings:["Web Developer" ,"Java Programmer","Algorithm Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop: true
});
function renderUsername(){
    document.getElementById("greet").innerHTML=`Hello ${current_username}!`
}
const current_username = localStorage.getItem('current_username');
renderUsername();

