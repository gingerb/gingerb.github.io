// Generated by CoffeeScript 1.8.0
(function() {
  $('.nav-item').on('mouseenter mouseleave', function(event) {
    var hidden;
    hidden = $(this).find('ul');
    if (hidden.length > 0) {
      return hidden.toggle();
    }
  });

}).call(this);
