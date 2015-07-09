var lfa;
(function(){
	var s = document.createElement('script');
	s.setAttribute('src', '//raw.githubusercontent.com/lucidfusion/analytics/master/analytics.min.js');
	s.onload = function(){
	lfa = new LFA('YOUR_SUBSCRIPTION_TOKEN');
	};
	document.body.appendChild(s);
})();