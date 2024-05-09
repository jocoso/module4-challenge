$(document).ready(function () {
    var blogs = JSON.parse(localStorage.getItem("blogs") || "[]");


    blogs.forEach(function (blogEntry) {
        var entry = "<div class='card'> \
        <span class='title solid-black-bottom'>"+ blogEntry.title + "</span>\
        <pre class='content'>" + blogEntry.content + "</pre>\
        <span class='author'>Posted by:"+ blogEntry.name + "</span>\
    </div>";


        $('#entries').append(entry);
    })
});

function goBack() {
    window.location.href = "https://jocoso.github.io/module4-challenge";
}
