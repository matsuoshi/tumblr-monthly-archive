/*
	tumblr-monthly-archive
	
	ver 0.1: 2013.06.27
	https://github.com/matsuoshi/tumblr-monthly-archive
	http://matsuoshi.tumblr.com/
*/

jQuery(function($) {
  var xhr;
  xhr = new XMLHttpRequest();
  xhr.open('GET', '/archive', true);
  xhr.onreadystatechange = function() {
    var $ul, months;
    if (xhr.readyState === 4 && xhr.status === 200) {
      $('#monthly-archive').replaceWith('<ul id="monthly-archive" />');
      months = $(xhr.responseText).find('.months > ul > li:not(.empty)');
      $ul = $('#monthly-archive');
      return months.each(function() {
        var count, ym, ym_str;
        ym = $(this).find('a').attr('href');
        ym_str = ym.replace(/\/archive\//, '');
        count = $(this).find('span').html();
        return $ul.prepend("<li><a href=\"" + ym + "\">" + ym_str + " (" + count + ")</a></li>");
      });
    }
  };
  return xhr.send(null);
});
