var screenIndex = 0, msgIndex = 0;
var screen = [
	[{
		type: 'in',
		msg: 'Hey John, Welcome to The Hilarity Restaurant.'
	},
	{
		type: 'in',
		msg: 'We make you laugh, and make you happy by serving awesome food.'
	},	
	{
		type: 'in',
		msg: 'What can i do for you today?<br><br>(M)enu? (O)rderfood?'
	},
	{
		type: 'out',
		msg: 'Menu'
	},
	{
		type: 'in',
		msg: 'Great, here is the link to our menu<br><a class="messenger__link" href="http://restauran.me/menu" target="_blank">restauran.me/menu</a>'
	}],
	[{
		type: 'in',
		msg: 'Hey John, Welcome to The Hilarity Restaurant.'
	},
	{
		type: 'in',
		msg: 'We make you laugh, and make you happy by serving awesome food.'
	},	
	{
		type: 'in',
		msg: 'What can i do for you today?<br><br>(M)enu? (O)rderfood?'
	},
	{
		type: 'out',
		msg: 'Menu'
	},
	{
		type: 'in',
		msg: 'Great, here is the link to our menu<br><a class="messenger__link" href="http://restauran.me/menu" target="_blank">restauran.me/menu</a>'
	}]
]

// Genearte Markup from screen Array defined above
messengerMarkup = '';

screen.forEach(function (item, index, array) {
	var msg = item;
	messengerMarkup += '<div id="screen-' + index + '" class="clearfix">';
	msg.forEach(function (itemMsg, indexMsg, arrayMsg) {
		messengerMarkup += '<div id="msg-' + index + '-' + indexMsg + '" class="messenger__msg ' + arrayMsg[indexMsg].type + ' msg-hidden">' + arrayMsg[indexMsg].msg + '</div>'
	});
	messengerMarkup += '</div>';
});


// Animate Elements in #screen-wrapper
var animate_next_elem = (function () {

	var msgElemExceeds = (function () {
		var $selectScreen = $('#screen-' + screenIndex);
		$selectScreen.css('display', 'none');
		$selectMsgElem = $('*[id^="msg-' + screenIndex + '"]');
		$selectMsgElem.removeClass('fadeInLeft animated').removeClass('fadeInRight animated').addClass('msg-hidden');
		screenIndex += 1;
		msgIndex = 0;
	});

	var screenElemExceeds = (function () {
		screenIndex = 0;
		msgIndex = 0;
	});

	// upadting msg id so that next message get appended to screen
	var checkCounter = (function () {
		if (screenIndex <= screenLength) {
			if (msgIndex <= msgLength) {
				msgIndex += 1;
			} else if (msgIndex > msgLength) {
				msgElemExceeds();
			}
		} else if (screenIndex > screenLength) {
			screenElemExceeds();
		}
	});

	// toggle element whose type is 'in'
	var toggleInElem = (function ($selectMsgElem) {
		$selectMsgElem.toggleClass('fadeInLeft animated').toggleClass('msg-hidden');
	});

	// toggle element whose type is 'out'
	var toggleOutElem = (function ($selectMsgElem) {
		$selectMsgElem.toggleClass('fadeInRight animated').toggleClass('msg-hidden');
	});

	var screenLength = screen.length - 1;
	if (screenIndex > screenLength)
		screenElemExceeds();

	var msgLength = screen[screenIndex].length - 1;

	if (msgIndex > msgLength)
		msgElemExceeds();

	var $selectScreen = $('#screen-' + screenIndex);
	var $selectMsgElem = $('#msg-' + screenIndex + '-' + msgIndex);
	$selectScreen.css('display', 'block');

	if (screen[screenIndex][msgIndex].type == 'in')
		toggleInElem($selectMsgElem);
	else
		toggleOutElem($selectMsgElem);

	checkCounter();
});

document.addEventListener('DOMContentLoaded', function () {
	// Append Markup in #screen-wrapper
	var screenWrapper = document.getElementById('screen-wrapper');
	screenWrapper.insertAdjacentHTML('afterbegin', messengerMarkup);
});