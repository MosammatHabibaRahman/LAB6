"Use Strict"

function name_check(n)
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

function ValidCheck()
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
    else if(!name_check(name))
    {
        document.getElementById('msg').innerHTML = "Invalid input!";
    }
    /* else if(str_word_count(name) < 2)
    {
        document.getElementById('msg').innerHTML = "Name field must contain two words!";
    } */
    else
    {
        document.getElementById('msg').innerHTML = "Name Submitted!";
    }
}