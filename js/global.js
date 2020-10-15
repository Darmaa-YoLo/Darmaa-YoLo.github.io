$(".cta")
  .mouseenter(function () {
    anime({
      duration: 200,
      targets: "#arrow",
      rotate: 90,
      easing: "linear",
    });
  })
  .mouseleave(function () {
    anime({
      duration: 200,
      targets: "#arrow",
      rotate: 0,
      easing: "linear",
    });
  });
