$(document).ready(function() {


    const el = document.createElement('div')
    el.href = ''
    el.innerText = "Click here"

    // $( "#hapticserpent" ).on( "click", function() {
    //     swal({
    //         title: 'Wearable Robotic Haptic Feedback for Virtual Reality',
    //         text: 'Modal with a custom image.',
    //         /*imageUrl: './images/hapticserpent.png',
    //         imageWidth: 400,
    //         imageHeight: 200,
    //         imageAlt: 'Wearable Robotic Haptic Feedback',*/
    //         animation: true,
    //         html: '<a href="https://www.researchgate.net/publication/324668531_HapticSerpent_A_Wearable_Haptic_Feedback_Robot_for_VR">Read more</a>',
    //       })
    // })
    $('#open-dict-github').on('click', function() {
        location.href = "https://github.com/shubhankar30/OpenDictionary";
        swal.clickConfirm();
    });

    $('#open-dict-playstore').on('click', function() {
        location.href = "https://play.google.com/store/apps/details?id=shubhankar30.opendictionary";
        swal.clickConfirm();
    });

    $('#mar-eng-github').on('click', function() {
        location.href = "https://github.com/shubhankar30/Marathi-English-Dictionary";
        swal.clickConfirm();
    });

    $('#mar-eng-playstore').on('click', function() {
        location.href = "https://play.google.com/store/apps/details?id=com.shubhankar30.marengdictionary";
        swal.clickConfirm();
    });

    $( "#open-dictionary" ).on( "click", function() {
        swal.fire({
            title: 'Open Dictionary',
            animation: true,
            imageUrl:'./images/openDict.jpg',
            imageWidth: 150,
            imageHeight: 250,
            imageAlt: 'Open Dictionary',
            showCancelButton: false,
            showConfirmButton:false,
            showCloseButton: true,
            html: '<p>Simplistic, open-source on the go dictionary in the form of a android application.</p><br>'+
            '<button type="button" role="button" tabindex="0" id= "open-dict-github" class="customSwalBtn">' + 'Github Repository' + '</button>'+
            '<button type="button" role="button" tabindex="0" id="open-dict-playstore" class="customSwalBtn">' + 'Playstore Link' + '</button>',
        })
    })

    $( "#english-marathi-dictionary" ).on( "click", function() {
        swal.fire({
            title: 'English Marathi Dictionary',
            imageUrl:'./images/engMarDict.jpg',
            imageWidth: 150,
            imageHeight: 250,
            imageAlt: 'Open Dictionary',
            animation: true,
            showCancelButton: false,
            showConfirmButton:false,
            showCloseButton: true,
            html: '<p>An Android Application to find meanings from English to Marathi and vice versa.</p><br>'+
            '<button type="button" role="button" tabindex="0" id= "mar-eng-github" class="customSwalBtn">' + 'Github Repository' + '</button>'+
            '<button type="button" role="button" tabindex="0" id="mar-eng-playstore" class="customSwalBtn">' + 'Playstore Link' + '</button>',
        })
    })

    $( "#ebu" ).on( "click", function() {
        swal.fire({
            title: 'English Marathi Dictionary',
            imageUrl:'./images/engMarDict.jpg',
            imageWidth: 150,
            imageHeight: 250,
            imageAlt: 'EBU',
            animation: true,
            showCancelButton: false,
            showConfirmButton:false,
            showCloseButton: true,
            html: '<p>An Android Application to find meanings from English to Marathi and vice versa.</p><br>'+
            '<button type="button" role="button" tabindex="0" id= "mar-eng-github" class="customSwalBtn">' + 'Github Repository' + '</button>'+
            '<button type="button" role="button" tabindex="0" id="mar-eng-playstore" class="customSwalBtn">' + 'Playstore Link' + '</button>',
        })
    })
});