$(".projectTitle").on("click", function(){
    console.log(this);
    $(this).animate({"grid-column": span 6}, 200);
});
// https://css-tricks.com/animating-css-grid-how-to-examples/