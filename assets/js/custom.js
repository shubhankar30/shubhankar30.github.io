const el = document.createElement('div')
el.href = ''
el.innerText = "Click here"

$( "#hapticserpent" ).on( "click", function() {
    swal({
        title: 'Wearable Robotic Haptic Feedback for Virtual Reality',
        text: 'Modal with a custom image.',
        /*imageUrl: './images/hapticserpent.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Wearable Robotic Haptic Feedback',*/
        animation: true,
        html: '<a href="https://www.researchgate.net/publication/324668531_HapticSerpent_A_Wearable_Haptic_Feedback_Robot_for_VR">Read more</a>',
      })
})

$( "#clashtanks" ).on( "click", function() {
    swal({
        title: 'Investigation of Virtual and Augmented Reality Gaming Prospects',
        content: el,
        animation: true,
        html: '<a href="https://ieeexplore.ieee.org/document/8330112">Read more</a>',
      })
})

$( "#smart-museum-design" ).on( "click", function() {
    swal({
        title: 'Indoor Localization using Wi-Fi Routers and Bluetooth Beacons',
        text: 'Modal with a custom image.',
        animation: true,
        html: '<a href="http://ijcsn.org/articles/0502/Smart-Museum-Design-Based-on-Indoor-Localization.html?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BLlojdhlcSnqPTwiu7poULA%3D%3D">Read more</a>',
      })
})

$( "#sticky-header" ).on( "click", function() {
    swal({
        title: 'Sticky Table Header',
        text: 'Modal with a custom image.',
        animation: true
      })
})

$( "#simple-dictionary" ).on( "click", function() {
    swal({
        title: 'Simple Dictionary',
        text: 'Modal with a custom image.',
        animation: true
      })
})

$( "#life-in-weeks" ).on( "click", function() {
    swal({
        title: 'Life In Weeks',
        text: 'Modal with a custom image.',
        animation: true
      })
})