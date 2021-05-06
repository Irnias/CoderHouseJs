$(window).scroll( () => {
    
    let topScrol = $(window).scrollTop();
    $('#back1').css('top', 500-(topScrol * 0.25) +'px');
    $('#back2').css('top', 700+(topScrol * 0.50) +'px');
    $('#back3').css('top', 900-(topScrol * 0.66) +'px');

    console.log("me muevo");

})

