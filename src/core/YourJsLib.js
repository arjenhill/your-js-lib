export default {
  hello() {
    console.log("hello world!");
  },

  support3d() {
    let support3d;
    const el = document.createElement("p");
    const transforms = {
      webkitTransform: "-webkit-transform",
      OTransform: "-o-transform",
      msTransform: "-ms-transform",
      MozTransform: "-moz-transform",
      transform: "transform"
    };

    document.body.insertBefore(el, null);
    for (let t in transforms) {
      if (el.style[t] !== undefined) {
        el.style[t] = "translate3d(1px,1px,1px)";
        support3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
      }
    }
    document.body.removeChild(el);

    return (
      support3d !== undefined && support3d.length > 0 && support3d !== "none"
    );
  }
};
