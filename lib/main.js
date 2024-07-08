function Sticky(options) {
  const defaultOptions = {
    container: ".stickyContainer",
  };

  options = { ...defaultOptions, ...options };

  let _this = this;
  let _container = document.querySelector(options.container);
  let _parent = _container.parentNode;
  let _wrapper;

  this.init = function () {
    this.prepareWrapper();

    window.addEventListener("scroll", _this.updatePosition);
    window.addEventListener("resize", _this.updatePosition);
  };

  this.prepareWrapper = function () {
    _wrapper = document.createElement("div");
    _wrapper.className = "sticky-wrapper";
    _container.replaceWith(_wrapper);
    _wrapper.appendChild(_container);
  };

  this.updatePosition = function () {
    const parentRect = _parent.getBoundingClientRect();
    const wrapperRect = _wrapper.getBoundingClientRect();
    const innerOffset = _parent.offsetHeight - _container.offsetHeight;
    if (wrapperRect.top < 0) {
      _container.style.position = "fixed";
      _container.style.left = `${wrapperRect.left}px`;
      if (-parentRect.top < innerOffset) {
        _container.style.top = 0;
      } else {
        _container.style.top = `${parentRect.top + innerOffset}px`;
      }
      _container.style.width = `${_wrapper.offsetWidth}px`;
    } else {
      _container.style.position = "relative";
      _container.style.top = 0;
      _container.style.left = 0;
      _container.style.width = "auto";
    }
  };

  this.init();
}

export default Sticky;