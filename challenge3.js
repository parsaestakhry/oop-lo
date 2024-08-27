var debounce = (func, wait, immediate) => {
  return function () {
    var context = this;
    var later = function () {
      var args = arguments;
      if (!immediate) {
        func.apply(context, args);
      }
    };
  };
};
