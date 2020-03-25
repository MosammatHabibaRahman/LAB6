"Use Strict"

function CharCheck(n)
{
    var valid = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','.','-',' '];
    var flag = 0;

    for(var i=0; i<n.length; i++)
    {
        for(var j=0; j<valid.length; j++)
        {
            if(n.charAt(i) == valid[j])
            {
                flag++;
            }
        }
    }

    if(flag == n.length)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function NameCheck()
{
    var name = document.getElementById('name').value.trim();
    var init = name.charAt(0);

    if(name == "")
    {   
        document.getElementById('msg').innerHTML = "Field cannot be empty!";
    }
    else if(init == '.' || init == '-')
    {
        document.getElementById('msg').innerHTML = "Name field must begin with a letter!";
    }
    else if(!CharCheck(name))
    {
        document.getElementById('msg').innerHTML = "Invalid input!";
    }
    else if(!name.includes(" "))
    {
        document.getElementById('msg').innerHTML = "Name field must contain two words!";
    }
    else
    {
       alert("Name Submission Successful!");
    }
}

function EmailCheck()
{
    var email = document.getElementById('email').value.trim();
    var str1 = email.split("@");
    var str2 = email.split(".");

    if(email == "")
    {   
        document.getElementById('msg2').innerHTML = "Field cannot be empty!";
    }
    else if(email.includes(" ") || email.includes(","))
    {
        document.getElementById('msg2').innerHTML = "Email cannot contain space or comma";
    }
    else if(!email.includes("@") || !email.includes("."))
    {
        document.getElementById('msg2').innerHTML = "Email must be in 'name@example.com' format";
    }
    else if(str1[0].length == 0 || str1[1].length == 0)
    {
        console.log(str1[0]);
        console.log(str1[1]);
        document.getElementById('msg2').innerHTML = "Email must be in 'name@example.com' format";
    }
    else if(str2[0].length == 0 || str2[1].length == 0)
    {
        console.log(str2[0]);
        console.log(str2[1]);
        document.getElementById('msg2').innerHTML = "Email must be in 'name@example.com' format";
    }
    else
    {
        alert("Email Submission Successful!");
    }
}

function GenderCheck()
{
    if(!document.getElementById('male').checked && !document.getElementById('female').checked && !document.getElementById('other').checked)
    {
        document.getElementById('msg3').innerHTML = "Gender cannot be Null.";
    }
    else if(document.getElementById('male').checked)
    {
        alert("Gender: Male");
        var gender = document.getElementById('male').value;
    }
    else if(document.getElementById('female').checked)
    {
        alert("Gender: Female");
        var gender = document.getElementById('female').value;
    }
    else
    {
        alert("Gender: Other");
        var gender = document.getElementById('other').value;
    }
}

function DateRangeCheck(d,m,y)
{
    if(d >= 1 && d <= 31 && m >= 1 && m <= 12 && y >= 1900 && y <= 2016)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function DateCheck()
{
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;

    if(day == "" || month == "" || year == "")
    {
        document.getElementById('msg4').innerHTML = "Date cannot be Null.";
    }
    else if(!DateRangeCheck(day,month,year))
    {
        document.getElementById('msg4').innerHTML = "Invalid Input";
    }
    else
    {
        alert("Date Submission Successful!");
    }
}

function DegreeCheck()
{
    if(document.getElementById('ssc').checked && !document.getElementById('hsc').checked && !document.getElementById('bsc').checked)
    {
        alert("Degree: SSC");
        var ssc = document.getElementById('ssc').value;
    }
    else if(document.getElementById('ssc').checked && document.getElementById('hsc').checked && !document.getElementById('bsc').checked)
    {
        alert("Degree: SSC & HSC");
        var ssc = document.getElementById('ssc').value;
        var hsc = document.getElementById('hsc').value;
    }
    else if(document.getElementById('ssc').checked && document.getElementById('hsc').checked && document.getElementById('bsc').checked)
    {
        alert("Degree: SSC, HSC & BSc");
        var ssc = document.getElementById('ssc').value;
        var hsc = document.getElementById('hsc').value;
        var bsc = document.getElementById('bsc').value;
    }
    else
    {
        document.getElementById('msg5').innerHTML = "SSC must be selected.";
    }
}