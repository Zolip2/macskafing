let fart = new Audio('sound/fort.mp3')

$('#bingus').click(function() {
    fart.play()
    let height = $(window).height();
    let width = $(window).width();
    let bingusx = Math.floor(Math.random() * width)
    let bingusy = Math.floor(Math.random() * height)
    let bingus = $('#bingus')
    bingus.animate({left: bingusx, top: bingusy})

    switch(bingusx){
        case bingusx < 0:
            bingusx = 0;
            break;
    }

    switch(bingusy){
        case bingusy < 0:
            bingusy = 0;
            break;
    }

})