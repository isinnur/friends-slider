var models = [

    {
        name: 'Rachel Green',
        image: 'images/rachel.jpeg',
        link: 'https://www.youtube.com/watch?v=AlGABMe4cmc'
    },

    {
        name: 'Joey Tribbiani',
        image: 'images/joey.jpeg',
        link: 'https://www.youtube.com/watch?v=fFcHnlCw3nI'
    },

    {
        name: 'Ross Geller',
        image: 'images/ross.jpeg',
        link: 'https://www.youtube.com/watch?v=4Mk0EybWl3k'
    },

    {
        name: 'Monica Geller',
        image: 'images/monica.jpeg',
        link: 'https://www.youtube.com/watch?v=nSFWn15L_X8'
    },

    {
        name: 'Chandler Bing',
        image: 'images/chandler.jpeg',
        link: 'https://www.youtube.com/watch?v=KjJAfpnTIFM'
    },

    {
        name: 'Phoebe Buffay',
        image: 'images/phe.jpeg',
        link: 'https://www.youtube.com/watch?v=JYqAWNVHBwo'
    }

];




var index = 0;
var slaytCount = models.length;
var interval;


//ilerde ekliceğim özellikleri tanımlayan obje
var settings = {
    duration: '2000',
    random: false
};

init(settings);

document.querySelector('.fa-arrow-left').addEventListener('click', function () {
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-right').addEventListener('click', function () {
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.fa-solid').forEach(function(item){
    item.addEventListener('mouseenter',function(){
       clearInterval(interval); 
    })
});

document.querySelectorAll('.fa-solid').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
});


function init(settings) {

    var prev;

   interval = setInterval(function () {
        if (settings.random) {
            //random index
            do {
                index = Math.floor(Math.random() * slaytCount);
            }

            while (index == prev)
            prev = index;

        }

        else {
            //artan index
            if (slaytCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }

        
        showSlide(index);


    }, settings.duration)

}



function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    }

    if (i >= slaytCount) {
        index = 0;
    }




    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.imagess').setAttribute('src', models[index].image);

    document.querySelector('.card-link').setAttribute('href', models[index].link);

}