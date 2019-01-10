jQuery(document).ready(function() {

	new WOW({mobile:false}).init();


$('#gallery-grid').masonry({
		columnWidth: 10,
 		itemSelector: '.grid-item'
});


function countup(className){
		var countBlockTop = $("."+className).offset().top;
		var windowHeight = window.innerHeight;
		var show = true;
					
		$(window).scroll( function (){
			if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
				show = false;
						
				$('.'+className).spincrement({
					from: 1,
					duration: 5000,
				});
			}
		})	
	}
        $(function() {
		countup("countup", $(".countup").text());
});


function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}
if (hasTouch()) {
    try {
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
};




})