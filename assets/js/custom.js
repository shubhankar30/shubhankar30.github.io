$(document).ready(function() {


    const el = document.createElement('div')
    el.href = ''
    el.innerText = "Click here"

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
            '<a href="https://github.com/shubhankar30/OpenDictionary"><button type="button" role="button" tabindex="0" id= "open-dict-github" class="customSwalBtn">' + 'Github Repository' + '</button></a>'+
            '<a href-"https://play.google.com/store/apps/details?id=shubhankar30.opendictionary"><button type="button" role="button" tabindex="0" id="open-dict-playstore" class="customSwalBtn">' + 'Playstore Link' + '</button></a>',
        })
    })

    $( "#english-marathi-dictionary" ).on( "click", function() {
        swal.fire({
            title: 'English Marathi Dictionary',
            imageUrl:'./images/engMarDict.png',
            imageWidth: 150,
            imageHeight: 250,
            imageAlt: 'English Marathi Dictionary',
            animation: true,
            showCancelButton: false,
            showConfirmButton:false,
            showCloseButton: true,
            html: '<p>An Android Application to find meanings from English to Marathi and vice versa.</p><br>'+
            '<a href="https://github.com/shubhankar30/Marathi-English-Dictionary"><button type="button" role="button" tabindex="0" id= "mar-eng-github" class="customSwalBtn">' + 'Github Repository' + '</button></a>'+
            '<a href="https://play.google.com/store/apps/details?id=com.shubhankar30.marengdictionary"><button type="button" role="button" tabindex="0" id="mar-eng-playstore" class="customSwalBtn">' + 'Playstore Link' + '</button></a>',
        })
    })

    $( "#ebu" ).on( "click", function() {
        swal.fire({
            title: 'EBU (Electronic Scarecrow)',
            imageUrl:'./images/ebu.png',
            imageWidth: 150,
            imageHeight: 250,
            imageAlt: 'EBU',
            animation: true,
            showCancelButton: false,
            showConfirmButton:false,
            showCloseButton: true,
            html: '<p>An Android Application to find meanings from English to Marathi and vice versa.</p><br>'+
            '<a href="https://play.google.com/store/apps/details?id=com.shubhankar30.ebuapp&hl=en"><button type="button" role="button" tabindex="0" id="mar-eng-playstore" class="customSwalBtn">' + 'Playstore Link' + '</button></a>',
        })
    })

    $( "#ahapte-vet" ).on( "click", function() {
        swal.fire({
            title: 'Vet Clinic Management',
            animation: true,
            imageUrl:'./images/ahapte-vet.jpg',
            imageWidth: 450,
            imageHeight: 250,
            imageAlt: 'Vet DB Mgmt',
            showCancelButton: false,
            showConfirmButton:false,
            showCloseButton: true,
            html: '<p>- Simple, easy-to-use database management application</p><br>'+
            '<p>- Keep track of clients and their reports</p>'+
            '<p>- Ability to send email, sms to multiple clients.</p>'
        })
    })

    $( "#trapp" ).on( "click", function() {
        swal.fire({
            title: 'Complaint Tracking',
            imageUrl:'./images/trapp.jpg',
            imageWidth: 150,
            imageHeight: 250,
            imageAlt: 'Complaint Tracking',
            animation: true,
            showCancelButton: false,
            showConfirmButton:false,
            showCloseButton: true,
            html: '<p>Complaint Tracking Android Application integrated with Firebase, Firestore and Crashlytics.</p><br>'+
            '<a href="https://play.google.com/store/apps/details?id=com.futuraapsol.trapp&hl=en"><button type="button" role="button" tabindex="0" id="mar-eng-playstore" class="customSwalBtn">' + 'Playstore Link' + '</button></a>',
        })
    })

    $( "#lifeInWeeks" ).on( "click", function() {
        swal.fire({
            title: 'Life In Weeks',
            imageWidth: 150,
            imageHeight: 250,
            imageAlt: 'EBU',
            animation: true,
            showCancelButton: false,
            showConfirmButton:false,
            showCloseButton: true,
            html: '<p>Visualise your life in blocks of weeks.</p><br>'+
            '<p>Get a different perspective on life.</p><br>'+
            '<p>Hosted on Github.</p><br>'+
            '<a href="https://shubhankar30.github.io/lifeInWeeks/"><button type="button" role="button" tabindex="0" id="lifeInWeeks-link" class="customSwalBtn">' + 'Link' + '</button></a>',
        })
    })
});