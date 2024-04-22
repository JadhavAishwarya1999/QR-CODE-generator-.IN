var btnget = document.querySelector('#btnget')
var data = document.querySelector('#data')
var qrcode = document.querySelector('#qrcode')

btnget.addEventListener('click',function(){
    if(data==" "){
        alert('name or url is required')
    }else{
        getQrcode(data.value)
    }
})

async function getQrcode(data){
    var apiURL="https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=data"
    var imgsrc=await fetch(apiURL)
    console.log(imgsrc)
    qrcode.src=imgsrc.url
}