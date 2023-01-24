function register(){
    var nameFromHtml = document.getElementById("name");
    if(nameFromHtml){
        var name = nameFromHtml.value;
        console.log(name);
    }
    var emailFromHtml = document.getElementById("email");
    if(emailFromHtml){
        var email = emailFromHtml.value; 
        console.log(email);
    }
    var passwordFromHtml = document.getElementById("password");
    if(passwordFromHtml){
        var password = passwordFromHtml.value;
        console.log(password);
    }
    if (name&&email&&password){
        localStorage.setItem("userData",JSON.stringify({nameOfUser:name,emailOfUser:email,passwordOfUser:password}));
        localStorage.setItem("isUserLoggedIn","false");
        alert("Register done!");
        window.location.href = "./login.html";

    }
    else
    {
        alert("Error :- Write all feilds..")
    }
}
function login(){
    var emailFromHtml = document.getElementById("email");
    if(emailFromHtml){
        var emailFromLogin = emailFromHtml.value;
        console.log(emailFromLogin);
    }
    var passwordFromHtml = document.getElementById("password");
    if(passwordFromHtml){
        var passwordFromLogin = passwordFromHtml.value;
        console.log(passwordFromLogin);
    }
    if(emailFromLogin && passwordFromLogin){
        var dataFromLocal = localStorage.getItem("userData");
        var parsedData = JSON.parse(dataFromLocal);
        console.log(parsedData.emailOfUser,"passedData.emailOfUser");
        if(emailFromLogin == parsedData.emailOfUser && passwordFromLogin == parsedData.passwordOfUser){
            localStorage.setItem("isUserLoggedIn","true");
            alert("Login successfull")
            window.location.href = "./home.html";
        }
        else{
            alert("Wrong cred!")
        }
    }else{
        alert("Error: Something wrong..!")
    }
}

// ----------------addToCart-------------

function addToCart(proId){
    alert("Added In Cart");
    console.log(proId,"ProID")
    var extProducts = JSON.parse(localStorage.getItem("allProducts"));
    console.log(extProducts)
    if(extProducts == null){extProducts=[]}

    // var proName

    console.log(extProducts,"extProducts 1")

    var proPs = proId.querySelectorAll("p");
    var proName = proPs[0].innerText;
    // console.log(proName,"proName")

    var proImg = proId.querySelector("img").src;
    var proPrice = proPs[2].innerText;
    // console.log(proPrice)
    var proObj = {pN:proName,pP:proPrice,pI:proImg}
    // console.log(proObj)
    extProducts.push(proObj);
    // console.log(extProducts,"extProducts 2")
    localStorage.setItem("allProducts",JSON.stringify(extProducts))
    alert("Product added !")
}