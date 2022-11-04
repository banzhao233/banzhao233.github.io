function welcome(){
    let welcome_text = '啊，你来了'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的hxd";
        if(referrer.toUpperCase()==document.domain.toUpperCase())return;
    }
    swal({
        title: " 你好 ",
        text: welcome_text+'\n 我是半昭',
        imageUrl: "/img/favicon.webp",
        timer: 3000,
        showConfirmButton: true
    });
}
$(document).ready(()=>{
    welcome()
})
