const player = document.createElement("div");
player.className = "music-player";
player.innerHTML = \`
  <strong>Now Playing:</strong> Chill Vibes<br/>
  <audio controls autoplay loop volume="0.3">
    <source src="https://www.bensound.com/bensound-music/bensound-goinghigher.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
\`;
document.body.appendChild(player);
