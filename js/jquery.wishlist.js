(function($) {
    var settings = {
      'auto' : false,
      'interval' : 5000
    };
    
    var methods = {
        render : function(options) {
            var $this = $(this);
            
            return this.each(function(index, element) {
                var wishlist = $(options['data']);
             
                $this.empty();
                $.each(wishlist, function(i, value) {
                    
                    $("#itemTemplate").tmpl(value).appendTo($this);                    
                })

            });
        },
        
        init : function(options) {
            return this.each(function(index, element) {
            });
        }
    };



    $.fn.wishlist = function(method, options) {
        if (options) { 
          $.extend(settings, options);
        }
        
        if ( methods[method] ) {
          return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
          return methods.init.apply( this, arguments );
        } else {
          $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }
    }
})(jQuery);