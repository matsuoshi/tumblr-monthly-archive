###
	tumblr-monthly-archive
###

jQuery ($) ->
	# initialize GET arguments
	getArgs = ->
		if location.search.length < 1
			false
		
		args = {}
		data = location.search.substr(1).split('&')
		for val in data
			tmp = val.split('=')
			args[tmp[0]] = tmp[1]
		args
	
	
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
