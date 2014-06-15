window.log = function() {
  try {
    return console.log.apply(console, arguments);
  } catch (e) {}
};

var arr = [];

for (var i = 0; i < 10; i = ++i) {
    var promise = (function(index){
        var dfd = new $.Deferred();
        setTimeout(function() {
          log(index);
          return dfd.resolve();
        }, 1000);
        return dfd.promise();
    })(i);
    arr.push(promise);

};
log(arr);
$.when.apply($, arr).done(function(){log('done!')})
