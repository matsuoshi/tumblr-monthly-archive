/*
	tumblr-monthly-archive
*/

jQuery(function($) {
  var getArgs, xhr;
  getArgs = function() {
    var args, data, tmp, val, _i, _len;
    if (location.search.length < 1) {
      false;
    }
    args = {};
    data = location.search.substr(1).split('&');
    for (_i = 0, _len = data.length; _i < _len; _i++) {
      val = data[_i];
      tmp = val.split('=');
      args[tmp[0]] = tmp[1];
    }
    return args;
  };
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
        return $ul.append("<li><a href=\"" + ym + "\">" + ym_str + " (" + count + ")</a></li>");
      });
    }
  };
  return xhr.send(null);
});
