$('.row').hide();
var lightFollowers = ["Jehovah", "Luther", "Faith", "Mary", "Moses", "Nehemiah"];

$('#start-button').click(function() {
  $('.row').show();
  $('#pray, #sacrifice, #table-column, #sacrifice-message, #demand-message, #success-message, #follower-message, #start-button').hide();
});


$('#recruit-button').click(function() {
  $('#pray, #sacrifice, #table-column').show();
    startProgressBar('#pb-pos', 1);
  $('#recruits-table > tbody:last').append("<tr><td class='follower-name'>" + lightFollowers.pop() + "</td><td class='follower-status'>Faithful</td></tr>");
  $('#follower-message').fadeIn(500).delay(3000).fadeOut(500);
  $('#demand-message').delay(1500).fadeIn(500).delay(3000).fadeOut(500);
});

$('#sacrifice-button').click(function() {
    startProgressBar('#pb-neg', 1);
  $('.follower-status').text('Deceased');
  $('#sacrifice-message').fadeIn(500).delay(3000).fadeOut(500);
  $('#success-message').delay(1500).fadeIn(500).delay(3000).fadeOut(500);
});

$('#pray-button').click(function() {
    startProgressBar('#pb-gen', 1);
});

function startProgressBar(divName, speed){

  $(divName).show();

  var progressBar = $(divName),
      width = 50;

  progressBar.width(width);

  var interval = setInterval(function() {

      width -= speed;

      progressBar.css('width', width + '%');

      if (width <= 0) {
          clearInterval(interval);
          $(divName).hide();
      }
  }, 100)

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
