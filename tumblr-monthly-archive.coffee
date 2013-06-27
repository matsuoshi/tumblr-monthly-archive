###
	tumblr-monthly-archive
	
	ver 0.1: 2013.06.27
	https://github.com/matsuoshi/tumblr-monthly-archive
	http://matsuoshi.tumblr.com/
###

jQuery ($) ->
	# get /archive page
	xhr = new XMLHttpRequest()
	xhr.open 'GET', '/archive', true
	xhr.onreadystatechange = ->
		if xhr.readyState == 4 && xhr.status == 200
			$('#monthly-archive').replaceWith('<ul id="monthly-archive" />')
			
			months = $(xhr.responseText).find('.months > ul > li:not(.empty)')
			$ul = $('#monthly-archive')
			months.each ->
				ym = $(@).find('a').attr('href')
				ym_str = ym.replace(/\/archive\//, '')
				count = $(@).find('span').html()
				$ul.append("<li><a href=\"#{ym}\">#{ym_str} (#{count})</a></li>")
	xhr.send(null)
