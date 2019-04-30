let closebtn=document.getElementById('closebtn');
let signuppage=document.getElementById('signuppage');
let loginppage=document.getElementById('loginpage');
let btnlogin=document.getElementById('btnlogin');




closebtn.addEventListener('click',function(){
    signuppage.style.display="none";
})
closebtn1.addEventListener('click',function(){
    loginpage.style.display="none";
})
function signup(e){
signuppage.style.display="block";
}
function login(e){
   loginpage.style.display="block";
    }