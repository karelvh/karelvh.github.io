var React = require('react');
var ReactDOM = require('react-dom');
var APIKEY = require('./api_key.js').apiKey;
var mountNode = document.getElementById('lastFM-widget');
var source = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bimmer48&api_key=' + APIKEY + '&format=json';

var LastFM = React.createClass({
  getInitialState: function () {
    return {
      artistname: 'artistname',
      trackname: 'trackname',
    };
  },

  componentDidMount: function () {
    this.serverRequest = $.get(source, function (result) {
      var artistName = result.recenttracks.track[0].artist["#text"];
      var trackName = result.recenttracks.track[0].name;
      this.setState({
        artistname: artistName,
        trackname: trackName,
      });
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.serverRequest.abort();
  },

  render: function () {
    return (
      <span>
        {this.state.artistname} - {this.state.trackname}
      </span>
    );
  },
});

ReactDOM.render(
  <LastFM />,
  mountNode
);
