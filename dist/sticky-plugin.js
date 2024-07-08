function a(i) {
  i = { ...{
    container: ".stickyContainer"
  }, ...i };
  let n = this, t = document.querySelector(i.container), o = t.parentNode, e;
  this.init = function() {
    this.prepareWrapper(), window.addEventListener("scroll", n.updatePosition), window.addEventListener("resize", n.updatePosition);
  }, this.prepareWrapper = function() {
    e = document.createElement("div"), e.className = "sticky-wrapper", t.replaceWith(e), e.appendChild(t);
  }, this.updatePosition = function() {
    const s = o.getBoundingClientRect(), p = e.getBoundingClientRect(), r = o.offsetHeight - t.offsetHeight;
    p.top < 0 ? (t.style.position = "fixed", t.style.left = `${p.left}px`, -s.top < r ? t.style.top = 0 : t.style.top = `${s.top + r}px`, t.style.width = `${e.offsetWidth}px`) : (t.style.position = "relative", t.style.top = 0, t.style.left = 0, t.style.width = "auto");
  }, this.init();
}
export {
  a as default
};
