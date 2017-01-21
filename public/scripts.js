var socket = io("http://localhost:8080");
var INITIAL_MESSAGE = "Let's Make America Great Again!";

var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    updateScrollbar();
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="/photos/angry2.jpg" /></figure>' + INITIAL_MESSAGE + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  console.log('MESSAGE ENTERED', msg);
  console.log(socket);
  socket.emit('chat message', msg);
  // loadingMessage();
}


$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

function loadingMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="/photos/trump.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
}

socket.on('trump response', function(msg) {
  updateScrollbar();
  console.log('response msg >>> ', msg);
  $('.message.loading').remove();
  $('#main-img').attr('src', '/photos/' + msg.image + '.jpg');
  $('<div class="message new"><figure class="avatar"><img src="/photos/' + msg.image + '.jpg"' +  '/></figure>' + msg.trumpMsg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  updateScrollbar();
})
