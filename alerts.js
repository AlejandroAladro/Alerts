$(document).ready(function(){
   
  $("div.a-alert.a-alert-info").prepend('<i class="fas fa-info-circle"></i>').append(`<span class="close-alert"><i class="fas fa-times"></i></span>`)
  $("div.a-alert.a-alert-success").prepend('<i class="fas fa-check"></i>').append(`<span class="close-alert"><i class="fas fa-times"></i></span>`)
  $("div.a-alert.a-alert-warning").prepend('<i class="fas fa-exclamation-triangle"></i>').append(`<span class="close-alert"><i class="fas fa-times"></i></span>`)
  $("div.a-alert.a-alert-danger").prepend('<i class="fas fa-times"></i>').append(`<span class="close-alert"><i class="fas fa-times"></i></span>`)
  $('div.a-alert>span.close-alert').click(function(){
      $(this).parent().remove();
  })
})


