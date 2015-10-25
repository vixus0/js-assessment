exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    /*
     * Alternative for compatibility
     *
     * var props = [];
     * for (var k in obj) {
     *   if (obj.hasOwnProperty(k)) {
     *     props.push(k + ': ' + obj[k]);
     *   }
     * }
     *
     * return props;
     */
    return Object.keys(obj).map(function(v) { return v + ': '+ obj[v]; });
  }
};
