const submit = document.querySelector('#submit')
submit.addEventListener('click',()=>{
    const errorMsg = checkCrredntials()
    if(errorMsg.length == 0){
        window.location = 'index.html'
        return 
    }

   return window.alert(errorMsg)

})

const checkCrredntials = ()=>{
    const email = document.querySelector('#email').value
    const pass = document.querySelector('#password').value
    let errorMsg = ''

    if(email == '' || email == null){
        errorMsg += 'مقداری ایمیل خالی میباشد!'
    }
    const valid = email.includes('@')
    if(!valid){
        errorMsg += '\n مقدار ایمیل حاوی @ نیست!'
    }
    if(pass == '' || pass == null){
        errorMsg += '\n مقدار رمز عبور خالی میباشد!'
    }
    if(pass.length < 5){
        errorMsg += '\n مقدار رمز عبور کمتر از 5 حرف میباشد!'
    }

    return errorMsg
}