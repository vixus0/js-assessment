exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2) { return str + ', ' + str2; };
  },

  makeClosures : function(arr, fn) {
    return _.map(arr, function (v) { 
      var v2 = fn(v); 
      return function() { return v2; };
    });
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    }
  },

  useArguments : function() {
    var a = [],
        i;

    for (i=0; i<arguments.length; i++) 
      a.push(arguments[i]);

    return a.reduce(function (p, v) { return p + v; }, 0);
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
      var more_args = Array.prototype.slice.call(arguments);
      return fn.apply(null, args.concat(more_args));
    };
  },

  curryIt : function(fn) {
    var args = [];

    return function cur(a) {
      args.push(a);
      if (args.length === fn.length)
        return fn.apply(null, args);
      else
        return cur;
    }
  }
};
