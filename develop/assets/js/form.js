$(document).ready( function() {
    $('#cool-form').on("submit", function (event) {
        event.preventDefault();


        if(localStorage.getItem("blogs") == null) {
            var cal = localStorage.setItem("blogs", JSON.stringify([]));
        }
        
        var blogs = JSON.parse(localStorage.getItem("blogs")); 
        var ent = $('form').serializeArray();
        
        blogs.push({name: ent[0].value, title: ent[1].value, content: ent[2].value});
        
        localStorage.setItem("blogs", JSON.stringify(blogs));

        $('#cool-form')[0].reset();


        window.location.href = "https://jocoso.github.io/module4-challenge/blog.html";
        
    })
})
