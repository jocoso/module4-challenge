$(document).ready( function() {
    // When the user submit the form
    $('#cool-form').on("submit", function (event) {
        event.preventDefault(); 

        if(localStorage.getItem("blogs") == null) {
            // If the blog item doesn't exists in the localStorage we create an empty array
            var cal = localStorage.setItem("blogs", JSON.stringify([])); 
        }
        
        // Get raw blogs data 
        var blogs = JSON.parse(localStorage.getItem("blogs")); 
        var ent = $('form').serializeArray(); // Turn the data into an object
        
        // I didn't like the way the function serializeArray formats their data so I
        // Use it to create another, more organized object, to push to blogs
        blogs.push({name: ent[0].value, title: ent[1].value, content: ent[2].value});
        
        // Flush the data
        localStorage.setItem("blogs", JSON.stringify(blogs));

        // Empty the form 
        $('#cool-form')[0].reset();

        // Kick the user to the blog
        window.location.href = "https://jocoso.github.io/module4-challenge/blog.html";
        
    })
})
