(function($) {
    var settings = {
      'auto' : false,
      'interval' : 5000
    };
    
    var wishlist = [];
    var wishmap = {};
    
    var methods = {
        'render-item' : function(options) {
            var $this = $(this);
            
            return this.each(function(index, element) {
                $this.children('.exit-stage-right').detach();
                
                console.log($this.children().first());
                $this.children().first().addClass('exit-stage-right');

                $(options['template']).tmpl(wishmap[options['wishlist-id']]).appendTo($this);                    
                
                setTimeout(
                    function(){
                        $this.children('.init').addClass('enter-stage-left');
                    },
                    0
                );
                
                
            });
        },
        
        render : function(options) {
            var $this = $(this);
            
            return this.each(function(index, element) {
                $this.empty();
                $.each(wishlist, function(i, value) {
                    $(options['template']).tmpl(value).appendTo($this);                    
                })

            });
        },
        
        init : function(options) {
            wishlist = $(options['data']);
            
            $.each(wishlist, function(index, element){
                wishmap[element.ASIN] = element;
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