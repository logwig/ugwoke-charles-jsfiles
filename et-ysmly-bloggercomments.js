/* Yahoo! Smileys For Blogger Comments
 * bY easytins
 * Url:http://www.easytins.com
 */
a = document.getElementById('comments');
if (a) {
	b = a.getElementsByTagName("DD");
	for (i = 0; i < b.length; i++) {
		if (b.item(i).getAttribute('CLASS') == 'comment-body') {
			et_smly = b.item(i).innerHTML.replace(/:\)\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/21.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/O:-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/25.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-bd/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/113.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/7:\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/19.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/2\):\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/48.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\)\]/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/100.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\(\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\;\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:D/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\;\;-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/5.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/7:\P/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/47.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/~\X\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/102.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-\//gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/7.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\/:\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/23.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:x/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/8.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\P/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-\*/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/11.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/=\(\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/12.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-\S\S/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/42.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-\O/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/13.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\X\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/14.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/B-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/16.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\#:-\S/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/18.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-S/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/17.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:7/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/15.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\(:\|/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/37.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\|/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/22.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/=\)\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-B/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/26.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/=\;/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/27.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-c/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/101.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-h/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/103.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-t/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/104.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/8-7/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/105.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\I-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/28.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/8-\|/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/29.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\L-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/29.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-a/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/31.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-\$/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/32.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\[-\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/33.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\O\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/34.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/8-\}/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/35.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/2:-\P/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/36.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/=\P~/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/38.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-\?/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/39.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/#-o/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/40.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/=\D7/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/41.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\@-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/43.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\^o/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/44.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-w/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/45.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\X\_\X/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/109.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\!\!/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/110.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\\m\//gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/111.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-q/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/112.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\^\#\(\^/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/114.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:ar\!/ig, "<img src='http://l.yimg.com/a/i/us/msg/emoticons/pirate_2.gif' alt='' class='etsmly'/>")
			b.item(i).innerHTML = et_smly;
		}
	}
}

var commentadminclass = "";
a = document.getElementById('comments');
if (a) {
	c = a.getElementsByTagName("DD");
	for (i = 0; i < c.length; i++) {
		if (c.item(i).getAttribute('CLASS') == "comment-body-author") {
			et_smly = c.item(i).innerHTML.replace(/:\)\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/21.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/O:-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/25.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-bd/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/113.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/7:\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/19.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/2\):\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/48.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\)\]/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/100.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\(\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\;\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:D/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\;\;-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/5.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/7:\P/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/47.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/~\X\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/102.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-\//gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/7.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\/:\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/23.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:x/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/8.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\P/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-\*/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/11.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/=\(\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/12.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-\S\S/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/42.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-\O/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/13.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\X\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/14.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/B-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/16.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\#:-\S/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/18.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-S/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/17.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:7/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/15.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\(:\|/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/37.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\|/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/22.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/=\)\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-B/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/26.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/=\;/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/27.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-c/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/101.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-h/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/103.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-t/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/104.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/8-7/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/105.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\I-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/28.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/8-\|/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/29.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\L-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/29.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-a/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/31.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-\$/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/32.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\[-\(/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/33.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\O\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/34.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/8-\}/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/35.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/2:-\P/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/36.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/=\P~/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/38.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-\?/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/39.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/#-o/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/40.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/=\D7/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/41.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\@-\)/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/43.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\^o/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/44.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-w/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/45.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\X\_\X/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/109.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:\!\!/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/110.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\\m\//gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/111.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:-q/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/112.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/\^\#\(\^/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/114.gif' alt='' class='etsmly'/>");
			et_smly = et_smly.replace(/:ar\!/ig, "<img src='http://l.yimg.com/a/i/us/msg/emoticons/pirate_2.gif' alt='' class='etsmly'/>")
			c.item(i).innerHTML = et_smly;
		}
	}
}