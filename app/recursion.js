exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var files = [];

    var walk = function walk(node, dir, add) {
      var add_names = add;

      if (typeof add === 'undefined' && typeof dir === 'undefined') {
        add_names = true;
      }

      if (!add_names) {
        add_names = dir && node.dir === dir;
      }

      node.files.forEach(function (f) {
        if (typeof f === 'string') {
          if (add_names)
            files.push(f);
        } else if (typeof f === 'object') {
          walk(f, dir, add_names);
        }
      });
    };

    walk(data, dirName);
    return files;
  },

  permute: function(arr) {
    var ret = [],
        chars = [];

    var perm = function perm(inp) {
      console.log(chars, '|||', inp);
      if (inp.length === 0) {
        ret.push(chars.slice());
      }
      for (var i=0; i<inp.length; i++) {
        var c = inp.splice(i, 1)[0];
        chars.push(c);
        perm(inp);
        chars.pop();
        inp.splice(i, 0, c);
      }
    };

    perm(arr);

    console.log('SHIT THE BED');
    console.log(ret);

    return ret;
  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
