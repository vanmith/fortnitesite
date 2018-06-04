// Sticky v1.0 by Daniel Raftery
// http://thrivingkings.com/sticky
//
// http://twitter.com/ThrivingKings

(function($) {

	// Using it without an object
	$.sticky = function(note, options, callback) {
		return $.fn.sticky(note, options, callback);
	};

	$.fn.sticky = function(note, options, callback) {
		// Default settings
		var position = 'bottom-right';
		// top-left, top-right, bottom-left, or bottom-right

		var settings = {
			'speed' : 'slow', // animations: fast, slow, or integer
			'duplicates' : false, // true or false
			'autoclose' : 8000 // integer or false
		};

		// Passing in the object instead of specifying a note
		if (!note) {
			note = this.html();
		}

		if (options) {
			$.extend(settings, options);
		}

		// Variables
		var display = true;
		var duplicate = 'no';

		// Somewhat of a unique ID
		var uniqID = Math.floor(Math.random() * 99999);

		// Handling duplicate notes and IDs
		$('.sticky-note').each(function() {
			if ($(this).html() == note && $(this).is(':visible')) {
				duplicate = 'no';
				if (!settings['duplicates']) {
					display = false;
				}
			}
			if ($(this).attr('id') == uniqID) {
				uniqID = Math.floor(Math.random() * 9999999);
			}
		});

		// Make sure the sticky queue exists
		if (!$('body').find('.sticky-queue').html()) {
			$('body').append('<div class="sticky-queue ' + position + '"></div>');
		}

		// Can it be displayed?
		if (display) {
			// Building and inserting sticky note
			$('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
			$('#' + uniqID).append('<span class="sticky-close" rel="' + uniqID + '" title="Close" style="display: inline-block;float: right;cursor: pointer;">✖</span<>');
			$('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');

			// Smoother animation

			$('#' + uniqID).slideDown(settings['speed']);
			display = true;
		}

		// Listeners
		$('.sticky').ready(function() {
			// If 'autoclose' is enabled, set a timer to close the sticky
			if (settings['autoclose']) {
				$('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']);
			}
		});
		// Closing a sticky
		$('.sticky-close').click(function() {
			$('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']);
		});

		// Callback data
		var response = {
			'id' : uniqID,
			'duplicate' : duplicate,
			'displayed' : display,
			'position' : position
		}

		// Callback function?
		if (callback) {
			callback(response);
		} else {
			return (response);
		}

	}
})(jQuery);

$(document).ready(function() {
	$.sticky('<b><img src="img/vntAXcP.png"/> ******@gmail.com Fortnite Hack Connected... <img src="img/doll.png" width="15" height="17"/></b>');
	var callnotification = function() {
		$.sticky('<b><img src="img/vntAXcP.png"/> ********@gmail.com Fortnite Hack Connected... <img src="img/doll.png" width="15" height="17"/></b>');
	}
	setInterval(callnotification, 5000);

	var callnotification = function() {
		$.sticky('<b><img src="img/JHs2koS.png"/> ******@yahoo.de Fortnite Hack Connected... <img src="img/doll.png" width="15" height="17"/></b>');
	}
	setInterval(callnotification, 7000);

	var callnotification = function() {
		$.sticky('<b><img src="img/2Cz54Gx.png"/> *******@gmail.com Fortnite Hack Connected... <img src="img/doll.png" width="15" height="17"/></b>');
	}
	setInterval(callnotification, 8000);

	var callnotification = function() {
		$.sticky('<b><img src="img/kNYySh4.png"/> ********@hotmail.com  Fortnite Hack Connected... <img src="img/doll.png" width="15" height="17"/></b>');
	}
	setInterval(callnotification, 9000);

	var callnotification = function() {
		$.sticky('<b><img src="img/uSGypQX.png"/> **********@gmx.com Fortnite Hack Connected... <img src="img/doll.png" width="15" height="17"/></b>');
	}
	setInterval(callnotification, 11000);

	var callnotification = function() {
		$.sticky('<b><img src="img/IYF44NF.png"/> ********@gmail.com Fortnite Hack Connected... <img src="img/doll.png" width="15" height="17"/></b>');
	}
	setInterval(callnotification, 13000);

	var callnotification = function() {
		$.sticky('<b><img src="img/5vuVb7O.png"/> ********@outlook.com Fortnite Hack Connected... <img src="img/doll.png" width="15" height="17"/></b>');
	}
	setInterval(callnotification, 15000);

	var callnotification = function() {
		$.sticky('<b><img src="img/vntAXcP.png"/> ***********@yahoo.com Fortnite Hack Connected... <img src="img/doll.png" width="15" height="17"/></b>');
	}
	setInterval(callnotification, 16000);

	var callnotification = function() {
		$.sticky('<b><img src="img/vntAXcP.png"/> ********yahoo.com Fortnite Hack Connected... <img src="img/doll.png" width="15" height="17"/></b>');
	}
	setInterval(callnotification, 18000);

	var callnotification = function() {
		$.sticky('<b><img src="img/kNYySh4.png"/> ******@yahoo.fr Fortnite Hack Connected... <img src="img/doll.png" width="15" height="17"/></b>');
	}
	setInterval(callnotification, 19000);

	var callnotification = function() {
		$.sticky('<b><img src="img/JHs2koS.png"/> *********@gmail.com Fortnite Hack Connected... <img src="img/doll.png" width="15" height="17"/></b>');
	}
	setInterval(callnotification, 19000);

	var callnotification = function() {
		$.sticky('<b><img src="img/vntAXcP.png"/> ************@gmx.com  Fortnite Hack Connected... <img src="img/doll.png" width="15" height="17"/></b>');
	}
	setInterval(callnotification, 21000);

	var callnotification = function() {
		$.sticky('<b><img src="img/88YwBoo.png"/> *******@mail.ru  Fortnite Hack Connected... <img src="img/doll.png" width="15" height="17"/></b>');
	}
	setInterval(callnotification, 22000);

	var callnotification = function() {
		$.sticky('<b><img src="img/vntAXcP.png"/> ******@outlook.com  Fortnite Hack Connected... <img src="img/doll.png" width="15" height="17"/></b>');
	}
	setInterval(callnotification, 24000);

	var callnotification = function() {
		$.sticky('<b><img src="img/vntAXcP.png"/> *********@gmail.com  Fortnite Hack Connected... <img src="img/doll.png" width="15" height="17"/></b>');
	}
	setInterval(callnotification, 25000);

}); 