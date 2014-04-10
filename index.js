
/**
 * Module dependencies.
 */


/**
 * Expose `Spotify`.
 */

module.exports = Spotify;

/**
 * Initialize a new `Spotify`.
 */

function Spotify(src, width, height, theme, view) {
  this.el = document.createElement('iframe');
  this.el.frameborder = 0;
  this.el.allowtransparency = true;
  this.el.height = ( height || 380 );
  this.el.width = ( width || 300 );
  var src = ( src || "https://embed.spotify.com/?uri=spotify:track:4bz7uB4edifWKJXSDxwHcs")
  var theme = ( theme || "white")
  var view = ( view || "coverart")
  this.el.src = ( src + "&theme=" + theme + "&view=" + view)

}

/**
 * Set Spotify Embed iframe height to `height`.
 *
 * @param {Number} height
 * @return {Spotify}
 * @api public
 */

Spotify.prototype.height = function(height){
  this.el.height = height;
  return this;
};

/**
 * Set Spotify Embed iframe width to `width`.
 *
 * @param {Number} width
 * @return {Spotify}
 * @api public
 */

Spotify.prototype.width = function(width){
  this.el.width = width;
  return this;
};



/**
 * Set Spotify Embed iframe src to `src`.
 *
 * @param {String} str
 * @return {Spotify}
 * @api public
 */

Spotify.prototype.src = function(src){
  this.el.src = this.el.src;
  this.el.src = src;
  return this;
};


/**
 * Set Spotify Embed iframe sizeFormat to `src`.
 *
 * @param {String} str
 * @return {Spotify}
 * @api public
 */

Spotify.prototype.sizeFormat = function(sizeFormat){
  if(sizeFormat === 'large')
    this.el.width = 300;
    this.el.height = 380;

  if(sizeFormat === 'small')
    this.el.width = 300;
    this.el.height = 80;

  return this;
};


/**
 * Set Spotify Embed iframe theme to `theme`.
 *
 * @param {String} theme
 * @return {Spotify}
 * @api public
 */

Spotify.prototype.theme = function(theme){

  if(theme === 'black')
    this.src += '&theme=black'

  if(theme === 'white')
    this.src += '&theme=white'  

  // document.getElementById('iframeid').src = document.getElementById('iframeid').src
      
  return this;
};


/**
 * Set Spotify Embed iframe view to `view`.
 *
 * @param {String} theme
 * @return {Spotify}
 * @api public
 */

Spotify.prototype.view = function(view){

  if(view === 'list')
    this.src += '&view=list'

  if(view === 'coverart')
    this.src += '&view=coverart'
      
  return this;
};
