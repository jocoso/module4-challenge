// This file is used mostly for the toggle light button to 
// change the classes of given object from dark to light and viceversa

$( ".light-icon" ).on("click", function() {
    // LIGHT2DARK
    // --------

    // BODY
    if( $( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        $( ".light-icon" ).text( "OFF" );

        // Traverse through everything in the website
        $("*").each(function() {
            // GLOBAL BORDERS
            if($(this).hasClass("light-box")) {
                $(this).removeClass("light-box");
                $(this).addClass("dark-box");
            }

            // CARD DECORATIONS
            if($(this).hasClass("solid-white-bottom")) {
                $(this).removeClass("solid-white-bottom");
                $(this).addClass("solid-black-bottom");
            }
            // IMPORTANT BUTTONS
            if($(this).hasClass("light-button")) {
                $(this).removeClass("light-button");
                $(this).addClass("dark-button");
            }
        });
    } else {
        // DARK2LIGHT
        // --------

        // BODY
        $( "body" ).addClass( "dark" );
        $( ".light-icon" ).text( "ON" );

        // Traverse through everything in the website
        $("*").each(function() {

            // GLOBAL BORDERS
            if($(this).hasClass("dark-box")){
                $(this).removeClass("dark-box");
                $(this).addClass("light-box");
            }
            // CARD DECORATIONS
            if($(this).hasClass("solid-black-bottom")) {
                $(this).removeClass("solid-black-bottom");
                $(this).addClass("solid-white-bottom");
            }
            // IMPORTANT BUTTONS
            if($(this).hasClass("dark-button")) {
                $(this).removeClass("dark-button");
                $(this).addClass("light-button");
            }
        })

    }
});