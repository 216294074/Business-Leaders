$('button').click(function(){
var inputValue = $('.inputName').val();
    
    console.log(inputValue);
    $('.inputName').val('');
    $("body").append("<img src=" + inputValue + ">");
});
let photo = ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMI9bVATHJ84VGBOtg3nEZsVIm0gLBoKrscg&usqp=CAU",
    " https://wisdomfuel.com/wp-content/uploads/2019/10/Sam-Ovens-Consulting-Accelerator-Course-Review-1280x640.jpg", "https://res.cloudinary.com/test-entreleadership-com/image/upload/v1502220996/patrick-bet-david.jpg",   "https://img.etimg.com/thumb/width-1200,height-900,imgsize-621725,resizemode-1,msid-69869086/news/international/world-news/pakistan-pm-imran-khan-trolled-for-posting-tagores-quote-as-khalil-jibrans.jpg"    ];
photo.forEach(function(a,b){
    $('.show').append('<img src=' + photo[b] +'>');
});
