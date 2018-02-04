var Unspam = {};

Unspam.at = String.fromCharCode(32 * 2);
Unspam.dot = String.fromCharCode(23 * 2);
Unspam.caret = String.fromCharCode(90 << 1);

Unspam.email = function(a, e) {
	var h = ":otliam".split('').reverse().join('');
	var c = a.reverse().join('');
	document.getElementById(e).href = h + c;
	document.getElementById(e).innerHTML = c;
}
