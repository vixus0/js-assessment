exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function (resolve, reject) {
          resolve(value);
        });
  },

  manipulateRemoteData : function(url) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();
      xhr.addEventListener('load', function() {
        var 
          data = JSON.parse(xhr.responseText),
          sorted = _.sortBy(data.people, 'name'),
          names = _.pluck(sorted, 'name');

        resolve(names);
      });
    });
  }
};
