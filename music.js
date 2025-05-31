// music.js
const musicTracks = [
  {
    name: "Lo-Fi Chill",
    src: "https://www.bensound.com/bensound-music/bensound-goinghigher.mp3",
    artist: "Bensound",
    link: "https://www.bensound.com/royalty-free-music/track/going-higher"
  },
  {
    name: "Ambient Vibe",
    src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    artist: "Bensound",
    link: "https://www.bensound.com/royalty-free-music/track/sunny"
  }
];

let currentTrackIndex = 0;

const audio = new Audio(musicTracks[currentTrackIndex].src);
audio.loop = true;
audio.volume = 0.3;

window.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.className = "music-player";

  const title = document.createElement("div");
  title.textContent = `🎵 Now Playing: ${musicTracks[currentTrackIndex].name}`;
  container.appendChild(title);

  const volumeInput = document.createElement("input");
  volumeInput.type = "range";
  volumeInput.min = 0;
  volumeInput.max = 1;
  volumeInput.step = 0.01;
  volumeInput.value = audio.volume;
  volumeInput.addEventListener("input", () => {
    audio.volume = volumeInput.value;
  });
  container.appendChild(volumeInput);

  const link = document.createElement("a");
  link.href = musicTracks[currentTrackIndex].link;
  link.target = "_blank";
  link.textContent = `🎤 Artist: ${musicTracks[currentTrackIndex].artist}`;
  container.appendChild(link);

  const muteBtn = document.createElement("button");
  muteBtn.textContent = "🔇";
  muteBtn.onclick = () => {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? "🔈" : "🔇";
  };
  container.appendChild(muteBtn);

  const genreBtn = document.createElement("button");
  genreBtn.textContent = "🔁 Switch Genre";
  genreBtn.onclick = () => {
    currentTrackIndex = (currentTrackIndex + 1) % musicTracks.length;
    audio.src = musicTracks[currentTrackIndex].src;
    audio.play();
    title.textContent = `🎵 Now Playing: ${musicTracks[currentTrackIndex].name}`;
    link.href = musicTracks[currentTrackIndex].link;
    link.textContent = `🎤 Artist: ${musicTracks[currentTrackIndex].artist}`;
  };
  container.appendChild(genreBtn);

  document.body.appendChild(container);
  audio.play().catch(() => {
    // Some browsers block autoplay
    console.log("Autoplay blocked. User interaction needed.");
  });
});
