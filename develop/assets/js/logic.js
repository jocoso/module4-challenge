$( ".light-icon" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        $( ".light-icon" ).text( "OFF" );
        $("*").each(function(item) {
            if($(this).hasClass("light-box")) {
                $(this).removeClass("light-box");
                $(this).addClass("dark-box");
            }
        });
    } else {
        $( "body" ).addClass( "dark" );
        $( ".light-icon" ).text( "ON" );

        $("*").each(function(item) {
            if($(this).hasClass("dark-box")){

                $(this).removeClass("dark-box");
                $(this).addClass("light-box");
            }
        })
    }
});