function dateDiff(placeholder) {
	var p = $(placeholder).parent();
	var f = $('time.from', p).attr('datetime');
	var t = $('time.to', p).attr('datetime');
	var d = new Date(new Date(t) - new Date(f));
	d.setMonth(d.getMonth() + 1);
	var y = d.getFullYear() - 1970;
	var m = d.getMonth();
	var s = (y == 0 ? '' : (y + ' year') + (y == 1 ? '' : 's') + (m > 0 ? ', ' : '')) + (m > 0 ? m + ' month' + (m > 1 ? 's' : '') : '');
	$(placeholder).html(s);
}

function fadeShowMore() {
	$(this).parent().prev().fadeToggle();
	$(this).text(function(i, t) { return t == "Voir plus" ? "Voir moins" : "Voir plus"; });
	return false;
}

$(document).ready ( function(){
	$('.dateDiffPlaceholder').each(function(i) {
		dateDiff(this);
	});

	$('.moreless').each(function(i) {
		var container = $(this).wrap('<div></div>').parent();
		var link = $('<a href="#">Voir plus</a>');
		container.append(link);
		link.wrap("<p></p>");
		$(this).css("display", "none");

		link.click(fadeShowMore);
	});
});

