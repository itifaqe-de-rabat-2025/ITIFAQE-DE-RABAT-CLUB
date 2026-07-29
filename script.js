let currentLanguage = "ar";


function setLanguage(lang){

currentLanguage = lang;


if(document.getElementById("title")){

if(lang === "en"){

document.getElementById("title").innerHTML =
"Welcome to ITIFAQE DE RABAT CLUB";


document.getElementById("description").innerHTML =
"Football club for training and developing talents.";

}

else{


document.getElementById("title").innerHTML =
"مرحباً بكم في نادي الاتفاق الرباطي";


document.getElementById("description").innerHTML =
"نادي رياضي لتكوين وتطوير المواهب الكروية.";

}

}



if(document.getElementById("login-title")){


if(lang === "en"){

document.getElementById("login-title").innerHTML =
"Login";

document.getElementById("email").placeholder =
"Email";

document.getElementById("password").placeholder =
"Password";

}

else{


document.getElementById("login-title").innerHTML =
"تسجيل الدخول";

document.getElementById("email").placeholder =
"البريد الإلكتروني";

document.getElementById("password").placeholder =
"كلمة المرور";

}


}


}




function login(){


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



let message =
document.getElementById("message");



if(email === "" || password === ""){


message.innerHTML =
"المرجو إدخال المعلومات";


return;

}




// دخول تجريبي سيتم ربطه لاحقاً بقاعدة البيانات


if(email === "admin@itifaqe.com" && password === "123456"){


message.innerHTML =
"تم الدخول بنجاح";


window.location.href =
"admin-dashboard.html";


}

else{


message.innerHTML =
"المعلومات غير صحيحة";


}



}
