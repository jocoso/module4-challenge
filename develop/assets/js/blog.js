$(document).ready(function () {
    // Get items in blog. If no items return an empty array.
    var blogs = JSON.parse(localStorage.getItem("blogs") || "[]");

    // For each entry on the array create a card div
    blogs.forEach(function (blogEntry) {
        var entry = "<div class='card'> \
        <span class='title solid-black-bottom'>"+ blogEntry.title + "</span>\
        <pre class='content'>" + blogEntry.content + "</pre>\
        <span class='author'>Posted by:"+ blogEntry.name + "</span>\
    </div>";

        // Append the card to the entries id
        $('#entries').append(entry);
    })
});

// Used by goBack button
function goBack() {
    window.location.href = "https://jocoso.github.io/module4-challenge";
}
