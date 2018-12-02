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

$( "#open-dictionary" ).on( "click", function() {
    swal({
        title: 'Open Dictionary',
        text: 'Modal with a custom image.',
        animation: true,
        html: '<a href="https://www.researchgate.net/publication/324668531_HapticSerpent_A_Wearable_Haptic_Feedback_Robot_for_VR">Read more</a>',
      })
})

$( "#english-marathi-dictionary" ).on( "click", function() {
    swal({
        title: 'English Marathi Dictionary',
        text: 'Modal with a custom image.',
        animation: true,
        html: '<a href="https://www.researchgate.net/publication/324668531_HapticSerpent_A_Wearable_Haptic_Feedback_Robot_for_VR">Read more</a>',
      })
})

$( "#ebu" ).on( "click", function() {
    swal({
        title: 'EBU',
        text: 'Modal with a custom image.',
        animation: true,    
        html: '<a href="https://www.researchgate.net/publication/324668531_HapticSerpent_A_Wearable_Haptic_Feedback_Robot_for_VR">Read more</a>',
    })
})