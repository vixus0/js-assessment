exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(p, cv) {
      return p + cv;
    }, 0);
  },

  remove : function(arr, item) {
    return _.filter(arr, function(n) { return n !== item; });
  },

  removeWithoutCopy : function(arr, item) {
    var i;

    while ( (i = arr.indexOf(item)) >= 0 ) {
      arr.splice(i, 1);
    }

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.reduce(function(p, cv) {
      return p + ((cv === item)? 1 : 0);
    }, 0);
  },

  duplicates : function(arr) {
    var 
      count = [],
      dups = [],
      key;

    _.each(arr, function (cv) {
      if ( !count[cv] ) count[cv] = 0;
      count[cv] += 1;
    });

    _.each(count, function (cv, i) {
      if (cv > 1) dups.push(i);
    });

    return dups;
  },

  square : function(arr) {
    return arr.map(function(cv) { return cv*cv; });
  },

  findAllOccurrences : function(arr, target) {
    var idx = [];
    arr.forEach(function (cv, i) { if(cv === target) idx.push(i); });
    return idx;
  }
};
