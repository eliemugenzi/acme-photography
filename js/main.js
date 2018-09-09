$(document).ready(() => {
  $("#view-work").click(e => {
    e.preventDefault();
    const images = $("#images").offset().top;
    $("html,body").animate(
      {
        scrollTop: images
      },
      3000,
      "easeOutExpo"
    );
  });
});
