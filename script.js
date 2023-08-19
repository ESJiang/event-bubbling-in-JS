document.getElementsByTagName("body")[0].addEventListener("click", () => alert("body was clicked"));
document.getElementsByTagName("div")[1].addEventListener("click", e => {
    // e.stopPropagation();
    alert("div was clicked");
});
document.getElementsByTagName("span")[0].addEventListener("click", e => {
    // e.stopPropagation();
    alert("span was clicked");
});
document.getElementsByTagName("button")[0].addEventListener("click", e => {
    // e.stopPropagation();
    alert("button was clicked");
});
