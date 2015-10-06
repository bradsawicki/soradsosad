$('#btn').click(function() {
  $('.bub-bub').toggleClass('animate');
  $(this).html($(this).text() == 'So Rad' ? 'So Sad' : 'So Rad');
});