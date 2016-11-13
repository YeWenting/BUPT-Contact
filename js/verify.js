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

function checkSignIn()
{
    var email = document.getElementById("signInEmail").value;
    var password = document.getElementById("signInPass").value;

    /* An easy email verify */
    if (checkEmail(email))
        alert("Email address is not valid! ");

    /* An easy password check */
    if (password.length < 8) alert("Password should be more than 8 characters!");
    if (password.match(/([0-9])+/) == null) alert("Password should contain number!");
    if (password.match(/([A-Za-z])+/) == null) alert("Password should contain English letter!");
}

function checkSignUp()
{
    var name = document.getElementById("nickname").value;
    var email = document.getElementById("signUpEmail").value;
    var password = document.getElementById("signUpPass").value;

    /* An easy name verify */
    if (name.length > 10) alert("Nickname is limited to 10 characters!");
    if (name.match(/([A-Za-z])+/) == null) alert("Nickname should contain English letter!");

    /* An easy email verify */
    if (checkEmail(email))
        alert("Email address is not valid! ");

    /* An easy password check */
    if (password.length < 8) alert("Password should be more than 8 characters!");
    if (password.match(/([0-9])+/) == null) alert("Password should contain number!");
    if (password.match(/([A-Za-z])+/) == null) alert("Password should contain English letter!");
}

function editName(item)
{
    var wrong = false;
    var name = item.innerHTML;
    var s = item.parentNode.childNodes[1].childNodes[5].innerHTML;

    /* Check the length */
    if (name.length > 20)
    {
        if (s.search("Nickname is limited to 20 characters! ") < 0) s += "Nickname is limited to 10 characters! ";
        wrong = true;
    }
    else
        s = s.replace("Nickname should contain English letter! ", "");    //replace() return the cut string back

    /* Check if there is characters */
    if (name.match(/([A-Za-z])+/) == null)
    {
        if (s.search("Nickname should contain English letter! ") < 0) s += "Nickname should contain English letter! ";
        wrong = true;
    }
    else s = s.replace("Nickname is limited to 10 characters! ", "");

    if (wrong)
    {
        item.innerHTML = "null";
        item.parentNode.childNodes[1].style.display = "inline";
        item.parentNode.childNodes[1].childNodes[5].innerHTML = s;
    }
    else
    {
        item.parentNode.childNodes[1].childNodes[5].innerHTML = s;
        if (s == "") item.parentNode.childNodes[1].style.display = "none";
    }
}

function editCellphone(item)
{
    var phone = item.innerHTML.trim();
    var s = item.parentNode.parentNode.childNodes[1].childNodes[5].innerHTML;
    var mes = "Cellphone number not valid! "

    /* Check the length */
    if (phone.match(/(86)*0*13\d{9}/) == null)
    {
        if (s.search(mes) < 0) s += mes;
        item.innerHTML = "null";
        item.parentNode.parentNode.childNodes[1].style.display = "inline";
        item.parentNode.parentNode.childNodes[1].childNodes[5].innerHTML = s;
    }
    else {
        s = s.replace(mes, "");
        item.parentNode.parentNode.childNodes[1].childNodes[5].innerHTML = s;
        if (s == "") item.parentNode.parentNode.childNodes[1].style.display = "none";
    }
}

function editTelephone(item)
{
    var phone = item.innerHTML.trim();
    var s = item.parentNode.parentNode.childNodes[1].childNodes[5].innerHTML;
    var mes = "Telephone number not valid! "

    /* Check the length */
    if (phone.match(/\d{2}-\d{8}|\d{3}-\d{8}|\d{10}|\d{11}/) == null)
    {
        if (s.search(mes) < 0) s += mes;
        item.innerHTML = "null";
        item.parentNode.parentNode.childNodes[1].style.display = "inline";
        item.parentNode.parentNode.childNodes[1].childNodes[5].innerHTML = s;
    }
    else
    {
        s = s.replace(mes, "");
        item.parentNode.parentNode.childNodes[1].childNodes[5].innerHTML = s;
        if (s == "") item.parentNode.parentNode.childNodes[1].style.display = "none";
    }
}
function editEmail(item)
{
    var email= item.innerHTML;
    var s = item.parentNode.parentNode.childNodes[1].childNodes[5].innerHTML;
    var mes = "Email not valid! "

    /* Check the length */
    if (!checkEmail(email))
    {
        if (s.search(mes) < 0) s += mes;
        item.innerHTML = "null";
        item.parentNode.parentNode.childNodes[1].style.display = "inline";
        item.parentNode.parentNode.childNodes[1].childNodes[5].innerHTML = s;
    }
    else
    {
        s = s.replace(mes, "");
        item.parentNode.parentNode.childNodes[1].childNodes[5].innerHTML = s;
        if (s == "") item.parentNode.parentNode.childNodes[1].style.display = "none";
    }
}