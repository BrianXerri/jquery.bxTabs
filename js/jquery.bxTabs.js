/**
 * jQuery.bxTabs - Adds tab functionality to a page
 * Date: 2011/01/08
 *
 * @author Brian Xerri
 * @website http://www.brianxerri.com
 * @version 1.0.2
 * @jQuery Version: jquery-1.5.min.js
 * 
 ***************************
 *
 * Copyright (C) 2010  Brian Xerri
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 *
 ***************************
 *
 * - Added GoToTab function so can change tab from external source
 *
 **/

(function($) {
	$.fn.bxTabs = function(options) {
		var settings = $.extend({}, $.fn.bxTabs.defaults, options);

		var menuTabs = this.each(function(index) {

			$(this).click(function() {
				$.fn.bxTabs.goToTab(index);
			});

		});

		$.fn.bxTabs.goToTab = function(tabIndex) {

			var o = $.meta ? $.extend({}, settings, $this.data()) : settings;

			menuTabs.filter('.selected').removeClass('selected');
			menuTabs.eq(tabIndex).addClass('selected');

			$(o.tabbedContentSelector + '.current').removeClass('current');
			$(o.tabbedContentSelector + ':eq(' + tabIndex + ')').addClass('current');

			return false;
		};
	}

	$.fn.bxTabs.defaults = {
		tabbedContentSelector: '.bxTabContent li'
	};	
})(jQuery);