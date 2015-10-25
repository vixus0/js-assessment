exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timeout;

    function go() {
      console.log(start++);
      if (start <= end) timeout = setTimeout(go, 100);
    }

    return {
      cancel: function() { timeout && clearInterval(timeout); }
    };
  }
};
