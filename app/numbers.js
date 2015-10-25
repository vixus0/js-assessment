exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return (num & Math.pow(2, bit-1)) >> (bit-1);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var b = 8,  // number of bits
        s = '';

    for (; b > 0; b--)
      s += this.valueAtBit(num, b);

    return s;
  },

  multiply: function(a, b) {
    function getPrecision(x) {
      var s = x.toString().split('.');
      var len = (s.length > 1)? s[1].length : 0;
      return len;
    }

    var prec = Math.max(getPrecision(a), getPrecision(b));
    return parseFloat((a * b).toFixed(prec));
  }
};
