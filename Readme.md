# Spotify

  Spotify play button component

## Installation

```
$ component install cggaurav/component-spotify
```

## Example

```js
var Spotify = require('spotify');
var spotify = new Spotify('https://embed.spotify.com/?uri=spotify:user:erebore:playlist:788MOXyTfcUb1tdw4oC7KJ', 400, 450, 'white', 'coverart');
var another_spotify = new Spotify;
document.body.appendChild(spotify.el);
document.body.appendChild(another_spotify.el);
another_spotify.src("https://embed.spotify.com/?uri=spotify:user:erebore:playlist:788MOXyTfcUb1tdw4oC7KJ")
another_spotify.view("list")
```


## License

  MIT