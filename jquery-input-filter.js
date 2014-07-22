
$.fn.inputFilter = function( c ) {
	this.keypress( function( e ) {
		var a = $(this).attr('data-inputfilter-allowed');
		var l = $(this).attr('data-inputfilter-max-length');
		var v = $(this).val();
		var c = String.fromCharCode( e.charCode );
		
		// Allow: backspace, delete, tab, escape, and enter
		if( e.keyCode == 46 || e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 27 || e.keyCode == 13 || 
		     // Allow: Ctrl+A
		    (e.keyCode == 65 && e.ctrlKey === true) || 
		     // Allow: Ctrl+C, Ctrl+V, Ctrl+R, etc.
		    (e.keyCode ==  0 && e.ctrlKey === true)
		     // Allow: home, end, left, right
		    (e.keyCode >= 35 && e.keyCode <= 39) ||
		   ) {
			return;
		}
		
		if( l ) {
			if( v.length >= l ) {
				e.preventDefault();
				return;
			}
		}
		
		if( a ) {
			if( a.indexOf( c ) < 0 ) {
				e.preventDefault();
				return;
			}
		}
	} );
	
	if( c ) {
		for( var i in c ) {
			this.attr("data-inputfilter-"+i, c[i]);
		}
	}
};
