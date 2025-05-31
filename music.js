// music.js
const musicTracks = [
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "Dream Journey",
    artist: "SoundHelix",
    albumUrl: "https://www.soundhelix.com/audio-examples"
  },
  // Add more tracks as needed
];

let currentTrackIndex = 0;
const audio = new Audio();
audio.src = musicTracks[currentTrackIndex].src;
audio.volume = 0.2;
audio.loop = true;
audio.play();

function createMusicControls() {
  const controls = document.createElement("div");
  controls.style.position = "fixed";
  controls.style.bottom = "10px";
  controls.style.left = "10px";
  controls.style.background = "rgba(0, 0, 0, 0.5)";
  controls.style.padding = "10px";
  controls.style.borderRadius = "8px";
  controls.style.color = "white";
  controls.style.zIndex = 9999;

  controls.innerHTML = `
    <p style="margin: 0 0 5px 0;">🎵 <strong>${musicTracks[currentTrackIndex].title}</strong> by ${musicTracks[currentTrackIndex].artist}</p>
    <a href="${musicTracks[currentTrackIndex].albumUrl}" target="_blank" style="color: #7cf; font-size: 0.9em;">Support this artist</a><br>
    <label for="volume">🔊 Volume</label>
    <input type="range" id="volume" min="0" max="1" step="0.01" value="0.2" />
  `;

  document.body.appendChild(controls);

  const volumeSlider = controls.querySelector("#volume");
  volumeSlider.addEventListener("input", (e) => {
    audio.volume = e.target.value;
  });
}

window.addEventListener("DOMContentLoaded", createMusicControls);

