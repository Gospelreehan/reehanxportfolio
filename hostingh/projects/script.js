/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login')
registerBtn.addEventListener('click',()=>{
    container.classList.add("active")
})
loginBtn.addEventListener('click',()=>{
    container.classList.remove("active")
})

function fun(){
   var c= document.getElementById('pay')
   c.style.display="inline"


}
function cl(){
    var d= document.getElementById('pay')
   d.style.display="none"
}
