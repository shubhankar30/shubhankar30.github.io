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
$(document).on('click', '#open-dict-github', function() {
    location.href = "https://github.com/shubhankar30/OpenDictionary";
    swal.clickConfirm();
});

$(document).on('click', '#open-dict-playstore', function() {
    location.href = "https://play.google.com/store/apps/details?id=shubhankar30.opendictionary";
    swal.clickConfirm();
});

$(document).on('click', '#mar-eng-github', function() {
    location.href = "https://github.com/shubhankar30/Marathi-English-Dictionary";
    swal.clickConfirm();
});

$(document).on('click', '#mar-eng-playstore', function() {
    location.href = "https://play.google.com/store/apps/details?id=com.shubhankar30.marengdictionary";
    swal.clickConfirm();
});

$( "#open-dictionary" ).on( "click", function() {
    swal({
        title: 'Open Dictionary',
        animation: true,
        imageUrl:'./images/openDict.jpg',
        imageWidth: 150,
        imageHeight: 250,
        imageAlt: 'Open Dictionary',
        showCancelButton:false,
        showConfirmButton:false,
        html: '<p>Simplistic, open-source on the go dictionary in the form of a android application.<br><br></p><br>'+
        '<button style="margin-right:30px" type="button" role="button" tabindex="0" id= "open-dict-github" class="customSwalBtn">' + 'Github Repository' + '</button>'+
        '<button type="button" role="button" tabindex="0" id="open-dict-playstore" class="customSwalBtn">' + 'Playstore Link' + '</button>',
      })
})

$( "#english-marathi-dictionary" ).on( "click", function() {
    swal({
        title: 'English Marathi Dictionary',
        imageUrl:'./images/engMarDict.jpg',
        imageWidth: 150,
        imageHeight: 250,
        imageAlt: 'Open Dictionary',
        animation: true,
        showCancelButton:false,
        showConfirmButton:false,
        html: '<p>An Android Application to find meanings from English to Marathi and vice versa.<br></p><br>'+
        '<button style="margin-right:30px" type="button" role="button" tabindex="0" id= "mar-eng-github" class="customSwalBtn">' + 'Github Repository' + '</button>'+
        '<button type="button" role="button" tabindex="0" id="mar-eng-playstore" class="customSwalBtn">' + 'Playstore Link' + '</button>',
      })
})

