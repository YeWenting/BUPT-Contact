/**
 * Created by YeWenting on 2016/11/13.
 */

function checkEmail(email)
{
    var emailPat=/^(.+)@(.+)$/;
    var matchArray=email.match(emailPat);
    if (matchArray==null) return false;
    else return true;
}

var errorState = new Array(5);
var i;
for (i = 0; i < 5; ++i)
    errorState[i] = 0;

$(document).ready(function(){


    $("#sign-in").click(function(){
        var error = "";
        var email = $("#signInEmail").val();
        var password = $("#signInPass").val();

        /* An easy email verify */
        if (checkEmail(email))
            error += "Email address is not valid! \n";

        /* An easy password check */
        if (password.length < 8) error += "Password should be more than 8 characters! \n";
        if (password.match(/([0-9])+/) == null) error += "Password should contain number! \n";
        if (password.match(/([A-Za-z])+/) == null) error += "Password should contain English letter! \n";
        alert(error);
    });

    $("#sign-up").click(function(){
        var error = "";
        var email = $("#signUpEmail").val();
        var password = $("#signUpPass").val();

        /* An easy email verify */
        if (!checkEmail(email))
            error += "Email address is not valid! \n";

        /* An easy password check */
        if (password.length < 8) error += "Password should be more than 8 characters!\n";
        if (password.match(/([0-9])+/) == null) error += "Password should contain number!\n";
        if (password.match(/([A-Za-z])+/) == null) error += "Password should contain English letter!\n";
        alert(error);
    });

});

function editName(item, warnid)
{
    warnid = "error-tab" + warnid;
    var wrong = false;
    var name = item.innerHTML;
    var s = document.getElementById(warnid).innerHTML;

    /* Check the length */
    if (name.length > 20)
    {
        if (s.search("Nickname is limited to 20 characters! ") < 0) s += "Nickname is limited to 20 characters! ";
        wrong = true;
    }
    else
        s = s.replace("Nickname should contain English letter! ", "");    //replace() return the cut string back

    if (wrong)
    {
        item.innerHTML = "null";
        document.getElementById(warnid).parentNode.style.display = "inline";
        document.getElementById(warnid).innerHTML = s;
    }
    else
    {
        document.getElementById(warnid).innerHTML = s;
        if (s == "") document.getElementById(warnid).parentNode.style.display = "none";
    }
}

function editCellphone(item, warnid)
{
    warnid = "error-tab" + warnid;
    var phone = item.innerHTML.trim();
    var s = document.getElementById(warnid).innerHTML;
    var mes = "Cellphone number not valid! "

    /* Check the length */
    if (phone.match(/(86)*0*13\d{9}/) == null)
    {
        if (s.search(mes) < 0) s += mes;
        item.innerHTML = "null";
        document.getElementById(warnid).parentNode.style.display = "inline";
        document.getElementById(warnid).innerHTML = s;
    }
    else {
        s = s.replace(mes, "");
        document.getElementById(warnid).innerHTML = s;
        if (s == "") document.getElementById(warnid).parentNode.style.display = "none";
    }
}

function editTelephone(item, warnid)
{
    warnid = "error-tab" + warnid;
    var phone = item.innerHTML.trim();
    var s = document.getElementById(warnid).innerHTML;
    var mes = "Telephone number not valid! "

    /* Check the length */
    if (phone.match(/\d{2}-\d{8}|\d{3}-\d{8}|\d{10}|\d{11}/) == null)
    {
        if (s.search(mes) < 0) s += mes;
        item.innerHTML = "null";
        document.getElementById(warnid).parentNode.style.display = "inline";
        document.getElementById(warnid).innerHTML = s;
    }
    else
    {
        s = s.replace(mes, "");
        document.getElementById(warnid).innerHTML = s;
        if (s == "") document.getElementById(warnid).parentNode.style.display = "none";
    }
}
function editEmail(item, warnid)
{
    warnid = "error-tab" + warnid;
    var email= item.innerHTML;
    var s = document.getElementById(warnid).innerHTML;
    var mes = "Email not valid! "

    /* Check the length */
    if (!checkEmail(email))
    {
        if (s.search(mes) < 0) s += mes;
        item.innerHTML = "null";
        document.getElementById(warnid).parentNode.style.display = "inline";
        document.getElementById(warnid).innerHTML = s;
    }
    else
    {
        s = s.replace(mes, "");
        document.getElementById(warnid).innerHTML = s;
        if (s == "") document.getElementById(warnid).parentNode.style.display = "none";
    }
}

function editQQ(item, warnid)
{
    warnid = "error-tab" + warnid;
    var qq= item.innerHTML;
    var s = document.getElementById(warnid).innerHTML;
    var mes = "QQ not valid! "

    /* Check the length */
    if (isNaN(qq))
    {
        if (s.search(mes) < 0) s += mes;
        item.innerHTML = "null";
        document.getElementById(warnid).parentNode.style.display = "inline";
        document.getElementById(warnid).innerHTML = s;
    }
    else
    {
        s = s.replace(mes, "");
        document.getElementById(warnid).innerHTML = s;
        if (s == "") document.getElementById(warnid).parentNode.style.display = "none";
    }
}