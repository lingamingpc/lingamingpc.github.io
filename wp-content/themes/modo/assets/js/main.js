jQuery(window).load(function() {
       "use strict";
	jQuery("#status").fadeOut();

	jQuery("#preloader").delay(700).fadeOut("slow");

var screenwidth = jQuery(window).width();
if (screenwidth>1025) {
	  if(navigator.userAgent.match(/Trident\/7\./)) {
          jQuery('.footer_big_wrap').removeClass('cover');
	}
 jQuery('#wrapper').css('margin-bottom', jQuery('.footer_big_wrap.cover').height())};		
})
jQuery(document).ready(function ($) {
		"use strict";
	
		 $('.parallax').scrolly({bgParallax: true});
		$(".post_share a").jqSocialSharer();	
		$('#portfoliolist').mixitup();		
		$(".videofit").fitVids();			
		     $('.image-popup-no-margins').magnificPopup({
       type: 'image',
          closeOnContentClick: true,
          mainClass: 'mfp-img-mobile',
          image: {
            verticalFit: true
          }
        });
				
		$('#topbar .widget.woocommerce.widget_shopping_cart').hide();
		$('#topbar .shop_icon').hover(function () {
			$('.widget.woocommerce.widget_shopping_cart', this).stop().slideToggle(200);
		});		
			$(document).on('click', '.navsearch-icon', function(event){
		event.preventDefault();

		$('body').addClass('navsearch-active');
		$('.js-search-input').focus();
	});
	$(document).on('click', '.search-nav-close', function(){
		$('body').removeClass('navsearch-active');
	});

	$(document).keyup(function(e) {
	  if (e.keyCode == 27  &&  $('body').hasClass('navsearch-active') ) { 
	  	$('body').removeClass('navsearch-active');
	  }   
	});	
 $('[href*="#"]:not([href*="#vc_"], [href="#"], [href*="#tab"] , a[data-vc-container*=".vc_tta"] )').click(function() 


  {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) 
    {
      
      var target = $(this.hash),
      headerHeight = $(".topclass.enable_sticky.topclass-shrink").height() ; 
            
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              
      if (target.length) 
      {
        $('html,body').animate({
          scrollTop: target.offset().top - headerHeight
        }, 500);
        return false;
      }
    }
  });
  
  	jQuery('ul.sf-menu').superfish({
			delay:       500,                            
			animation:   {opacity:'show',height:'show'},  
			speed:       'fast'                          
		});
  
		  $('.flexslider.testimonial').flexslider({
						animation: "slide",
						slideshowSpeed: 5000,
						
						controlNav: true,
										directionNav: false,
										prevText: "<div><i class='left_nav_slider'></i></div>",
										nextText: "<div><i class='right_nav_slider'></i></div>",
						start: function(slider){
						  $('body').removeClass('loading');
						}
					  });  
  

				
       $('ul.slides.el').magnificPopup({
          delegate: 'li a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
              return item.el.attr('title');
            }
          }
        });	
		$('.up_video').magnificPopup({
  type: 'iframe',

  iframe: {
     markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                
              '</div>'
  },

});

	if ($('.up_progress_bar').length > 0){
		 up_progress_bar();
};	
	if ($('.up_counter').length > 0){
		 up_counter();
};
	if ($('.label-p').length > 0){
		 callhoverportfolio();
};
	
  $(document).scroll(function(){
        $('#topbar_left').stop().animate({
            scrollTop : $(this).scrollTop()
        });            
    });	
	var i = 1;	
	$('.loading_more a').on('click', function(e)  {		
		e.preventDefault();		
		var link = $(this).attr('href');
		var $content = '#portfoliolist';
		var $anchor = '.grid_port_paging .loading_more a';
		var $next_href = $($anchor).attr('href'); 
	
		$.get(link+'', function(data){		
	var $new_content = $($content, data).wrapInner('').html(); 
	$next_href = $($anchor, data).attr('href'); 
	$('.mix.portfolio:last').after($new_content); 			
	var min_height = $('.mix.portfolio:first').height();
	$('.mix.portfolio').css('min-height',min_height);			
	$('#portfoliolist').mixitup('remix','all');
	callhoverportfolio();
	if($('.loading_more').attr('rel') > i) {
				$('.loading_more a').attr('href', $next_href); 
			} else {
				$('.loading_more').remove(); 
			}
			$('#portfoliolist .grid_port_paging:last').remove(); 
			$('.mix.portfolio').css('min-height',0);
			
		});
	i++;		
	});	  
});

(function ( $, window, document, undefined ) {
   "use strict";
    var pluginName = 'scrolly',
        defaults = {
            bgParallax: false
        },
        didScroll = false;

    function Plugin( element, options ) {
        this.element = element;
        this.$element = $(this.element);

        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this;
        this.startPosition = this.$element.position().top;
        this.offsetTop = this.$element.offset().top;
        this.height = this.$element.outerHeight(true);
        this.velocity = this.$element.attr('data-velocity');
        this.bgStart = parseInt(this.$element.attr('data-fit'), 10);

        $(document).scroll(function(){
            self.didScroll = true;
        });
        
        setInterval(function() {
            if (self.didScroll) {
                self.didScroll = false;
                self.scrolly();
            }
        }, 10);
    };
var lengte = 5;
		if ($(window).width() > 960) {lengte = 10} else  {lengte = 0}  
	
    Plugin.prototype.scrolly = function() {
        var dT =  $(window).scrollTop(),
            wH = $(window).height(),
         
    position = dT  * this.velocity / + lengte ;
         
        if(this.bgStart){ position = position + this.bgStart; }

        if(this.options.bgParallax === true) {
            this.$element.css({backgroundPosition: '50% '+position+'px'});
        } else {
            this.$element.css({top: position});
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };

})(jQuery, window, document);
	
(function($) {
"use strict";
      // store the slider in a local variable
      var $window = $(window),
          flexslider;

      // tiny helper function to add breakpoints
      function getGridSize() {
       return ( (window.innerWidth || document.documentElement.clientWidth) < 600) ? 2 : ( (window.innerWidth || document.documentElement.clientWidth) < 1200) ? 3 : 4;
      }

      

      $window.load(function() {
        $('.flexslider.carousel').flexslider({
          animation: "slide",
          animationLoop: false,
		  itemWidth: 370,
          itemMargin: 0,
		  pauseOnAction: true,
			pauseOnHover: true,           
			controlNav: false,
		directionNav: true,
			prevText: "<div><i class='left_nav_slider'></i></div>",
			nextText: "<div><i class='right_nav_slider'></i></div>",
          minItems: getGridSize(), // use function to pull in initial value
          maxItems: getGridSize(), // use function to pull in initial value
          start: function(slider){
            $('body').removeClass('loading');
            flexslider = slider;
          }
        });
      });

     if ($('.flexslider.carousel').length > 0){
      $window.resize(function() {
        var gridSize = getGridSize();
	
        flexslider.vars.minItems = gridSize;
        flexslider.vars.maxItems = gridSize;
      });
	  
	  }
	  	  
    })(jQuery);
	   			
	if ( typeof window['up_progress_bar'] !== 'function' ) {
  function up_progress_bar() { 
  "use strict";
    	jQuery('.up_progress_bar').waypoint(function() {
	  		jQuery(this).find('.up_progress_bar_inner').each(function(index) {
	        var $this = jQuery(this),
	            bar = $this.find('.up_bar_v'),
				nume =  $this.find('.prog_count'),
	            val = bar.data('percentage');								
	  		  setTimeout(function(){ bar.css({"height" : val+'%'}); },1000);  			  
	jQuery({someValue: 0}).animate({someValue: val}, {
	
      duration: 1500,
      easing:'swing', 
      step: function() {          
          nume.text(Math.round(this.someValue));
      },                
  });   
					   					  			  			  
	    	});
							
	}, { offset: '85%' });
  }
  
};							
	if ( typeof window['callhoverportfolio'] !== 'function' ) {
  function callhoverportfolio() { 
		jQuery('.portfolio').hover(
					function () {
						jQuery(this).find('.label-p').stop().animate({bottom: 0}, 300, 'easeOutQuad');
									
					},
					function () {
						jQuery(this).find('.label-p').stop().animate({bottom: -260}, 300, 'easeInQuad');													
					}		
				); 
	jQuery('.grid_item portfolio_item').hover(
					function () {
						jQuery(this).find('.label-p').stop().animate({bottom: 0}, 300, 'easeOutQuad');
									
					},
					function () {
						jQuery(this).find('.label-p').stop().animate({bottom: -150}, 300, 'easeInQuad');													
					});  	
  } 
};		
	if ( typeof window['up_counter'] !== 'function' ) {
  function up_counter() { 
  "use strict";
    	jQuery('.up_counter').waypoint(function() {
  jQuery('.timer').each(count);
      
      
      function count(options) {
        var $this = jQuery(this);
        options = jQuery.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      };
							
	}, { offset: '85%' });
  }
  
};

(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};

		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);

			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;

			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};

			$self.data('countTo', data);

			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);

			// initialize the element with the starting value
			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;

				render(value);

				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}

				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;

					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.text(formattedValue);
			}
		});
	};

	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 2000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));


jQuery(document).ready(function($){
	$( 'ul.products li.up-gallery-woo a:first-child' ).hover( function() {
		$( this ).children( '.wp-post-image' ).removeClass( 'fadeInDown' ).addClass( 'productanim fadeOutUp' );
		$( this ).children( '.sec-image' ).removeClass( 'fadeOutUp' ).addClass( 'productanim fadeInDown' );
	}, function() {
		$( this ).children( '.wp-post-image' ).removeClass( 'fadeOutUp' ).addClass( 'fadeInDown' );
		$( this ).children( '.sec-image' ).removeClass( 'fadeInDown' ).addClass( 'fadeOutUp' );
	});
});

