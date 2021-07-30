function validateform()
    {
        let name = document.myForm.Name.value; 
        let phone = document.myForm.Phone.value;
        let email = document.myForm.Emailid.value;
        let password=document.myForm.Password.value;  
        let country=document.myForm.Country.value;
        
        if (name==null || name==""){  
            alert("Name cannot be blank");  
            return false;  
        }else if(phone.length!=10){
            alert("Invalid Phone number");
            return false;
        }else if(country == "-1")
        {
            alert("Please select a country");
            return false;
        }else if(password.length<6){  
            alert("Password must be at least 6 characters long.");  
            return false;  
        }
        else{
            alert("Data verified! \nProceed to Submit")
        return true;
        }
    }