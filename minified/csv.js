(function(exports) {
  "use strict"; // Use ECMAScript 5 strict mode in browsers that support it
  // See http://en.wikipedia.org/wiki/Comma-separated_values

  var regexp = /"((?:[^"\\]|\\.)*)"|([^,\s]+)|,\s*(?=,|$)|^\s*,/g
  exports.calculate = function(original) {
    var lines = original.split(/\n+\s*/);
    var commonLength = lines[0].match(regexp).length;
    var r = [];
    var removeQuotes = function(field) {
      var removecomma = field.replace(/,\s*$/, '');
      console.log(removecomma);
      var remove1stquote = removecomma.replace(/^\s*"/, '');
      console.log(remove1stquote);
      var removelastquote = remove1stquote.replace(/"\s*$/, '');
      console.log(removelastquote);
      var removeescapedquotes = removelastquote.replace(/\\"/, '"');
      console.log(removeescapedquotes);
      return removeescapedquotes;
    };

    for (var t in lines) {
      var temp = lines[t];
      var m = temp.match(regexp);
      var result = [];
      var error = false;

      // skip empty lines and comments
      if (temp.match(/(^\s*$)|(^#.*)/)) continue;
      if (m) {
        result = m.map(removeQuotes);
        error = (commonLength != m.length);
        var rowclass = error? 'error' : '';
        r.push({ value: result, rowClass: rowclass });
      }
      else {
        var errmsg = 'La fila "' + temp + '" no es un valor de CSV permitido.';
        r.push({value: errmsg.split("").splice(commonLength), rowClass: 'error'});
        console.log("falla");
      }
    }
    return r;
  };
})(this);
