require(['js/api/foo'], function (foo) {
  exports.Bar = foo.Bar;
  var Promise = function () {
      this._done = function () {}
      this._fail = function () {}
      this._always = function () {}
      
  };
  
  Promise.prototype.done = function (callback) {
      this._done = callback;
      return this;
  };
  Promise.prototype.fail = function (callback) {
      this._fail = callback;
      return this;
  };
  Promise.prototype.always = function (callback) {
      this._always = callback;
      return this;
  };
  
  exports.Promise = Promise;
  
  var MdL = function (uri) {
      if (typeof(uri) === 'undefined') {
          return;
      }
      this.uri = uri;
      this.backend = 'http://api.spotify.com/v1/' + uri.split[1] + 's';
  }
  MdL.prototype.load = function (properties) {
      var promise = new Promise();
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
          if (xmlHttp.readyState == 4) {
              if (xmlHttp.status == 200) {
                  var obj = JSON.parse(xmlHttp.responseText);
                  promise.setDone(obj);
              }
          }
      }
      xmlHttp.open('GET', this.backend + '/' + this.uri.slice[2], true);
     
      return promise;
  };
  MdL.fromURI = function (uri) {
      return new MdL(uri);
  }
  
  var Artist = function (arguments) {
      MdL.call(this, arguments);
  }
  Artist.prototype = new MdL();
  Artist.prototype.constructor = MdL;
  
  var Album = function (arguments) {
      MdL.call(this, arguments);
  }
  Album.prototype = new MdL();
  Album.prototype.constructor = MdL;
  
  var Playlist = function (arguments) {
      MdL.call(this, arguments);
  }
  Playlist.prototype = new MdL();
  Playlist.prototype.constructor = MdL;
  
  exports.Artist = Artist;
  exports.Playlist = Playlist;
  exports.Album = Album;
  exports.MdL = MdL;
  
  
    
})
