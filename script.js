// ===============================
// الاتفاق الرباطي - Main Script
// ===============================


// القائمة الجانبية

function openMenu(){

    const menu = document.getElementById("side-menu");

    if(!menu) return;

    if(menu.style.display === "block"){

        menu.style.display = "none";

    }else{

        menu.style.display = "block";

    }

}



// إغلاق القائمة عند الضغط خارجها

document.addEventListener("click", function(e){

    const menu = document.getElementById("side-menu");

    const button = e.target.closest("button");


    if(menu && !menu.contains(e.target) && !button){

        menu.style.display="none";

    }

});




// تغيير اللغة

function changeLanguage(lang){

    localStorage.setItem("language",lang);

    location.reload();

}




// حفظ اللغة المختارة

function loadLanguage(){

    const lang = localStorage.getItem("language") || "ar";


    document.documentElement.lang = lang;


    if(lang==="en"){

        document.documentElement.dir="ltr";

    }else{

        document.documentElement.dir="rtl";

    }

}


loadLanguage();




// زر تسجيل الخروج

function logout(){

    localStorage.removeItem("user");

    localStorage.removeItem("role");

    window.location.href="login.html";

}




// التحقق من دخول المستخدم

function checkLogin(){

    const user = localStorage.getItem("user");


    const logoutBtn=document.getElementById("logout-btn");


    if(user && logoutBtn){

        logoutBtn.style.display="block";

    }

}



checkLogin();




// رسالة ترحيب

function welcomeUser(){

    const name =
    localStorage.getItem("user");


    const box =
    document.getElementById("welcome-user");


    if(name && box){

        box.innerHTML=
        "مرح
