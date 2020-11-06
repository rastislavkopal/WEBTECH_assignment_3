// validate text field
// str length must be > 3 
function validateTextField(element){
    let inputVal = element.value.trim();

    if (inputVal ==null || inputVal == "" || inputVal.length < 3) {
        element.style.border = "thick solid red";
        document.getElementById("firstNameErrMessage").style.display = "block";
    } else{
        element.style.border = "thick none red";
        document.getElementById("firstNameErrMessage").style.display = "none";
    }
}


function displayChecked(){
    if (document.getElementById('checkBox-other').checked){
        document.getElementById('sexInputDiv').style.display = "block";
        document.getElementById('sexInput').removeAttribute("disabled");
    }
    else{
        document.getElementById('sexInputDiv').style.display = "none";
        document.getElementById('sexInput').setAttribute("disabled",true);
    }
           
}

function displaycontinue()
{
    if (document.getElementById('isProgrammer').checked){
        document.getElementById('selectMenu').style.display = "block";

        document.getElementById('selectMenu1').removeAttribute("disabled");
        document.getElementById('selectMenu2').removeAttribute("disabled");
        document.getElementById('selectMenu3').removeAttribute("disabled");
    }
    else{
        document.getElementById('selectMenu').style.display = "none";   

        document.getElementById('selectMenu1').setAttribute("disabled",true);
        document.getElementById('selectMenu2').setAttribute("disabled",true);
        document.getElementById('selectMenu3').setAttribute("disabled",true);
    }
}

function validateEmail()
{
    let val = document.getElementById("from");
    if (/^([A-Za-z0-9_\-\.]){3,}\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(val.value))
    {
        val.style.border = "3px solid gold";
        document.getElementById("emailErrMessage").style.display = "none";
    }else{
        val.style.border = "thick solid red";
        document.getElementById("emailErrMessage").style.display = "block";
    }
}

var mapSelect = 
{
    language : ["Cpp","Kotlin","JavaScript"],

    Cpp : ["Efektivita","Zvyk","Bolest"],
    Kotlin : ["Android","Functional","Cool"],
    JavaScript : ["Web","Zabava"],

    Efektivita : ["Čo je rýchlo, to je dobre","Milujem efektivitu","Ani neviem"],
    Functional : ["Milujem functional programming","je to moderne!!"],
    Zvyk : ["Dlhodobo","Mam rád stereotyp"],
    Bolest : ["Som sadista","Zvyknem byť zvláštny"],
    Android : ["Android je super","Chcem vytvoriť úspešnú aplikáciu"],
    Cool : ["Som rád cool","Videl som na youtube"],
    Web : ["Frontend je zábava","Rád vidím výsledky"],
    Zabava : ["Užívam si to","Ja sa cítim dobre"]
};


// Select value for select elements based on other
function chooseSelect(element)
{
    let childOptions = '';
    if (element.id == "selectMenu1"){ // firstMenu was changed, act like it:)
        for (i=0;i<mapSelect[element.value].length;i++){ // change second select values
            childOptions = childOptions + "<option value=\""+ mapSelect[element.value][i] + "\"" + (i==0 ? "checked" : "") + ">" + mapSelect[element.value][i] + "</option>"; 
        }
        document.getElementById("selectMenu2").innerHTML  = childOptions;
        childOptions = '';
        for (i=0;i<mapSelect[mapSelect[element.value][0]].length;i++){ // third select values
            childOptions = childOptions + "<option value=\"" + mapSelect[mapSelect[element.value][0]][i] + "\"" + (i==0 ? "checked" : "") + ">" + mapSelect[ mapSelect[element.value][0] ][i] + "</option>";
        }
        document.getElementById("selectMenu3").innerHTML     = childOptions;
    } else if (element.id == "selectMenu2"){
        for (i=0;i<mapSelect[element.value].length;i++){ // third select values
            childOptions = childOptions + "<option value=\"" + mapSelect[element.value][i] + "\"" + (i==0 ? "checked" : "") + ">" + mapSelect[element.value][i] + "</option>";
        }
        document.getElementById("selectMenu3").innerHTML     = childOptions;
    } 
}

function isBirthdayEqualAge(){
    let birthDate = document.getElementById("birthDate").value;
    let age = document.getElementById("age").value;

    countedAge = (~~ ((Date.now() - new Date(birthDate)) / (31557600000)));

    return (age == countedAge)
}

function validateForm(){
    if ((/^([A-Za-z0-9_\-\.]){3,}\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(document.getElementById("from").value)) && isBirthdayEqualAge()){
            alert("Formulár bol odoslaný.");
            return true;
        }
    
    alert("OOps! Nesprávne zadaný vek alebo email :(");
    return false;
}