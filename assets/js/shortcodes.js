(function($)
{	
    "use strict";

    $(document).ready(function()
    {	
    	//global variables that are used on several ocassions
    	$.avia_utilities = $.avia_utilities || {};
    	
    	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && 'ontouchstart' in document.documentElement)
    	{
    		$.avia_utilities.isMobile =  true;
    	}
    	else
    	{
    		$.avia_utilities.isMobile =  false;
    	}
    
    	//activate fixed bg fallback for mobile
    	if($.fn.avia_mobile_fixed)
		$('.avia-bg-style-fixed').avia_mobile_fixed();
    	
    	//activate parallax scrolling for backgrounds.
    	if($.fn.avia_parallax)
		$('.av-parallax').avia_parallax();
    	
    	//calculate the browser height and append a css rule to the head
		if($.fn.avia_browser_height)
		$('.av-minimum-height, .avia-fullscreen-slider, .av-cell-min-height').avia_browser_height();
		
		//calculate the height of each video section
		if($.fn.avia_video_section)
		 $('.av-section-with-video-bg').avia_video_section();
		
		//creates team social icon tooltip
        new $.AviaTooltip({'class': "avia-tooltip", data: "avia-tooltip", delay:0, scope: "body"});
		
		//creates icon element tooltip
		new $.AviaTooltip({'class': "avia-tooltip avia-icon-tooltip", data: "avia-icon-tooltip", delay:0, scope: "body"});

        activate_shortcode_scripts();
        
        //layer slider height helper
        $('.avia-layerslider').layer_slider_height_helper();
        
        //"ajax" portfolio
        $('.grid-links-ajax').avia_portfolio_preview();
        
        // actiavte the masonry script: sorting/loading/etc
		if($.fn.avia_masonry)
		$('.av-masonry').avia_masonry();
		
		//activate the accordion
		if($.fn.aviaccordion)
		$('.aviaccordion').aviaccordion();
		
		
		//activate the accordion
		if($.fn.avia_textrotator)
		$('.av-rotator-container').avia_textrotator();
		
		//activates the tab section shortcode
		if($.fn.avia_sc_tab_section)
		{
			$('.av-tab-section-container').avia_sc_tab_section();
		}
		
		//activates the hor gallery  shortcode
		if($.fn.avia_hor_gallery)
		{
			$('.av-horizontal-gallery').avia_hor_gallery();
		}
		
		
		if($.fn.avia_delayed_animation_in_container)
		{
			$('.av-animation-delay-container').avia_delayed_animation_in_container();
		}
		
		
    });





// -------------------------------------------------------------------------------------------
// ACTIVATE ALL SHORTCODES
// -------------------------------------------------------------------------------------------

	function activate_waypoints(container)
	{
		//activates simple css animations of the content once the user scrolls to an elements
		if($.fn.avia_waypoints)
		{
			if(typeof container == 'undefined'){ container = 'body';};

			$('.avia_animate_when_visible', container).avia_waypoints();
			$('.avia_animate_when_almost_visible', container).avia_waypoints({ offset: '80%'});
			
			if(container == 'body') container = '.avia_desktop body';
			$('.av-animated-generic', container).avia_waypoints({ offset: '95%'});
		}
	}


    function activate_shortcode_scripts(container)
	{
		if(typeof container == 'undefined'){ container = 'body';}
		
		//activates the form shortcode
		if($.fn.avia_ajax_form)
		{
			$('.avia_ajax_form:not( .avia-disable-default-ajax )', container).avia_ajax_form();
		}
		
		activate_waypoints(container);
		
		//activate the video api
		if($.fn.aviaVideoApi)
		{
			$('.avia-slideshow iframe[src*="youtube.com"], .av_youtube_frame, .avia-slideshow iframe[src*="vimeo.com"], .avia-slideshow video').aviaVideoApi({}, 'li');
		}
		
	    //activates the toggle shortcode
		if($.fn.avia_sc_toggle)
		{
			$('.togglecontainer', container).avia_sc_toggle();
		}
		
		//activates the tabs shortcode
		if($.fn.avia_sc_tabs)
		{
			$('.top_tab', container).avia_sc_tabs();
			$('.sidebar_tab', container).avia_sc_tabs({sidebar:true});
		}
		
		//activates behavior and animation for gallery
		if($.fn.avia_sc_gallery)
		{
			$('.avia-gallery', container).avia_sc_gallery();
		}
		
		//activates animated number shortcode
		if($.fn.avia_sc_animated_number)
		{
			$('.avia-animated-number', container).avia_sc_animated_number();
		}
		
		//animation for elements that are not connected like icon shortcode
		if($.fn.avia_sc_animation_delayed)
		{
			$('.av_font_icon', container).avia_sc_animation_delayed({delay:100});
			$('.avia-image-container', container).avia_sc_animation_delayed({delay:100});
			$('.av-hotspot-image-container', container).avia_sc_animation_delayed({delay:100});
			$('.av-animated-generic', container).avia_sc_animation_delayed({delay:100});
		}

		//activates animation for iconlist
		if($.fn.avia_sc_iconlist)
		{
			$('.avia-icon-list.av-iconlist-big', container).avia_sc_iconlist();
		}

		//activates animation for progress bar
		if($.fn.avia_sc_progressbar)
		{
			$('.avia-progress-bar-container', container).avia_sc_progressbar();
		}

		//activates animation for testimonial
		if($.fn.avia_sc_testimonial)
		{
			$('.avia-testimonial-wrapper', container).avia_sc_testimonial();
		}
		
		//activate the fullscreen slider
		$('.avia-slideshow.av_fullscreen', container).aviaFullscreenSlider();
		
		//activate the aviaslider
		$('.avia-slideshow:not(.av_fullscreen)', container).aviaSlider();
		
        //content slider
        $('.avia-content-slider-active', container).aviaSlider({wrapElement: '.avia-content-slider-inner', slideElement:'.slide-entry-wrap', fullfade:true});

        //testimonial slider
        $('.avia-slider-testimonials', container).aviaSlider({wrapElement: '.avia-testimonial-row', slideElement:'.avia-testimonial', fullfade:true});
        
        //load and activate maps
        if($.fn.aviaMaps)
        {
        	$('.avia-google-map-container', container).aviaMaps();
    	}
    	
    	 //load magazine sorting
        if($.fn.aviaMagazine)
        {
        	$('.av-magazine-tabs-active', container).aviaMagazine();
    	}
    	
    	 //load image hotspot
        if($.fn.aviaHotspots)
        {
        	$('.av-hotspot-image-container', container).aviaHotspots();
    	}
    	
    	 //load countdown
        if($.fn.aviaCountdown)
        {
        	$('.av-countdown-timer', container).aviaCountdown();
    	}
    	
    	
    	
    }



// -------------------------------------------------------------------------------------------
// 
// AVIA Countdown
// 
// -------------------------------------------------------------------------------------------
(function($)
{ 
	"use strict";
	
	var _units	= ['weeks','days','hours','minutes','seconds'],
		_second = 1000,
		_minute = _second * 60,
		_hour 	= _minute * 60,
		_day 	= _hour * 24,
		_week	= _day * 7,	
		ticker	= function(_self)
		{
			var _time		= {},
				_now 		= new Date(),
				_timestamp  = _self.end - _now;
			
			if(_timestamp <= 0)
			{
				clearInterval(_self.countdown);
				return;
			}	
			
			_self.time.weeks   	= Math.floor( _timestamp / _week);
			_self.time.days 	= Math.floor((_timestamp % _week) / _day);
			_self.time.hours	= Math.floor((_timestamp % _day) / _hour); 
			_self.time.minutes 	= Math.floor((_timestamp % _hour) / _minute); 
			_self.time.seconds 	= Math.floor((_timestamp % _minute) / _second); 
			
			switch(_self.data.maximum)
			{
				case 1: _self.time.seconds 	= Math.floor(_timestamp / _second); break;
				case 2: _self.time.minutes 	= Math.floor(_timestamp / _minute); break;
				case 3: _self.time.hours	= Math.floor(_timestamp / _hour); 	break;
				case 4: _self.time.days 	= Math.floor(_timestamp / _day); 	break;
			}
			
			for (var i in _self.time)
			{	
				if(typeof _self.update[i] == "object")
				{
					if(_self.firstrun || _self.oldtime[i] != _self.time[i])
					{
						var labelkey = ( _self.time[i] === 1 ) ? "single" : "multi"; 
					
						_self.update[i].time_container.text(_self.time[i]);
						_self.update[i].label_container.text(_self.update[i][labelkey]);
					}
				}
			}
			
			//show ticker
			if(_self.firstrun) _self.container.addClass('av-countdown-active')
			
			_self.oldtime 	= $.extend( {}, _self.time );
			_self.firstrun	= false;
		};
		
	
	$.fn.aviaCountdown = function( options )
	{	
		if(!this.length) return; 

		return this.each(function()
		{
			var _self 			= {};
			_self.update		= {};
			_self.time			= {};			
			_self.oldtime		= {};			
			_self.firstrun		= true;			
			
			_self.container		= $(this);
			_self.data			= _self.container.data();
			_self.end			= new Date(_self.data.year, _self.data.month, _self.data.day, _self.data.hour, _self.data.minute );
			
			for (var i in _units)
			{
				_self.update[_units[i]] = {
					time_container:  _self.container.find('.av-countdown-' + _units[i] + ' .av-countdown-time'),
					label_container: _self.container.find('.av-countdown-' + _units[i] + ' .av-countdown-time-label'),
				};
				
				if(_self.update[_units[i]].label_container.length)
				{
					_self.update[_units[i]].single = _self.update[_units[i]].label_container.data('label');
					_self.update[_units[i]].multi  = _self.update[_units[i]].label_container.data('label-multi');
				}
			}
			
			ticker(_self);
			_self.countdown 	= setInterval(function(){ ticker(_self); }, 1000);

			
		});
	}
	
}(jQuery));



// -------------------------------------------------------------------------------------------
// 
// AVIA Image Hotspots
// 
// -------------------------------------------------------------------------------------------
(function($)
{ 
	"use strict";

	$.fn.aviaHotspots = function( options )
	{
		if(!this.length) return; 

		return this.each(function()
		{
			var _self = {};
			
			_self.container	= $(this);
			_self.hotspots	= _self.container.find('.av-image-hotspot');
			
				_self.container.on('avia_start_animation', function()
				{
					setTimeout(function()
					{
						_self.hotspots.each(function(i)
						{
							var current = $(this);
							setTimeout(function(){ current.addClass('av-display-hotspot'); },300 * i);
						});
					},400);
				});

		});
	}
	
}(jQuery));




// -------------------------------------------------------------------------------------------
// 
// AVIA Magazine function for magazine sorting
// 
// -------------------------------------------------------------------------------------------
(function($)
{ 
	"use strict";
	
	var animating = false,
		methods = {
		
		switchMag: function(clicked, _self)
		{
			var current 		= $(clicked)
			
			if(current.is('.active_sort') || animating) return;
			
			var filter			= current.data('filter'),
				oldContainer	= _self.container.filter(':visible'),
				newContainer	= _self.container.filter('.' + filter);
			
			//switch Class
			animating = true;
			_self.sort_buttons.removeClass('active_sort');
			current.addClass('active_sort');
			
			//apply fixed heiht for transition
			_self.magazine.height(_self.magazine.outerHeight());
			
			//switch items
			oldContainer.avia_animate({opacity:0}, 200, function()
			{
				oldContainer.css({display:'none'});
				newContainer.css({opacity:0, display:'block'}).avia_animate({opacity:1}, 150, function()
				{
					_self.magazine.avia_animate({height: (newContainer.outerHeight() + _self.sort_bar.outerHeight())}, 150, function()
					{
						_self.magazine.height('auto');
						animating = false;
					});
					
				});
			});
		}
	};
	
	
	$.fn.aviaMagazine = function( options )
	{
		if(!this.length) return; 

		return this.each(function()
		{
			var _self = {};
			 
			_self.magazine		= $(this),
			_self.sort_buttons 	= _self.magazine.find('.av-magazine-sort a');
			_self.container		= _self.magazine.find('.av-magazine-group');
			_self.sort_bar		= _self.magazine.find('.av-magazine-top-bar');
			
			_self.sort_buttons.on('click', function(e){ e.preventDefault(); methods.switchMag(this, _self);  } );
		});
	}
	
}(jQuery));

// -------------------------------------------------------------------------------------------
// 
// AVIA MAPS API - loads the google maps api asynchronously 
// 
// afterwards applies the map to the container
// 
// -------------------------------------------------------------------------------------------


(function($)
{
    "use strict";

	$.AviaMapsAPI  =  function(options, container)
	{
		if(typeof window.av_google_map == 'undefined')
		{
			$.avia_utilities.log('Map creation stopped, var av_google_map not found'); return
		}
	
		// gatehr container and map data
		this.container	= container;
		this.$container	= $( container );
		this.$body  	= $('body');
		this.$mapid		= this.$container.data('mapid') - 1; 
		this.$data		= window.av_google_map[this.$mapid];
		this.retina 	= window.devicePixelRatio > 1;
		
		// set up the whole api object
		this._init( options );
	}
	
	$.AviaMapsAPI.apiFiles = 
	{
		loading: false, 
		finished: false, 
		src: 'https://maps.googleapis.com/maps/api/js?v=3.27&callback=aviaOnGoogleMapsLoaded' 
	}
	
  	$.AviaMapsAPI.prototype =
    {
    	_init: function()
    	{
    		this._bind_execution();
    		this._getAPI();
    	},
    	
    	_getAPI: function( )
		{	
			//make sure the api file is loaded only once
			if((typeof window.google == 'undefined' || typeof window.google.maps == 'undefined') && $.AviaMapsAPI.apiFiles.loading == false)
			{	
				$.AviaMapsAPI.apiFiles.loading = true;
				var script 	= document.createElement('script');
				script.type = 'text/javascript';	
				script.src 	= $.AviaMapsAPI.apiFiles.src;
				
				if(avia_framework_globals.gmap_api != 'undefined' && avia_framework_globals.gmap_api != "")
				{
					script.src 	+= "&key=" + avia_framework_globals.gmap_api;
				}
				
      			document.body.appendChild(script);
			}
			else if((typeof window.google != 'undefined' && typeof window.google.maps != 'undefined') || $.AviaMapsAPI.apiFiles.loading == false)
			//else if($.AviaMapsAPI.apiFiles.finished === true)
			{
				this._applyMap();
			}
		},
		
		_bind_execution: function()
		{
			this.$body.on('av-google-maps-api-loaded', $.proxy( this._applyMap, this) );
		},
		
		_applyMap: function()
		{
			if(typeof this.map != 'undefined') return;
			if(!this.$data.marker || !this.$data.marker[0] || !this.$data.marker[0].long || !this.$data.marker[0].long)
			{
				$.avia_utilities.log('Latitude or Longitude missing', 'map-error'); 
				return;
			}
			
			var _self = this,
				mobile_drag = $.avia_utilities.isMobile ? this.$data.mobile_drag_control : true,
				zoomValue 	= this.$data.zoom == "auto" ? 10 : this.$data.zoom;
			
			this.mapVars = {
				mapMaker: false, //mapmaker tiles are user generated content maps. might hold more info but also be inaccurate
				mapTypeControl: false,
				backgroundColor:'transparent',
				streetViewControl: false,
				zoomControl: this.$data.zoom_control,
				//draggable: mobile_drag,
				gestureHandling: 'cooperative',
				scrollwheel: false,
				zoom: zoomValue,
				mapTypeId:google.maps.MapTypeId.ROADMAP,
				center: new google.maps.LatLng(this.$data.marker[0].lat, this.$data.marker[0].long),
				styles:[{featureType: "poi", elementType: "labels", stylers: [ { visibility: "off" }] }]
			};

			this.map = new google.maps.Map(this.container, this.mapVars);
		
			this._applyMapStyle();
			
			if(this.$data.zoom == "auto")
			{
				this._setAutoZoom();
			}
			
			google.maps.event.addListenerOnce(this.map, 'tilesloaded', function() {	
				_self._addMarkers();
			});
		},
		
		_setAutoZoom: function()
		{
			var bounds = new google.maps.LatLngBounds();
			
			for (var key in this.$data.marker) 
			{
				bounds.extend( new google.maps.LatLng (this.$data.marker[key].lat , this.$data.marker[key].long) );
			}
			
			this.map.fitBounds(bounds);
		},
		
		_applyMapStyle: function()
		{
			var stylers = [], style = [], mapType, style_color = "";
			
			if(this.$data.hue != "") stylers.push({hue: this.$data.hue});
			if(this.$data.saturation != "") stylers.push({saturation: this.$data.saturation});
			
			if(stylers.length)
			{
				style = [{
					      featureType: "all",
					      elementType: "all",
					      stylers: stylers
					    }, {
					      featureType: "poi",
					      stylers: [
						  	{ visibility: "off" }
					      ]
					    }];
					    
				
				if(this.$data.saturation == "fill")
				{
					   
					style_color = this.$data.hue ||Â "#242424";
					
					var c = style_color.substring(1);      // strip #
					var rgb = parseInt(c, 16);   // convert rrggbb to decimal
					var r = (rgb >> 16) & 0xff;  // extract red
					var g = (rgb >>  8) & 0xff;  // extract green
					var b = (rgb >>  0) & 0xff;  // extract blue
					
					var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
					var lightness = 1;
					var street_light = 2;
					
					if (luma > 60) {
					    lightness = -1;
					    street_light = 3;
					}
					if (luma > 220) {
					    lightness = -2;
					    street_light = -2;
					}
					
				style = [
{"featureType":"all","elementType":"all","stylers":[{"color":style_color},{"lightness":0}]},
{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":style_color},{"lightness":(25 * street_light)}]},
{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":style_color},{"lightness":3}]},
{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":style_color},{"lightness":30}]},
{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":style_color},{"lightness":30},{"weight":1.2}]},
{"featureType":"landscape","elementType":"geometry","stylers":[{visibility: 'simplified'},{"color":style_color},{"lightness":3}]},
{"featureType":"poi","elementType":"geometry","stylers":[{ "visibility": "off" }]},
{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":style_color},{"lightness":-3}]},
{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":style_color},{"lightness":2},{"weight":0.2}]},
{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":style_color},{"lightness":-3}]},
{"featureType":"road.local","elementType":"geometry","stylers":[{"color":style_color},{"lightness":-3}]},
{"featureType":"transit","elementType":"geometry","stylers":[{"color":style_color},{"lightness":-3}]},
{"featureType":"water","elementType":"geometry","stylers":[{"color":style_color},{"lightness":-20}]}
						];
				}	
				
				mapType = new google.maps.StyledMapType(style, { name:"av_map_style" });
				this.map.mapTypes.set('av_styled_map', mapType);
				this.map.setMapTypeId('av_styled_map');
			}
		},
		
		_addMarkers: function()
		{
			for (var key in this.$data.marker) 
			{	
				var _self = this;
				
				(function(key, _self) 
				{
					setTimeout(function()
					{
							var marker = "";
							
							if(!_self.$data.marker[key] || !_self.$data.marker[key].long || !_self.$data.marker[key].long)
							{
								$.avia_utilities.log('Latitude or Longitude for single marker missing', 'map-error'); 
								return;
							}
							
							_self.$data.LatLng = new google.maps.LatLng(_self.$data.marker[key].lat, _self.$data.marker[key].long);
							
							var markerArgs = {
			        		  flat: false,
						      position: _self.$data.LatLng,
						      animation: google.maps.Animation.BOUNCE,
						      map: _self.map,
						      title: _self.$data.marker[key].address,
						      optimized: false
						    };
						    
						    //set a custom marker image if available. also set the size and reduce the marker on retina size so its sharp
						    if(_self.$data.marker[key].icon && _self.$data.marker[key].imagesize)
						    { 
						    	var size = _self.$data.marker[key].imagesize, half = "", full = "";
						    	
						    	if(_self.retina && size > 40) size = 40;			//retina downsize to at least half the px size
						    	half = new google.maps.Point(size / 2, size ) ; 	//used to position the marker
						    	full = new google.maps.Size(size , size ) ; 		//marker size
						    	markerArgs.icon = new google.maps.MarkerImage(_self.$data.marker[key].icon, null, null, half, full);
						    }
							
			        		marker = new google.maps.Marker(markerArgs);
			        		
			        		setTimeout(function(){ marker.setAnimation(null); _self._infoWindow(_self.map, marker, _self.$data.marker[key]); },500);
			        		
		        	},200 * (parseInt(key,10) + 1));
		        		
		        }(key, _self));
    		}
		},
		
		_infoWindow: function(map, marker, data)
		{
			var info = $.trim(data.content);
			
			if(info != "")
			{
				var infowindow = new google.maps.InfoWindow({
					content: info
				});
				
				google.maps.event.addListener(marker, 'click', function() {
				    infowindow.open(map,marker);
				});
				
				if(data.tooltip_display) infowindow.open(map,marker);
			}
		}
		
    	
    }

    //simple wrapper to call the api. makes sure that the api data is not applied twice
    $.fn.aviaMaps = function( options )
    {
    	return this.each(function()
    	{	
    		var self = $.data( this, 'aviaMapsApi' );
    		
    		if(!self)
    		{
    			self = $.data( this, 'aviaMapsApi', new $.AviaMapsAPI( options, this ) );
    		}
    	});
    }
    
})( jQuery );

//this function is executed once the api file is loaded
window.aviaOnGoogleMapsLoaded = function(){ $('body').trigger('av-google-maps-api-loaded'); $.AviaMapsAPI.apiFiles.finished = true; };


// -------------------------------------------------------------------------------------------
// 
// AVIA VIDEO API - make sure that youtube, vimeo and html 5 use the same interface
// 
// requires froogaloop vimeo library and youtube iframe api (yt can be loaded async)
// 
// -------------------------------------------------------------------------------------------


(function($)
{
    "use strict";

	$.AviaVideoAPI  =  function(options, video, option_container)
	{	
		// actual video element. either iframe or video
		this.$video	= $( video );
		
		// container where the AviaVideoAPI object will be stored as data, and that can receive events like play, pause etc 
		// also the container that allows to overwrite javacript options by adding html data- attributes
		this.$option_container = option_container ? $( option_container ) : this.$video; 
		
		//mobile device?
		this.isMobile 	= $.avia_utilities.isMobile;
		
		//iamge fallback use
		this.fallback = this.isMobile ? this.$option_container.is('.av-mobile-fallback-image') : false;
		
		if(this.fallback) return;
		
		// set up the whole api object
		this._init( options );
		
	}

	$.AviaVideoAPI.defaults  = {
	
		loop: false,
		mute: false,
		controls: false,
		events: 'play pause mute unmute loop toggle reset unload'

	};
	
	$.AviaVideoAPI.apiFiles =
    {
    	youtube : {loaded: false, src: 'https://www.youtube.com/iframe_api' }
    }
	
  	$.AviaVideoAPI.prototype =
    {
    	_init: function( options )
    	{	
			// set slider options
			this.options = this._setOptions(options);
			
			// info which video service we are using: html5, vimeo or youtube
			this.type = this._getPlayerType();
			
			// store the player object to the this.player variable created by one of the APIs (mediaelement, youtube, vimeo)
			this._setPlayer();			
			
			// set to true once the events are bound so it doesnt happen a second time by accident or racing condition
			this.eventsBound = false;
			
			// info if the video is playing
			this.playing = false;
			
			//set css class that video is currently not playing
			this.$option_container.addClass('av-video-paused');
			
			//play pause indicator
			this.pp = $.avia_utilities.playpause(this.$option_container);
    	},
		
		
    	//set the video options by first merging the default options and the passed options, then checking the video element if any data attributes overwrite the option set
    	_setOptions: function(options)
		{	
			var newOptions 	= $.extend( true, {}, $.AviaVideoAPI.defaults, options ),
				htmlData 	= this.$option_container.data(),
				i 			= "";

			//overwritte passed option set with any data properties on the html element
			for (i in htmlData)
			{
				if (htmlData.hasOwnProperty(i) && (typeof htmlData[i] === "string" || typeof htmlData[i] === "number" || typeof htmlData[i] === "boolean"))
				{
					newOptions[i] = htmlData[i]; 
				}
			}
		
			return newOptions;
		},
		
		
		//get the player type
		_getPlayerType: function()
		{
			var vid_src = this.$video.get(0).src || this.$video.data('src');
			
			
			if(this.$video.is('video')) 				return 'html5';
			if(this.$video.is('.av_youtube_frame')) 	return 'youtube';
			if(vid_src.indexOf('vimeo.com') != -1 ) 	return 'vimeo';
			if(vid_src.indexOf('youtube.com') != -1) 	return 'youtube';
		},
		
		//get the player object
		_setPlayer: function()
		{
			var _self = this;
			
			switch(this.type)
			{
				case "html5": 	
				
					this.player = this.$video.data('mediaelementplayer');  
					this._playerReady(); 
					
				break; 
					
				case "vimeo": 	
					
					this.player = Froogaloop(this.$video.get(0)); 
					this._playerReady(); 
					
				break;
					
				case "youtube": 
				
					this._getAPI(this.type);
					$('body').on('av-youtube-iframe-api-loaded', function(){ _self._playerReady(); });
					
				break;
			}
		},
		
		_getAPI: function( api )
		{	
			//make sure the api file is loaded only once
			if($.AviaVideoAPI.apiFiles[api].loaded === false)
			{	
				$.AviaVideoAPI.apiFiles[api].loaded = true;
				//load the file async
				var tag		= document.createElement('script'),
					first	= document.getElementsByTagName('script')[0];
					
				tag.src = $.AviaVideoAPI.apiFiles[api].src;
      			first.parentNode.insertBefore(tag, first);
			}
		},
		
		
		
		//wait for player to be ready, then bind events
		_playerReady: function()
		{	
			var _self = this;
			
			this.$option_container.on('av-video-loaded', function(){ _self._bindEvents(); });
			
			switch(this.type)
			{
				case "html5": 
						
					this.$video.on('av-mediajs-loaded', function(){ _self.$option_container.trigger('av-video-loaded'); });
					this.$video.on('av-mediajs-ended' , function(){ _self.$option_container.trigger('av-video-ended');  });
					
				break;
				case "vimeo": 	
					
					//finish event must be applied after ready event for firefox
					_self.player.addEvent('ready',  function(){ _self.$option_container.trigger('av-video-loaded'); 
					_self.player.addEvent('finish', function(){ _self.$option_container.trigger('av-video-ended');  });
					}); 
					
					// vimeo sometimes does not fire. fallback jquery load event should fix this
					// currently not used because it causes firefox problems
					/*
					this.$video.load(function()
					{ 	
						if(_self.eventsBound == true || typeof _self.eventsBound == 'undefined') return;
				        _self.$option_container.trigger('av-video-loaded');
						$.avia_utilities.log('VIMEO Fallback Trigger');
				    });
					*/
					
				
				break;
				
				case "youtube": 
					
					var params = _self.$video.data();
					
					if(_self._supports_video()) params.html5 = 1;
					
					_self.player = new YT.Player(_self.$video.attr('id'), {
						videoId: params.videoid,
						height: _self.$video.attr('height'),
						width: _self.$video.attr('width'),
						playerVars: params,
						events: {
						'onReady': function(){ _self.$option_container.trigger('av-video-loaded'); },
						'onError': function(player){ $.avia_utilities.log('YOUTUBE ERROR:', 'error', player); },
						'onStateChange': function(event){ 
							if (event.data === YT.PlayerState.ENDED)
							{	
								var command = _self.options.loop != false ? 'loop' : 'av-video-ended';
								_self.$option_container.trigger(command); 
							} 
						  }
						}
					});
					
					
				break;
			}
			
			//fallback always trigger after 2 seconds
			setTimeout(function()
			{ 	
				if(_self.eventsBound == true || typeof _self.eventsBound == 'undefined' || _self.type == 'youtube' ) { return; }
				$.avia_utilities.log('Fallback Video Trigger "'+_self.type+'":', 'log', _self);
				
				_self.$option_container.trigger('av-video-loaded'); 
				
			},2000);
			
		},
		
		//bind events we should listen to, to the player
		_bindEvents: function()
		{	
			if(this.eventsBound == true || typeof this.eventsBound == 'undefined')
			{
				return;
			}
			
			var _self = this, volume = 'unmute';
			
			this.eventsBound = true;
			
			this.$option_container.on(this.options.events, function(e)
			{
				_self.api(e.type);
			});
			
			if(!_self.isMobile)
			{
				//set up initial options
				if(this.options.mute != false) { volume = "mute"; 	 }
				if(this.options.loop != false) { _self.api('loop'); }
				
				_self.api(volume);
			}
			
			//set timeout to prevent racing conditions with other scripts
			setTimeout(function()
			{
				_self.$option_container.trigger('av-video-events-bound').addClass('av-video-events-bound');
			},50);
		},
		
		
		_supports_video: function() {
		  return !!document.createElement('video').canPlayType;
		},
		
		
		/************************************************************************
		PUBLIC Methods
		*************************************************************************/
		
		api: function( action )
		{	
			//commands on mobile can not be executed if the player was not started manually 
			if(this.isMobile && !this.was_started()) return;
			
			// prevent calling of unbound function
			if(this.options.events.indexOf(action) === -1) return;
			
			// broadcast that the command was executed
			this.$option_container.trigger('av-video-'+action+'-executed');
			
			// calls the function based on action. eg: _html5_play()
			if(typeof this[ '_' + this.type + '_' + action] == 'function')
			{
				this[ '_' + this.type + '_' + action].call(this);
			}
			
			//call generic function eg: _toggle() or _play()
			if(typeof this[ '_' + action] == 'function')
			{
				this[ '_' + action].call(this);
			}
			
		},
		
		was_started: function()
		{
			if(!this.player) return false;
		
			switch(this.type)
			{
				case "html5": 
					if(this.player.getCurrentTime() > 0) return true; 
				break; 
					
				case "vimeo": 	
					if(this.player.api('getCurrentTime') > 0) return true; 
				break;
					
				case "youtube": 
					if(this.player.getPlayerState() !== -1) return true; 
				break;
			}
			
			return false;
		},
		
		/************************************************************************
		Generic Methods, are always executed and usually set variables
		*************************************************************************/
		_play: function()
		{
			this.playing = true;
			this.$option_container.addClass('av-video-playing').removeClass('av-video-paused');
		},
		
		_pause: function()
		{
			this.playing = false;
			this.$option_container.removeClass('av-video-playing').addClass('av-video-paused');
		},
		
		_loop: function()
		{
			this.options.loop = true;
		},
		
		_toggle: function( )
		{
			var command = this.playing == true ? 'pause' : 'play';
			
			this.api(command);
			this.pp.set(command);
		},
		
		
		/************************************************************************
		VIMEO Methods
		*************************************************************************/
		
		_vimeo_play: function( )
		{	
			this.player.api('play');
		},
		
		_vimeo_pause: function( )
		{
			this.player.api('pause');	
		},
		
		_vimeo_mute: function( )
		{
			this.player.api('setVolume', 0);
		},
		
		_vimeo_unmute: function( )
		{
			this.player.api('setVolume', 0.7);
		},
		
		_vimeo_loop: function( )
		{
			// currently throws error, must be set in iframe
			// this.player.api('setLoop', true);
		},
		
		_vimeo_reset: function( )
		{
			this.player.api('seekTo',0);
		},
		
		_vimeo_unload: function()
		{
			this.player.api('unload');
		},
		
		/************************************************************************
		YOUTUBE Methods
		*************************************************************************/		
		
		_youtube_play: function( )
		{
			this.player.playVideo();
		},
		
		_youtube_pause: function( )
		{
			this.player.pauseVideo()
		},
		
		_youtube_mute: function( )
		{
			this.player.mute();
		},
		
		_youtube_unmute: function( )
		{
			this.player.unMute();
		},
		
		_youtube_loop: function( )
		{	
			// does not work properly with iframe api. needs to manual loop on "end" event
			// this.player.setLoop(true); 
			if(this.playing == true) this.player.seekTo(0);
		},
		
		_youtube_reset: function( )
		{
			this.player.stopVideo();
		},
		
		_youtube_unload: function()
		{
			this.player.clearVideo();
		},
		
		/************************************************************************
		HTML5 Methods
		*************************************************************************/
		
		_html5_play: function( )
		{
			//disable stoping of other videos in case the user wants to run section bgs
			this.player.options.pauseOtherPlayers = false;
			this.player.play();
		},
		
		_html5_pause: function( )
		{
			this.player.pause();
		},
		
		_html5_mute: function( )
		{
			this.player.setMuted(true);
		},
		
		_html5_unmute: function( )
		{
			this.player.setVolume(0.7);
		},
		
		_html5_loop: function( )
		{
			this.player.options.loop = true;
		},
		
		_html5_reset: function( )
		{	
			this.player.setCurrentTime(0);	
		},
		
		_html5_unload: function()
		{
			this._html5_pause();
			this._html5_reset();
		}
    }

    //simple wrapper to call the api. makes sure that the api data is not applied twice
    $.fn.aviaVideoApi = function( options , apply_to_parent)
    {
    	return this.each(function()
    	{	
    		// by default save the object as data to the initial video. 
    		// in the case of slideshows its more benefitial to save it to a parent element (eg: the slide)
    		var applyTo = this;
    		
    		if(apply_to_parent)
    		{
    			applyTo = $(this).parents(apply_to_parent).get(0);
    		}
    		
    		var self = $.data( applyTo, 'aviaVideoApi' );
    		
    		if(!self)
    		{
    			self = $.data( applyTo, 'aviaVideoApi', new $.AviaVideoAPI( options, this, applyTo ) );
    		}
    	});
    }
    
})( jQuery );

window.onYouTubeIframeAPIReady = function(){ $('body').trigger('av-youtube-iframe-api-loaded'); };



// -------------------------------------------------------------------------------------------
// Masonry
// -------------------------------------------------------------------------------------------

$.fn.avia_masonry = function(options)
{
	//return if we didnt find anything
	if(!this.length) return this;
	
	var the_body = $('body'),
		the_win	 = $(window),
		isMobile = $.avia_utilities.isMobile,
		loading = false,
		methods = {
	
		
		masonry_filter: function()
		{
			var current		= $(this),
				linktext	= current.html(),
		  		selector	= current.data('filter'),
		  		masonry 	= current.parents('.av-masonry:eq(0)'),
		  		container 	= masonry.find('.av-masonry-container:eq(0)'),
		  		links		= masonry.find('.av-masonry-sort a'),
		  		activeCat	= masonry.find('.av-current-sort-title');
				
				links.removeClass('active_sort');
				current.addClass('active_sort');
				container.attr('id', 'masonry_id_'+selector);
				
				if(activeCat.length) activeCat.html(linktext);
				
				methods.applyMasonry(container, selector, function()
				{
					container.css({overflow:'visible'});
				});
				
				return false;
		},
		
		applyMasonry: function(container, selector, callback)
		{
			var filters = selector ? {filter: '.'+selector} : {};
			
			filters['layoutMode'] = 'packery';
			filters['packery'] = {gutter:0};
			filters['percentPosition'] = true;
			filters['itemSelector'] = "a.isotope-item, div.isotope-item";
			
			container.isotope(filters, function()
			{
				the_win.trigger('av-height-change');
			});
			
			if(typeof callback === 'function')
			{
				setTimeout(callback, 0);
			}
		},
		
		show_bricks: function(bricks, callback)
		{
			bricks.each(function(i)
			{
				var currentLink 	= $(this),
					browserPrefix 	= $.avia_utilities.supports('transition'),
					multiplier		= isMobile ? 0 : 100;
				
				setTimeout(function()
				{
					if(browserPrefix === false)
					{
						currentLink.css({visibility:"visible", opacity:0}).animate({opacity:1},1500);
					}
					else
					{
						currentLink.addClass('av-masonry-item-loaded');
					}
					
					if(i == bricks.length - 1 && typeof callback == 'function')
					{
						callback.call();
						the_win.trigger('av-height-change');
					}
					
				}, (multiplier * i));
			});
		},
		
		loadMore: function(e)
		{
			e.preventDefault();
			
			if(loading) return false;
			
			loading = true;
		
			var current		= $(this),
		  		data		= current.data(),
		  		masonry 	= current.parents('.av-masonry:eq(0)'),
		  		container	= masonry.find('.av-masonry-container'),
		  		items		= masonry.find('.av-masonry-entry'),
		  		loader		= $.avia_utilities.loading(),
		  		finished	= function(){ loading = false; loader.hide(); the_body.trigger('av_resize_finished'); };
		  			  	
		  	//calculate a new offset	
		  	if(!data.offset){ data.offset = 0; }	
		  	data.offset += data.items;
		  	data.action = 'avia_ajax_masonry_more';
		  	data.loaded = []; //prevents duplicate entries from beeing loaded when randomized is active
		  	
		  	items.each(function(){
			  	var item_id = $(this).data('av-masonry-item');
			  	if(item_id) data.loaded.push( item_id );
		  	});
		  	
		  	 $.ajax({
				url: avia_framework_globals.ajaxurl,
				type: "POST",
				data:data,
				beforeSend: function()
				{
					loader.show();
				},
				success: function(response)
				{
					if(response.indexOf("{av-masonry-loaded}") !== -1)
					{
						//fetch the response. if any php warnings were displayed before rendering of the items the are removed by the string split
						var response  = response.split('{av-masonry-loaded}'),
							new_items = $(response.pop()).filter('.isotope-item');
							
							//check if we got more items than we need. if not we have reached the end of items
							if(new_items.length > data.items)
							{
								new_items = new_items.not(':last');
							}
							else
							{
								current.addClass('av-masonry-no-more-items');
							}
							
							var load_container = $('<div class="loadcontainer"></div>').append(new_items);
							
							
							
							$.avia_utilities.preload({container: load_container, single_callback:  function()
							{
								var links = masonry.find('.av-masonry-sort a'),
									filter_container = masonry.find('.av-sort-by-term'),
									allowed_filters = filter_container.data("av-allowed-sort");
								
								filter_container.hide();
								
								loader.hide();
								container.isotope( 'insert', new_items); 
								$.avia_utilities.avia_ajax_call(masonry);
								setTimeout( function(){ methods.show_bricks( new_items , finished); },150);
								setTimeout(function(){ the_win.trigger('av-height-change'); }, 550);
								if(links)
								{
									$(links).each(function(filterlinkindex)
									{
										var filterlink = $(this),
										sort = filterlink.data('filter');

										if(new_items)
										{
										    $(new_items).each(function(itemindex){
										        var item = $(this);
												
										        if(item.hasClass(sort) && allowed_filters.indexOf(sort) !== -1)
										        {
										            var term_count = filterlink.find('.avia-term-count').text();
										            filterlink.find('.avia-term-count').text(' ' + (parseInt(term_count) + 1) + ' ');
										
										            if(filterlink.hasClass('avia_hide_sort'))
										            {
										                filterlink.removeClass('avia_hide_sort').addClass('avia_show_sort');
										                masonry.find('.av-masonry-sort .'+sort+'_sep').removeClass('avia_hide_sort').addClass('avia_show_sort');
										                masonry.find('.av-masonry-sort .av-sort-by-term').removeClass('hidden');
										            }
										        }
										    });
										}
									});

								}

                                				filter_container.fadeIn();
							}
						});
					}
					else
					{
						finished();
					}
				},
				error: finished,
				complete: function()
				{
				    
				}
			});
		}

	};

	return this.each(function()
	{	
		var masonry			= $(this),
			container 		= masonry.find('.av-masonry-container'),
			bricks			= masonry.find('.isotope-item'), 
			filter			= masonry.find('.av-masonry-sort').css({visibility:"visible", opacity:0}).on('click', 'a',  methods.masonry_filter),
			load_more		= masonry.find('.av-masonry-load-more').css({visibility:"visible", opacity:0});
			
		$.avia_utilities.preload({container: container, single_callback:  function()
		{
			var start_animation = function()
			{ 
				filter.animate({opacity:1}, 400);
				
				//fix for non aligned elements because of scrollbar
				if(container.outerHeight() + container.offset().top + $('#footer').outerHeight() > $(window).height())
				{
					$('html').css({'overflow-y':'scroll'});
				}
				
				methods.applyMasonry(container, false, function()
				{
					masonry.addClass('avia_sortable_active');
					container.removeClass('av-js-disabled '); 
				});
				
				methods.show_bricks(bricks, function()
				{
					load_more.css({opacity:1}).on('click',  methods.loadMore);
				});
				
				//container.isotope( 'reLayout' );

			};
			
			if(isMobile)
			{
				start_animation();
			}
			else
			{
				masonry.waypoint(start_animation , { offset: '80%'} );
			}
					
			// update columnWidth on window resize
			$(window).on( 'debouncedresize', function()
			{
			  	methods.applyMasonry(container, false, function()
				{
					masonry.addClass('avia_sortable_active');
				});
			});
		}
	});
		
		
	});
};




	
// -------------------------------------------------------------------------------------------
// Avia AJAX Portfolio
// -------------------------------------------------------------------------------------------

(function($)
{ 
	"use strict";
	$.avia_utilities = $.avia_utilities || {};
	
	$.fn.avia_portfolio_preview = function(passed_options) 
	{	
		var win  = $(window),
		the_body = $('body'),
		isMobile = $.avia_utilities.isMobile,
		defaults = 
		{
			open_in:	'.portfolio-details-inner',
			easing:		'easeOutQuint',
			timing:		800,
			transition:	'slide' // 'fade' or 'slide'
		},
		
		options = $.extend({}, defaults, passed_options);
	
		return this.each(function()
		{	
			var container			= $(this),
				portfolio_id		= container.data('portfolio-id'),
				target_wrap			= $('.portfolio_preview_container[data-portfolio-id="' + portfolio_id + '"]'),
				target_container	= target_wrap.find(options.open_in),
				items				= container.find('.grid-entry'),
				content_retrieved	= {},
				is_open				= false,
				animating			= false,
				index_open			= false,
				ajax_call			= false,
				methods,
				controls,
				loader				= $.avia_utilities.loading();
				
			methods = 
			{
				load_item: function(e)
				{
					e.preventDefault();

					var link			= $(this),
						post_container	= link.parents('.post-entry:eq(0)'),
						post_id			= "ID_" + post_container.data('ajax-id'),
						clickedIndex	= items.index(post_container);
					
					//check if current item is the clicked item or if we are currently animating
					if(post_id === is_open || animating == true) 
					{
						return false;
					}
					
					animating = true;
					
					container.find('.active_portfolio_item').removeClass('active_portfolio_item');
					post_container.addClass('active_portfolio_item');
					loader.show();
					
					methods.ajax_get_contents(post_id, clickedIndex);
				},
				
				scroll_top: function()
				{
					setTimeout(function()
					{
						var target_offset = target_wrap.offset().top - 175,
							window_offset = win.scrollTop();
											
						if(window_offset > target_offset || target_offset - window_offset > 100  )
						{
							$('html:not(:animated),body:not(:animated)').animate({ scrollTop: target_offset }, options.timing, options.easing);
						}
					},10);
				},
				
				attach_item: function(post_id)
				{
					content_retrieved[post_id] = $(content_retrieved[post_id]).appendTo(target_container);
					ajax_call = true;
				},
				
				remove_video: function()
				{
					var del = target_wrap.find('iframe, .avia-video').parents('.ajax_slide:not(.open_slide)');	
					
						if(del.length > 0)
						{
							del.remove();
							content_retrieved["ID_" + del.data('slideId')] = undefined;
						}
				},
				
				show_item: function(post_id, clickedIndex)
				{
				
					//check if current item is the clicked item or if we are currently animating
					if(post_id === is_open) 
					{
						return false;
					}
					animating = true;
					
					
					loader.hide();
					
					if(false === is_open)
					{
						target_wrap.addClass('open_container');
						content_retrieved[post_id].addClass('open_slide');
						
						methods.scroll_top();
						
						target_wrap.css({display:'none'}).slideDown(options.timing, options.easing, function()
						{
							if(ajax_call)
							{ 
								activate_shortcode_scripts(content_retrieved[post_id]); 
								$.avia_utilities.avia_ajax_call(content_retrieved[post_id]);
								the_body.trigger('av_resize_finished');
								ajax_call = false; 
							}
							
							methods.remove_video();
							the_body.trigger('av_resize_finished');
						});
						
							index_open	= clickedIndex;
							is_open		= post_id;
							animating	= false;
						
						
						
					}
					else
					{
						methods.scroll_top();
					
						var initCSS = { zIndex:3 },
							easing	= options.easing;
							
						if(index_open > clickedIndex) { initCSS.left = '-110%'; }
						if(options.transition === 'fade'){ initCSS.left = '0%'; initCSS.opacity = 0; easing = 'easeOutQuad'; }
						
						//fixate height for container during animation
						target_container.height(target_container.height()); //outerHeight = border problems?
						
						content_retrieved[post_id].css(initCSS).avia_animate({'left':"0%", opacity:1}, options.timing, easing);
						content_retrieved[is_open].avia_animate({opacity:0}, options.timing, easing, function()
						{
							content_retrieved[is_open].attr({'style':""}).removeClass('open_slide');
							content_retrieved[post_id].addClass('open_slide');
																										  //+ 2 fixes border problem (slides move up and down 2 px on transition)
							target_container.avia_animate({height: content_retrieved[post_id].outerHeight() + 2}, options.timing/2, options.easing, function()
							{
								target_container.attr({'style':""});
								is_open		= post_id;
								index_open	= clickedIndex;
								animating	= false;
								
								methods.remove_video();
								if(ajax_call)
								{ 
									the_body.trigger('av_resize_finished');
									activate_shortcode_scripts(content_retrieved[post_id]); 
									$.avia_utilities.avia_ajax_call(content_retrieved[post_id]);
									ajax_call = false; 
								}
	
							});
							
						});		
					}
				},
				
				ajax_get_contents: function(post_id, clickedIndex)
				{
					if(content_retrieved[post_id] !== undefined)
					{
						methods.show_item(post_id, clickedIndex);
						return;
					}
					
					content_retrieved[post_id] = $('#avia-tmpl-portfolio-preview-' + post_id.replace(/ID_/,"")).html();
					
					//this line is necessary to prevent w3 total cache from messing up the portfolio if inline js is compressed
					content_retrieved[post_id] = content_retrieved[post_id].replace('/*<![CDATA[*/','').replace('*]]>','');
					
					methods.attach_item(post_id);
					
					$.avia_utilities.preload({container: content_retrieved[post_id] , single_callback:  function(){ methods.show_item(post_id, clickedIndex); }});
				},
				
				add_controls: function()
				{
					controls = target_wrap.find('.ajax_controlls');

					target_wrap.avia_keyboard_controls({27:'.avia_close', 37:'.ajax_previous', 39:'.ajax_next'});
					//target_wrap.avia_swipe_trigger({prev:'.ajax_previous', next:'.ajax_next'});
					
					items.each(function(){
					
						var current = $(this), overlay;
						
						current.addClass('no_combo').bind('click', function(event)
						{
							overlay = current.find('.slideshow_overlay');
							
							if(overlay.length)
							{
								event.stopPropagation();
								methods.load_item.apply(current.find('a:eq(0)'));
								return false;
							}
						});
						
						
					});
				},
				
				control_click: function()
				{
					var showItem,
						activeID = container.find('.active_portfolio_item').data('ajax-id'),
						active   = container.find('.post-entry-'+activeID);
				
					switch(this.hash)
					{
						case '#next': 
						
							showItem = active.nextAll('.post-entry:visible:eq(0)').find('a:eq(0)');
							if(!showItem.length) { showItem = $('.post-entry:visible:eq(0)', container).find('a:eq(0)'); }
							showItem.trigger('click');
					
						break;
						case '#prev': 
							
							showItem = active.prevAll('.post-entry:visible:eq(0)').find('a:eq(0)');
							if(!showItem.length) { showItem = $('.post-entry:visible:last', container).find('a:eq(0)'); }
							showItem.trigger('click');
						
						break;
						case '#close':
						
							animating = true;
							
							target_wrap.slideUp( options.timing, options.easing, function()
							{ 
								container.find('.active_portfolio_item').removeClass('active_portfolio_item');
								content_retrieved[is_open].attr({'style':""}).removeClass('open_slide');
								target_wrap.removeClass('open_container');
								animating = is_open = index_open = false;
								methods.remove_video();
								the_body.trigger('av_resize_finished');
							});
							
						break;
					}
					return false;
				},
				
				
				resize_reset: function()
				{
					if(is_open === false)
					{
						target_container.html('');
						content_retrieved	= [];
					}
				}
			};
			
			methods.add_controls();
			
			container.on("click", "a", methods.load_item);
			controls.on("click", "a", methods.control_click);
			if(jQuery.support.leadingWhitespace) { win.bind('debouncedresize', methods.resize_reset); }
			
		});
	};
}(jQuery));	



// -------------------------------------------------------------------------------------------
// Fullscreen Slideshow 
// 
// extends avia slideshow script with a more sophisticated preloader and fixed size for slider
// -------------------------------------------------------------------------------------------


	$.AviaFullscreenSlider  =  function(options, slider)
	{
	    this.$slider  	= $( slider ); 
	    this.$inner	  	= this.$slider.find('.avia-slideshow-inner');
	    this.$innerLi	= this.$inner.find('>li');
	    this.$caption 	= this.$inner.find('.avia-slide-wrap .caption_container');
	    this.$win	  	= $( window );
	    this.isMobile 	= $.avia_utilities.isMobile;
	    this.property 	= {};
	    this.scrollPos	= "0";
	    this.transform3d= document.documentElement.className.indexOf('avia_transform3d') !== -1 ? true : false;
	    this.ticking 	= false; 
	    
	    
	    if($.avia_utilities.supported.transition === undefined)
		{
			$.avia_utilities.supported.transition = $.avia_utilities.supports('transition');
		}
		
	    this._init( options );
	}

	$.AviaFullscreenSlider.defaults  = {

		//height of the slider in percent
		height: 100,
		
		//subtract elements from the height
		subtract: '#wpadminbar, #header, #main>.title_container'
		
		
	};

  	$.AviaFullscreenSlider.prototype =
    {
    	_init: function( options )
    	{
    		var _self = this;
    		//set the default options
    		this.options = $.extend( true, {}, $.AviaFullscreenSlider.defaults, options );
    		
    		if(this.$slider.data('slide_height')) this.options.height = this.$slider.data('slide_height');
    		
    		//if background attachment is set to fixed or scroll disable the parallax effect
    		this.options.parallax_enabled = this.$slider.data('image_attachment') == "" ? true : false;
    		
    		//elements that get subtracted from the image height
    		this.$subtract = $(this.options.subtract);
    		
    		
			// set the slideshow size
			this._setSize(); 
    		
			// set resizing script on window resize
			this.$win.on( 'debouncedresize',  $.proxy( this._setSize, this) );
    		
    		//parallax scroll if element if leaving viewport
			setTimeout(function()
			{
				if(!_self.isMobile && _self.options.parallax_enabled) //disable parallax scrolling on mobile
    			{
	    			_self.$win.on( 'scroll', $.proxy( _self._on_scroll, _self) );
    			}
    			
    		},100);
			/**/
    		
			//activate the defaule slider
			this.$slider.aviaSlider({bg_slider:true});
			
			
    	},
    	
    	_on_scroll: function(e)
    	{
	    	var _self = this;
	    	
	    	if(!_self.ticking) {
		     _self.ticking = true;
		      window.requestAnimationFrame( $.proxy( _self._parallax_scroll, _self) );
		    }
    	},
    	
    	
    	_fetch_properties: function(slide_height)
		{
			this.property.offset 	= this.$slider.offset().top;
			this.property.wh 		= this.$win.height();
			this.property.height 	= slide_height || this.$slider.outerHeight();
			
			//re-position the slider
			this._parallax_scroll();
		},
    	
    	_setSize: function( )
    	{	
    		if(!$.fn.avia_browser_height)
    		{
    	
    		var viewport		= this.$win.height(),
    			slide_height	= Math.ceil( (viewport / 100) * this.options.height );
			
			if(this.$subtract.length && this.options.height == 100)
			{
	    		this.$subtract.each(function()
	    		{
	    			slide_height -= this.offsetHeight - 0.5;
	    		});
    		}
    		else
    		{
    			slide_height -= 1;
    		}
    		this.$slider.height(slide_height).removeClass('av-default-height-applied');
    		this.$inner.css('padding',0);
    		}
    		
    		
    		this._fetch_properties(slide_height);
    	},
    	
    	_parallax_scroll: function(e)
    	{
    		if(this.isMobile || ! this.options.parallax_enabled) return; //disable parallax scrolling on mobile
    	
    		var winTop 		= this.$win.scrollTop(),
    			winBottom	=  winTop + this.property.wh,
    			scrollPos 	= "0", 
    			prop 		= {}, prop2 = {};
    		
    		if(this.property.offset < winTop && winTop <= this.property.offset + this.property.height)
    		{	
    			scrollPos = Math.round( (winTop - this.property.offset) * 0.3 );
    		}
    		
    		if(this.scrollPos != scrollPos)
    		{	
    			//slide background parallax
    			this.scrollPos = scrollPos;
    			
    			//currently no 3d transform, because of browser quirks
    			//this.transform3d = false;
    			
    			if(this.transform3d)
    			{
    				prop[$.avia_utilities.supported.transition+"transform"] = "translate3d(0px,"+ scrollPos +"px,0px)";
    			}
    			else
    			{
    				prop[$.avia_utilities.supported.transition+"transform"] = "translate(0px,"+ scrollPos +"px)";
    			}
    			
    			
    			this.$inner.css(prop);
    			
    			
    			
    			//slider caption parallax
    			
				// prop2[$.avia_utilities.supported.transition+"transform"] = "translate(0px,-"+ ( scrollPos * 1) +"px)";
				/*
	    		prop2['opacity'] = Math.ceil((this.$slider.height() - (scrollPos * 2)) / 100)/ 10;
	    		prop2['opacity'] = prop2['opacity'] < 0 ? 0 : prop2['opacity'];
	    		this.$caption.css(prop2);
				*/
    		}
    		
    		this.ticking = false;
    	}
    };



$.fn.aviaFullscreenSlider = function( options )
{
	return this.each(function()
	{
		var active = $.data( this, 'aviaFullscreenSlider' );

		if(!active)
		{
			//make sure that the function doesnt get aplied a second time
			$.data( this, 'aviaFullscreenSlider', 1 );
			
			//create the preparations for fullscreen slider
			new $.AviaFullscreenSlider( options, this );
		}
	});
}
	
// -------------------------------------------------------------------------------------------
// makes sure that the fixed container height is removed once the layerslider is loaded, so it adapts to the screen resolution
// -------------------------------------------------------------------------------------------

	$.AviaParallaxElement  =  function(options, element)
	{
	    this.$el  	  	= $( element ).addClass('active-parallax');
	    this.$win	  	= $( window );
	    this.$body	  	= $( 'body' );
	    this.$parent  	= this.$el.parent();
	    this.property	= {};
	    this.isMobile 	= $.avia_utilities.isMobile;
	    this.ratio		= this.$el.data('avia-parallax-ratio') || 0.5;
	    this.transform  = document.documentElement.className.indexOf('avia_transform') !== -1 ? true : false;
	    this.transform3d= document.documentElement.className.indexOf('avia_transform3d') !== -1 ? true : false;
	    this.ticking	= false;
	    
	    if($.avia_utilities.supported.transition === undefined)
		{
			$.avia_utilities.supported.transition = $.avia_utilities.supports('transition');
		}
	    
	    this._init( options );
	}
	
	$.AviaParallaxElement.prototype = {
	
		_init: function( options )
    	{
    		var _self = this;
			if(_self.isMobile)
			{
				return; //disable parallax scrolling on mobile
			}
			
			//fetch window constants
			setTimeout(function()
			{
    			_self._fetch_properties();
    		},30);
			
			this.$win.on("debouncedresize av-height-change",  $.proxy( _self._fetch_properties, _self));
			this.$body.on("av_resize_finished",  $.proxy( _self._fetch_properties, _self));
			
			
			
			//activate the scrolling
			setTimeout(function()
			{
				_self.$win.on( 'scroll', $.proxy( _self._on_scroll, _self) );
    			
    		},100);
		},
		
		_fetch_properties: function()
		{
			this.property.offset 	= this.$parent.offset().top;
			this.property.wh 		= this.$win.height();
			this.property.height 	= this.$parent.outerHeight();
			
			//set the height of the element based on the windows height, offset ratio and parent height
			this.$el.height(Math.ceil((this.property.wh * this.ratio) + this.property.height));
			
			//re-position the element
			this._parallax_scroll();
		},
		
		_on_scroll: function(e)
    	{
	    	var _self = this;
	    	
	    	if(!_self.ticking) {
		     _self.ticking = true;
		      window.requestAnimationFrame( $.proxy( _self._parallax_scroll, _self) );
		    }
    	},
		
		_parallax_scroll: function(e)
    	{
    		var winTop		=  this.$win.scrollTop(),
    			winBottom	=  winTop + this.property.wh,
    			scrollPos 	= "0", 
    			prop = {};
    		
    		//shift element when it moves into viewport
    		if(this.property.offset < winBottom && winTop <= this.property.offset + this.property.height)
    		{	
    			scrollPos = Math.ceil( (winBottom - this.property.offset) * this.ratio );
    			
    			//parallax movement via backround position change, although
    			if(this.transform3d)
    			{
    				prop[$.avia_utilities.supported.transition+"transform"] = "translate3d(0px,"+ scrollPos +"px, 0px)";
    			}
    			else if(this.transform)
    			{
    				prop[$.avia_utilities.supported.transition+"transform"] = "translate(0px,"+ scrollPos +"px)";
    			}
    			else
    			{
    				prop["background-position"] = "0px "+ scrollPos +"px";
    			}
	    		
	    		this.$el.css(prop);
    		}
    		
    		this.ticking = false;
    	}
	};


$.fn.avia_parallax = function(options)
{
	return this.each(function()
    	{
    		var self = $.data( this, 'aviaParallax' );

    		if(!self)
    		{
    			self = $.data( this, 'aviaParallax', new $.AviaParallaxElement( options, this ) );
    		}
    	});
}


// -------------------------------------------------------------------------------------------
// Helper to allow fixed bgs on mobile
// -------------------------------------------------------------------------------------------

$.fn.avia_mobile_fixed = function(options)
{
	var isMobile = $.avia_utilities.isMobile;
	if(!isMobile) return;
	
	return this.each(function()
	{
		var current				= $(this).addClass('av-parallax-section'),
			$background 		= current.attr('style'),
			$attachment_class 	= current.data('section-bg-repeat'),
			template			= "";
			
			if($attachment_class == 'stretch' || $attachment_class == 'no-repeat' )
			{
				$attachment_class = " avia-full-stretch"; 
			}
			else
			{
				$attachment_class = ""; 
			}
			
			template = "<div class='av-parallax " + $attachment_class + "' data-avia-parallax-ratio='0.0' style = '" + $background + "' ></div>";
			
			current.prepend(template);
			current.attr('style','');
	});
}




	
// -------------------------------------------------------------------------------------------
// makes sure that the fixed container height is removed once the layerslider is loaded, so it adapts to the screen resolution
// -------------------------------------------------------------------------------------------

$.fn.layer_slider_height_helper = function(options)
{
	return this.each(function()
	{
		var container 	= $(this),
			first_div 	= container.find('>div:first'),
			timeout 	= false,
			counter 	= 0,
			reset_size 	= function()
			{
				if(first_div.height() > 0 || counter > 5)
				{
					container.height('auto');
				}
				else
				{
					timeout = setTimeout(reset_size, 500);
					counter++;
				}
			};

		if(!first_div.length) return;

		timeout = setTimeout(reset_size, 0);
	});
}

// -------------------------------------------------------------------------------------------
// testimonial shortcode javascript
// -------------------------------------------------------------------------------------------

$.fn.avia_sc_testimonial = function(options)
{
	return this.each(function()
	{
		var container = $(this), elements = container.find('.avia-testimonial');


		//trigger displaying of thumbnails
		container.on('avia_start_animation', function()
		{
			elements.each(function(i)
			{
				var element = $(this);
				setTimeout(function(){ element.addClass('avia_start_animation') }, (i * 150));
			});
		});
	});
}


// -------------------------------------------------------------------------------------------
// Progress bar shortcode javascript
// -------------------------------------------------------------------------------------------

$.fn.avia_sc_progressbar = function(options)
{
	return this.each(function()
	{
		var container = $(this), elements = container.find('.avia-progress-bar');
		
		
		//trigger displaying of progress bar
		container.on('avia_start_animation', function()
		{
			elements.each(function(i)
			{
				var element = $(this)
				
				setTimeout(function()
				{ 
					element.find('.progress').addClass('avia_start_animation') 
					element.find('.progressbar-percent').avia_sc_animated_number(
					{
						instant_start:true, simple_up:true, start_timer: 10
					});
					
				}, (i * 250));
			});
		});
	});
}

// -------------------------------------------------------------------------------------------
// Iconlist shortcode javascript
// -------------------------------------------------------------------------------------------

$.fn.avia_sc_iconlist = function(options)
{
	return this.each(function()
	{
		var iconlist = $(this), elements = iconlist.find('>li');


		//trigger displaying of thumbnails
		iconlist.on('avia_start_animation', function()
		{
			elements.each(function(i)
			{
				var element = $(this);
				setTimeout(function(){ element.addClass('avia_start_animation') }, (i * 350));
			});
		});
	});
}


// -------------------------------------------------------------------------------------------
//  shortcode javascript for delayed animation even when non connected elements are used
// -------------------------------------------------------------------------------------------

$.fn.avia_sc_animation_delayed = function(options)
{
	var global_timer = 0,
		delay = options.delay || 50,
		max_timer = 10,
		new_max = setTimeout(function(){ max_timer = 20; }, 500);
	
	return this.each(function()
	{
		var elements = $(this);

		//trigger displaying of thumbnails
		elements.on('avia_start_animation', function()
		{
			var element = $(this);
			 
			if(global_timer < max_timer) global_timer ++;
			
			setTimeout(function()
			{ 
				element.addClass('avia_start_delayed_animation'); 
				if(global_timer > 0) global_timer --; 
			
			}, (global_timer * delay));
			
		});
	});
}

/*delayd animations when used within tab sections or similar elements. this way they get animated each new time a tab is shown*/
$.fn.avia_delayed_animation_in_container = function(options)
{
	return this.each(function()
	{
		var elements = $(this);
		
		elements.on('avia_start_animation_if_current_slide_is_active', function()
		{
			var current = $(this),
				animate = current.find('.avia_start_animation_when_active');
				
				animate.addClass('avia_start_animation').trigger('avia_start_animation');
		});
		
		elements.on('avia_remove_animation', function()
		{
			var current = $(this),
				animate = current.find('.avia_start_animation_when_active, .avia_start_animation');
				animate.removeClass('avia_start_animation avia_start_delayed_animation');
		});
	});
}





// -------------------------------------------------------------------------------------------
// Section Height Helper
// -------------------------------------------------------------------------------------------

$.fn.avia_browser_height = function()
{
	if(!this.length) return;
	
	var win			= $(window),
		html_el		= $('html'),
		subtract	= $('#wpadminbar, #header.av_header_top:not(.html_header_transparency #header), #main>.title_container'),
		css_block	= $("<style type='text/css' id='av-browser-height'></style>").appendTo('head:first'), 
		sidebar_menu= $('.html_header_sidebar #top #header_main'),
		full_slider	= $('.html_header_sidebar .avia-fullscreen-slider.avia-builder-el-0.avia-builder-el-no-sibling').addClass('av-solo-full'),
		calc_height = function()
		{
			var css			= "",
				wh100 		= win.height(),
				ww100 		= win.width(),
				wh100_mod 	= wh100,
				whCover		= (wh100 / 9) * 16,
				wwCover		= (ww100 / 16) * 9,
				wh75		= Math.round( wh100 * 0.75 ),
				wh50		= Math.round( wh100 * 0.5  ),
				wh25		= Math.round( wh100 * 0.25 ),
				solo		= 0;
			
			if(sidebar_menu.length) solo = sidebar_menu.height();
			
			subtract.each(function(){ wh100_mod -= this.offsetHeight - 1; });	
			
			var whCoverMod	= (wh100_mod / 9) * 16;
			
			//fade in of section content with minimum height once the height has been calculated
			css += ".avia-section.av-minimum-height .container{opacity: 1; }\n";
			
			//various section heights (100-25% as well as 100% - header/adminbar in case its the first builder element)
			css += ".av-minimum-height-100 .container, .avia-fullscreen-slider .avia-slideshow, #top.avia-blank .av-minimum-height-100 .container, .av-cell-min-height-100 > .flex_cell{height:"+wh100+"px;}\n";
			css += ".av-minimum-height-75 .container, .av-cell-min-height-75 > .flex_cell	{height:"+wh75+"px;}\n";
			css += ".av-minimum-height-50 .container, .av-cell-min-height-50 > .flex_cell	{height:"+wh50+"px;}\n";
			css += ".av-minimum-height-25 .container, .av-cell-min-height-25 > .flex_cell	{height:"+wh25+"px;}\n";
			css += ".avia-builder-el-0.av-minimum-height-100 .container, .avia-builder-el-0.avia-fullscreen-slider .avia-slideshow, .avia-builder-el-0.av-cell-min-height-100 > .flex_cell{height:"+wh100_mod+"px;}\n";
			
			css += "#top .av-solo-full .avia-slideshow {min-height:"+solo+"px;}\n";
			
			//fullscreen video calculations
			if(ww100/wh100 < 16/9)
			{
				css += "#top .av-element-cover iframe, #top .av-element-cover embed, #top .av-element-cover object, #top .av-element-cover video{width:"+whCover+"px; left: -"+(whCover - ww100)/2+"px;}\n";
			}
			else
			{
				css += "#top .av-element-cover iframe, #top .av-element-cover embed, #top .av-element-cover object, #top .av-element-cover video{height:"+wwCover+"px; top: -"+(wwCover - wh100)/2+"px;}\n";
			}
			
			if(ww100/wh100_mod < 16/9)
			{
				css += "#top .avia-builder-el-0 .av-element-cover iframe, #top .avia-builder-el-0 .av-element-cover embed, #top .avia-builder-el-0 .av-element-cover object, #top .avia-builder-el-0 .av-element-cover video{width:"+whCoverMod+"px; left: -"+(whCoverMod - ww100)/2+"px;}\n";
			}
			else
			{
				css += "#top .avia-builder-el-0 .av-element-cover iframe, #top .avia-builder-el-0 .av-element-cover embed, #top .avia-builder-el-0 .av-element-cover object, #top .avia-builder-el-0 .av-element-cover video{height:"+wwCover+"px; top: -"+(wwCover - wh100_mod)/2+"px;}\n";
			}
			
			//ie8 needs different insert method
			try{
				css_block.text(css); 
			}
			catch(err){
				css_block.remove();
				css_block = $("<style type='text/css' id='av-browser-height'>"+css+"</style>").appendTo('head:first');
			}
			
			
			setTimeout(function(){ win.trigger('av-height-change'); /*broadcast the height change*/ },100);
		};
	
	win.on( 'debouncedresize', calc_height);
	calc_height();
}

// -------------------------------------------------------------------------------------------
// Video Section helper
// -------------------------------------------------------------------------------------------

$.fn.avia_video_section = function()
{
	if(!this.length) return;
	
	var elements	= this.length, content = "",
		win			= $(window),
		css_block	= $("<style type='text/css' id='av-section-height'></style>").appendTo('head:first'), 
		calc_height = function(section, counter)
		{
			if(counter === 0) { content = "";}
		
			var css			= "",
				the_id		= '#' +section.attr('id'),
				wh100 		= section.height(),
				ww100 		= section.width(),
				aspect		= section.data('sectionVideoRatio').split(':'),
				video_w		= aspect[0],
				video_h		= aspect[1],
				whCover		= (wh100 / video_h ) * video_w,
				wwCover		= (ww100 / video_w ) * video_h;
			
			//fullscreen video calculations
			if(ww100/wh100 < video_w/video_h)
			{
				css += "#top "+the_id+" .av-section-video-bg iframe, #top "+the_id+" .av-section-video-bg embed, #top "+the_id+" .av-section-video-bg object, #top "+the_id+" .av-section-video-bg video{width:"+whCover+"px; left: -"+(whCover - ww100)/2+"px;}\n";
			}
			else
			{
				css += "#top "+the_id+" .av-section-video-bg iframe, #top "+the_id+" .av-section-video-bg embed, #top "+the_id+" .av-section-video-bg object, #top "+the_id+" .av-section-video-bg video{height:"+wwCover+"px; top: -"+(wwCover - wh100)/2+"px;}\n";
			}
			
			content = content + css;
			
			if(elements == counter + 1)
			{
				//ie8 needs different insert method
				try{
					css_block.text(content);
				}
				catch(err){
					css_block.remove();
					css_block = $("<style type='text/css' id='av-section-height'>"+content+"</style>").appendTo('head:first');
				}
			}
		};
		
		
	return this.each(function(i)
	{
		var self = $(this);
		
		win.on( 'debouncedresize', function(){ calc_height(self, i); });
		calc_height(self, i);
	});
	
}








// -------------------------------------------------------------------------------------------
// Gallery shortcode javascript
// -------------------------------------------------------------------------------------------

$.fn.avia_sc_gallery = function(options)
{
	return this.each(function()
	{
		var gallery = $(this), images = gallery.find('img'), big_prev = gallery.find('.avia-gallery-big');


		//trigger displaying of thumbnails
		gallery.on('avia_start_animation', function()
		{
			images.each(function(i)
			{
				var image = $(this);
				setTimeout(function(){ image.addClass('avia_start_animation') }, (i * 110));
			});
		});
		
		if(gallery.hasClass('deactivate_avia_lazyload')) gallery.trigger('avia_start_animation');

		//trigger thumbnail hover and big prev image change
		if(big_prev.length)
		{
			gallery.on('mouseenter','.avia-gallery-thumb a', function()
			{
				var _self = this;

				big_prev.attr('data-onclick', _self.getAttribute("data-onclick"));
				big_prev.height(big_prev.height());
				big_prev.attr('href', _self.href)

				var newImg 		= _self.getAttribute("data-prev-img"),
					oldImg 		= big_prev.find('img'),
					oldImgSrc 	= oldImg.attr('src');

				if(newImg != oldImgSrc)
				{
					var next_img = new Image();
					next_img.src = newImg;
					
					var $next = $(next_img);
					
					if(big_prev.hasClass('avia-gallery-big-no-crop-thumb'))
					{
						$next.css({'height':big_prev.height(),'width':'auto'});
					}
					
					big_prev.stop().animate({opacity:0}, function()
					{
						$next.insertAfter(oldImg);
						oldImg.remove();
						big_prev.animate({opacity:1});
						
						big_prev.attr('title',$(_self).attr('title'));
						
					});
				}
			});

			big_prev.on('click', function()
			{
				var imagelink = gallery.find('.avia-gallery-thumb a').eq(this.getAttribute("data-onclick") - 1);

				if(imagelink && !imagelink.hasClass('aviaopeninbrowser'))
				{
					imagelink.trigger('click');
				}
				else if(imagelink)
				{
					var imgurl = imagelink.attr("href");

					if(imagelink.hasClass('aviablank') && imgurl != '' )
					{
						window.open(imgurl, '_blank');
					}
					else if( imgurl != '' )
					{
						window.open(imgurl, '_self');
					}
				}
				return false;
			});


			$(window).on("debouncedresize", function()
			{
			  	big_prev.height('auto');
			});

		}
	});
}

// -------------------------------------------------------------------------------------------
// Toggle shortcode javascript
// -------------------------------------------------------------------------------------------

$.fn.avia_sc_toggle = function(options)
{
	var defaults =
	{
		single: '.single_toggle',
		heading: '.toggler',
		content: '.toggle_wrap',
		sortContainer:'.taglist'
	};

	var win = $(window),
		options = $.extend(defaults, options);

	return this.each(function()
	{
		var container 	= $(this).addClass('enable_toggles'),
			toggles		= $(options.single, container),
			heading 	= $(options.heading, container),
			allContent 	= $(options.content, container),
			sortLinks	= $(options.sortContainer + " a", container);

		heading.each(function(i)
		{
			var thisheading =  $(this), content = thisheading.next(options.content, container);

			function scroll_to_viewport()
			{
			    //check if toggle title is in viewport. if not scroll up
			    var el_offset = content.offset().top,
			        scoll_target = el_offset - 50 - parseInt($('html').css('margin-top'),10);

			    if(win.scrollTop() > el_offset)
			    {
			        $('html:not(:animated),body:not(:animated)').animate({scrollTop: scoll_target},200);
			    }
			}

			if(content.css('visibility') != "hidden")
			{
				thisheading.addClass('activeTitle');
			}

			thisheading.on('click', function()
			{
				if(content.css('visibility') != "hidden")
				{
					content.slideUp(200, function()
					{
						content.removeClass('active_tc').attr({style:''});
						win.trigger('av-height-change');
					});
					thisheading.removeClass('activeTitle');

				}
				else
				{
					if(container.is('.toggle_close_all'))
					{
						allContent.not(content).slideUp(200, function()
						{
							$(this).removeClass('active_tc').attr({style:''});
							scroll_to_viewport();
						});
						heading.removeClass('activeTitle');
					}
					content.addClass('active_tc').slideDown(200,
					
					function()
					{
                        if(!container.is('.toggle_close_all'))
                        {
                            scroll_to_viewport();
                        }
                        
                        win.trigger('av-height-change');
					}
					
					);
					thisheading.addClass('activeTitle');
					location.replace(thisheading.data('fake-id'));
				}
				
				
				
			});
		});


		sortLinks.click(function(e){

			e.preventDefault();
			var show = toggles.filter('[data-tags~="'+$(this).data('tag')+'"]'),
				hide = toggles.not('[data-tags~="'+$(this).data('tag')+'"]');

				sortLinks.removeClass('activeFilter');
				$(this).addClass('activeFilter');
				heading.filter('.activeTitle').trigger('click');
				show.slideDown();
				hide.slideUp();
		});


		function trigger_default_open(hash)
		{
			if(!hash && window.location.hash) hash = window.location.hash;
			if(!hash) return;
			
			var open = heading.filter('[data-fake-id="'+hash+'"]');

			if(open.length)
			{
				if(!open.is('.activeTitle')) open.trigger('click');
				window.scrollTo(0, container.offset().top - 70);
			}
		}
		trigger_default_open(false);
		
		$('a').on('click',function(){
            var hash = $(this).attr('href');
            if(typeof hash != "undefined" && hash)
            {
                hash = hash.replace(/^.*?#/,'');
                trigger_default_open('#'+hash);
            }
        });

	});
};




// -------------------------------------------------------------------------------------------
// Tab Shortcode
// -------------------------------------------------------------------------------------------

$.fn.avia_sc_tabs= function(options)
{
	var defaults =
	{
		heading: '.tab',
		content:'.tab_content',
		active:'active_tab',
		sidebar: false
	};

	var win = $(window),
		options = $.extend(defaults, options);

	return this.each(function()
	{
		var container 	= $(this),
			tab_titles 	= $('<div class="tab_titles"></div>').prependTo(container),
			tabs 		= $(options.heading, container),
			content 	= $(options.content, container),
			newtabs 	= false,
			oldtabs 	= false;

		newtabs = tabs.clone();
		oldtabs = tabs.addClass('fullsize-tab');
		tabs = newtabs;

		tabs.prependTo(tab_titles).each(function(i)
		{
			var tab = $(this), the_oldtab = false;

			if(newtabs) the_oldtab = oldtabs.filter(':eq('+i+')');

			tab.addClass('tab_counter_'+i).bind('click', function()
			{
				open_content(tab, i, the_oldtab);
				return false;
			});

			if(newtabs)
			{
				the_oldtab.bind('click', function()
				{
					open_content(the_oldtab, i, tab);
					return false;
				});
			}
		});

		set_size();
		trigger_default_open(false);
		win.on("debouncedresize", set_size);
		
        $('a').on('click',function(){
            var hash = $(this).attr('href');
            if(typeof hash != "undefined" && hash)
            {
                hash = hash.replace(/^.*?#/,'');
                trigger_default_open('#'+hash);
            }
        });

		function set_size()
		{
			if(!options.sidebar) return;
			content.css({'min-height': tab_titles.outerHeight() + 1});
		}

		function open_content(tab, i, alternate_tab)
		{
			if(!tab.is('.'+options.active))
			{
				$('.'+options.active, container).removeClass(options.active);
				$('.'+options.active+'_content', container).removeClass(options.active+'_content');

				tab.addClass(options.active);

				var new_loc = tab.data('fake-id');
				if(typeof new_loc == 'string') location.replace(new_loc);

				if(alternate_tab) alternate_tab.addClass(options.active);
				var active_c = content.filter(':eq('+i+')').addClass(options.active+'_content');

				if(typeof click_container != 'undefined' && click_container.length)
				{
					sidebar_shadow.height(active_c.outerHeight());
				}
				
				//check if tab title is in viewport. if not scroll up
				var el_offset = active_c.offset().top,
					scoll_target = el_offset - 50 - parseInt($('html').css('margin-top'),10);
				
				if(win.scrollTop() > el_offset)
				{
					$('html:not(:animated),body:not(:animated)').scrollTop(scoll_target);
				}
			}
		}

		function trigger_default_open(hash)
		{
			if(!hash && window.location.hash) hash = window.location.hash;
            		if(!hash) return;
            		
			var open = tabs.filter('[data-fake-id="'+hash+'"]');

			if(open.length)
			{
				if(!open.is('.active_tab')) open.trigger('click');
				window.scrollTo(0, container.offset().top - 70);
			}
		}

	});
};




// -------------------------------------------------------------------------------------------
// Tab Section
// -------------------------------------------------------------------------------------------

$.fn.avia_sc_tab_section= function()
{
	var win 			= $(window),
		browserPrefix 	= $.avia_utilities.supports('transition'),
		cssActive 		= this.browserPrefix !== false ? true : false,
		isMobile 		= $.avia_utilities.isMobile,
		transform3d		= document.documentElement.className.indexOf('avia_transform3d') !== -1 ? true : false,
		transition		= {};
		
	return this.each(function()
	{
		var container 		= $(this),
			tabs			= container.find('.av-section-tab-title'),
			tab_wrap		= container.find('.av-tab-section-tab-title-container'),
			tab_nav			= container.find('.av_tab_navigation'), 
			content_wrap	= container.find('.av-tab-section-inner-container'),
			single_tabs		= container.find('.av-animation-delay-container'), //for elements inside the tab that receive waypoint animation
			inner_content	= container.find('.av-layout-tab-inner'),
			sliding_active  = container.is('.av-tab-slide-transition'),
			flexible    	= container.is('.av-tab-content-auto'),
			current_content = container.find('.__av_init_open'),
			min_width		= 0,
			change_tab 		= function(e)
			{
				e.preventDefault();
				
				var current_tab 	= $(e.currentTarget),
					current_arrow	= current_tab.find('.av-tab-arrow-container span'),
					tab_nr			= current_tab.data('av-tab-section-title');
					
					current_content = container.find('[data-av-tab-section-content="'+tab_nr+'"]');
				
				var new_bg			= current_content.data('av-tab-bg-color'),
					new_font		= current_content.data('av-tab-color'),
					prev_container 	= container.find('.av-active-tab-content').not('[data-av-tab-section-content="'+tab_nr+'"]');

				tabs.attr('style','').removeClass('av-active-tab-title');
				current_tab.addClass('av-active-tab-title');
				current_content.addClass("av-active-tab-content");
				
				if(new_bg !== "") current_arrow.css('background-color', new_bg);
				if(new_font !== "") current_tab.css('color', new_font);
					
				var new_pos = ((parseInt(tab_nr,10) - 1) * -100 );
				
				if(cssActive)
				{
					//move the slides
					new_pos = new_pos / tabs.length;
					transition['transform']  = transform3d ? "translate3d(" + new_pos  + "%, 0, 0)" : "translate(" + new_pos + "%,0)"; //3d or 2d transform?
					transition['left'] = "0%";
					content_wrap.css(transition);
				}
				else
				{
					content_wrap.css('left',  new_pos + "%");
				}
				
				set_tab_titlte_pos();
				set_slide_height();
				
				setTimeout(function()
				{
					current_content.trigger('avia_start_animation_if_current_slide_is_active');
					single_tabs.not(current_content).trigger('avia_remove_animation');
					
				}, 600);	
				
			},
			set_min_width = function()
			{
				min_width = 0;
				tabs.each(function()
				{ 
					min_width += $(this).outerWidth(); 
				});
				
				tab_wrap.css('min-width',min_width);
			},
			
			set_slide_height = function()
			{				
				if(current_content.length && flexible)
				{
					var old_height = inner_content.height();
					inner_content.height('auto');
					
					var height = current_content.find('.av-layout-tab-inner').height();
					inner_content.height(old_height);
					inner_content.height(height);
					
					setTimeout(function() { win.trigger('av-height-change'); }, 600);
				}
			},
			
			set_tab_titlte_pos = function()
			{
				//scroll the tabs if there is not enough room to display them all
				var current_tab = container.find('.av-active-tab-title'),
					viewport	= container.width(),
					left_pos	= viewport < min_width ? (current_tab.position().left * - 1) - (current_tab.outerWidth() / 2) + (viewport / 2): 0;
				
				if(left_pos + min_width < viewport) left_pos = (min_width - viewport) * -1;
				if(left_pos > 0) left_pos = 0;
				
				tab_wrap.css('left',left_pos );
			},
			switch_to_next_prev = function(e)
			{
				if(!isMobile) return;
				
				var clicked 		= $(e.currentTarget),
					current_tab 	= container.find('.av-active-tab-title');
					
					if(clicked.is('.av_prev_tab_section'))
					{
						current_tab.prev('.av-section-tab-title').trigger('click');
					}
					else
					{
						current_tab.next('.av-section-tab-title').trigger('click');
					}
			},
			
			get_init_open = function()
			{
				if(!hash && window.location.hash) hash = window.location.hash;
	            		if(!hash) return;
	            		
				var open = tabs.filter('[data-tab-section-id="'+hash+'"]');
	
				if(open.length)
				{
					if(!open.is('.active_tab')) open.trigger('click');
					window.scrollTo(0, container.offset().top - 70);
				}
			};
				
		$.avia_utilities.preload({
			
			container: current_content , 
			single_callback:  function(){ 
			
				tabs.on('click', change_tab);
				tab_nav.on('click', switch_to_next_prev);
				win.on('debouncedresize', set_tab_titlte_pos);	
				win.on('debouncedresize', set_slide_height);	
				
				set_min_width();
				set_slide_height();
			
			}
			
		});	
			
		
		
		//force a click on page load to properly set the tab color
		container.find('.av-active-tab-title').trigger('click');	
		
		content_wrap.avia_swipe_trigger({prev:'.av_prev_tab_section', next:'.av_next_tab_section'});
			
	});
};




// -------------------------------------------------------------------------------------------
// Horizontal Gallery
// -------------------------------------------------------------------------------------------

$.fn.avia_hor_gallery= function(options)
{
	var def