console.log("welcom to sign up/ login page:-");
let n=require('readline-sync');
let fs=require('fs')
let enter=n.question("what do you want to do sign up (1) / login in (2):-")
if (enter=="1"){
    let username=n.question("create user name:-");
    console.log("password should contain","\n","1)capital letter","\n","2)small letter","\n","3)number")
    let password=n.question("create password:-");
    let fn=fs.readFileSync("my_details_file.json\n","utf8")
    if(fn.includes(username && password)){
        console.log("your account is already exit plz login")
    }else{
        let email=n.question("create email:-")
        var strong_Email = RegExp(/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/);
        var strong = new  RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
        if (password.match(strong) || email.match(strong_Email)){
            pass_word=n.question("confirm your password:-");
            if (password===pass_word){
                console.log("you",username,"sign up successfully")
                console.log()
                console.log("we want your information")
                console.log()
                FullName=n.question("enter your full name:-")
                DOB=n.question("enter your DOB:-")
                Gender=n.question("enter your gender:-")
                Hobbies=n.question("enter your hobbies:-")
                console.log("Thank you for giving your information",FullName,"+",".")
                object={
                    user:{Username:username,Password:password,Email:email},profile:{FullName:FullName,DOB:DOB,Gender:Gender,Hobbies:Hobbies} 
                }
                let file = JSON.stringify(object,null,3);
                fs.appendFileSync("my_details_file.json\n",file)
                console.log(object)
            }else{
                console.log("invailid password")
            }
            console.log()
        }else{
            console.log("sorry something went wrong check your password or email")
        }            
    }}
else if (enter="2"){
    let fn=fs.readFileSync("my_details_file.json\n","utf8")
    info=JSON.parse(fn)
    let user_name=n.question("enter your user ID:")
    let pass_word=n.question("enter your password :")
    if (fn.includes(user_name && pass_word)){
        console.log("information:-")
        console.log("user:-",info['user'])
        console.log("profile:-",info['profile'])
    }
    else{
        console.log("sorry! invalid username and password")
    }

}