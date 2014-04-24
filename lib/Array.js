Array.prototype.getUnique = function(accessor){
  var o = this;

  function index(element) {
    if (typeof accessor === "string") {
      return element[accessor];
    } 
    if (typeof accessor === "function") {
      return accessor(element);
    }
    return element;
  }

  var phonebook = {}, output = [];


  for (var i = 0; i < o.length; i += 1) { 
      if (phonebook.hasOwnProperty(index(o[i]))) {
        continue;
      }
      output.push(o[i]);
      phonebook[index(this[i])] = 1;
   }
   return output;
}

//http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
Array.prototype.shuffle = function() { //v1.0
  var o = this;
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

//http://stackoverflow.com/questions/3629817/getting-a-union-of-two-arrays-in-javascript
Array.prototype.union = function(y) { //v1.0
  var x = this,
    obj = {};

  for (var i = x.length-1; i >= 0; -- i) {
     obj[x[i]] = x[i];
  }
  
  for (var i = y.length-1; i >= 0; -- i) {
     obj[y[i]] = y[i];
  }

  var res = []
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {  // <-- optional
      res.push(obj[k]);
    }
  }
  return res;
};

//http://jsfiddle.net/neoswf/aXzWw/
Array.prototype.intersection = function(b0) {
  var a = this.sort(function(x,y) { return x < y ? -1 : 1; }),
      b = b0.sort(function(x,y) { return x < y ? -1 : 1; });

  var ai = bi= 0;
  var result = [];

  while(ai < a.length && bi < b.length ) {
    if (a[ai] < b[bi] ){ ai++; }
    else if (a[ai] > b[bi] ){ bi++; }
    else {
      result.push(a[ai]);
      ai++;
      bi++;
    }
  }
  return result;
}

Array.prototype.random = function() {
  var x = this;

  var index = Math.floor(Math.random() * x.length);
  return x[index];
}

/* For older browsers */

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2Fmap#Browser_compatibility
if (!Array.prototype.map) {
  Array.prototype.map = function(fun /*, thisArg */)
  {
    "use strict";

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function")
      throw new TypeError();

    var res = new Array(len);
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++)
    {
      // NOTE: Absolute correctness would demand Object.defineProperty
      //       be used.  But this method is fairly new, and failure is
      //       possible only if Object.prototype or Array.prototype
      //       has a property |i| (very unlikely), so use a less-correct
      //       but more portable alternative.
      if (i in t)
        res[i] = fun.call(thisArg, t[i], i, t);
    }

    return res;
  };
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(fun /*, thisArg */)
  {
    "use strict";

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function")
      throw new TypeError();

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++)
    {
      if (i in t)
        fun.call(thisArg, t[i], i, t);
    }
  };
}

