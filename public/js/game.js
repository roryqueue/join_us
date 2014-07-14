$('.row').hide();

$('#start-button').click(function() {
  $('.row').show();
  $('#start-button').hide();
});
// function startGame(){
//   $('.row').show();
//   $('#start-button').hide();
// }


startProgressBar('#pb-gen', 1)
startProgressBar('#pb-pos', 2)
startProgressBar('#pb-neg', 3)



function startProgressBar(divName, speed){

  var progressBar = $(divName),
      width = 0;

  progressBar.width(width);

  var interval = setInterval(function() {

      width += speed;

      progressBar.css('width', width + '%');

      if (width >= 60) {
          clearInterval(interval);
      }
  }, 1000)

}

// function addTimedButton(name, type, speed){

//   if (!speed){
//     speed = 1;
//   }
//   if (!type){
//     type = 'gen';
//   }

//   var adjustedName = '#' + name;

//   $('#button-column').append(

//       "<div class='row button-container' >
//         <div class='c4'>
//           <button class='smooth btn-"
//         + type +
//           "btn-small'>"
//         + name +
//           "</button>
//           </div>
//           <div id="
//         + name +
//         " class='c6 progress-bar'; width='0'; background'#999'; color='#999'; text-align='center'; overflow'hidden';>o</div><br><br>
//       </div>"

//     );

//   startProgressBar(adjustedName, speed);

// };
