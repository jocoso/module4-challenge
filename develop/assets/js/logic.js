$( ".light-icon" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        $( ".light-icon" ).text( "OFF" );
        $("*").each(function() {
            if($(this).hasClass("light-box")) {
                $(this).removeClass("light-box");
                $(this).addClass("dark-box");
            }
            if($(this).hasClass("solid-white-bottom")) {
                $(this).removeClass("solid-white-bottom");
                $(this).addClass("solid-black-bottom");
            }
        });
    } else {
        $( "body" ).addClass( "dark" );
        $( ".light-icon" ).text( "ON" );

        $("*").each(function() {
            if($(this).hasClass("dark-box")){

                $(this).removeClass("dark-box");
                $(this).addClass("light-box");
            }
            if($(this).hasClass("solid-black-bottom")) {
                $(this).removeClass("solid-black-bottom");
                $(this).addClass("solid-white-bottom");
            }
            
        })

    }
});