/**
 * Created by YeWenting on 14/11/2016.
 */
function editName(item)
{
    var warnid = "error-tab"
    var wrong = false;
    var name = item.value;
    var s = document.getElementById(warnid).innerHTML;

    /* Check the length */
    if (name.length > 20)
    {
        if (s.search("Nickname is limited to 20 characters! ") < 0) s += "Nickname is limited to 20 characters! ";
        wrong = true;
    }
    else
        s = s.replace("Nickname is limited to 20 characters! ", "");    //replace() return the cut string back

    /* Check if there is characters */
    if (name.match(/([A-Za-z])+/) == null)
    {
        if (s.search("Nickname should contain English letter! ") < 0) s += "Nickname should contain English letter! ";
        wrong = true;
    }
    else s = s.replace("Nickname should contain English letter! ", "");

    if (wrong)
    {
        item.value = "null";
        document.getElementById(warnid).parentNode.style.display = "inline";
        document.getElementById(warnid).innerHTML = s;
        //document.getElementById("submit-button").setAttribute("disabled", "true");
    }
    else
    {
        document.getElementById(warnid).innerHTML = s;
        if (s == "") document.getElementById(warnid).parentNode.style.display = "none";
        //document.getElementById("submit-button").setAttribute("disabled", "false");
    }
}

function editCellphone(item)
{
    var warnid = "error-tab";
    var phone = item.value.trim();
    var s = document.getElementById(warnid).innerHTML;
    var mes = "Cellphone number not valid! "

    /* Check the length */
    if (phone.match(/(86)*0*13\d{9}/) == null)
    {
        if (s.search(mes) < 0) s += mes;
        item.value = "null";
        document.getElementById(warnid).parentNode.style.display = "inline";
        document.getElementById(warnid).innerHTML = s;
        //document.getElementById("submit-button").setAttribute("disabled", "true");
    }
    else {
        s = s.replace(mes, "");
        document.getElementById(warnid).innerHTML = s;
        if (s == "") document.getElementById(warnid).parentNode.style.display = "none";
        //document.getElementById("submit-button").setAttribute("disabled", "false");
    }
}

function editTelephone(item)
{
    var warnid = "error-tab";
    var phone = item.value.trim();
    var s = document.getElementById(warnid).innerHTML;
    var mes = "Telephone number not valid! "

    /* Check the length */
    if (phone.match(/\d{2}-\d{8}|\d{3}-\d{8}|\d{10}|\d{11}/) == null)
    {
        if (s.search(mes) < 0) s += mes;
        item.value = "null";
        document.getElementById(warnid).parentNode.style.display = "inline";
        document.getElementById(warnid).innerHTML = s;
        //document.getElementById("submit-button").setAttribute("disabled", "true");
    }
    else
    {
        s = s.replace(mes, "");
        document.getElementById(warnid).innerHTML = s;
        if (s == "") document.getElementById(warnid).parentNode.style.display = "none";
        //document.getElementById("submit-button").setAttribute("disabled", "false");
    }
}
function editEmail(item)
{
    var warnid = "error-tab";
    var email= item.value;
    var s = document.getElementById(warnid).innerHTML;
    var mes = "Email not valid! "

    /* Check the length */
    if (!checkEmail(email))
    {
        if (s.search(mes) < 0) s += mes;
        item.value = "null";
        document.getElementById(warnid).parentNode.style.display = "inline";
        document.getElementById(warnid).innerHTML = s;
        //document.getElementById("submit-button").setAttribute("disabled", "true");
    }
    else
    {
        s = s.replace(mes, "");
        document.getElementById(warnid).innerHTML = s;
        if (s == "") document.getElementById(warnid).parentNode.style.display = "none";
        //document.getElementById("submit-button").setAttribute("disabled", "false");
    }
}

function editQQ(item)
{
    var warnid = "error-tab";
    var qq= item.value;
    var s = document.getElementById(warnid).innerHTML;
    var mes = "QQ not valid! "

    /* Check the length */
    if (isNaN(qq) || qq.length < 3)
    {
        if (s.search(mes) < 0) s += mes;
        item.value = "null";
        document.getElementById(warnid).parentNode.style.display = "inline";
        document.getElementById(warnid).innerHTML = s;
        //document.getElementById("submit-button").setAttribute("disabled", "true");
    }
    else
    {
        s = s.replace(mes, "");
        document.getElementById(warnid).innerHTML = s;
        if (s == "") document.getElementById(warnid).parentNode.style.display = "none";
        //document.getElementById("submit-button").setAttribute("disabled", "false");
    }
}
