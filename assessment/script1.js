let videoPlayer = document.querySelector("#videoPlayer");

let videoName = document.querySelector("#videoPlayer source");

// console.log(videoName.src);

// videoPlayer.setAttribute("src", "./assests2/Opening-013.mp4");

let playBtn = document.querySelector("#play img");

const listVideo = [
  "Opening-001.mp4",
  "Opening-011.mp4",
  "Opening-020.mp4",
  "Opening-012.mp4",
  "Opening-013.mp4",
];

let videoHead = "http://127.0.0.1:5500/assests2/";

// let currentVideo = videoName.src;
// console.log(currentVideo.replace(videoHead, ""));

// console.log(listVideo.indexOf("Opening-001"));

// console.log(listVideo.findIndex(currentVideo.replace(videoHead, "")));

listVideo.sort();
// console.log(listVideo);

function videoPlay() {
  if (videoPlayer.paused) {
    playBtn.setAttribute("src", "./assests2/images.png");

    videoPlayer.play();
  } else {
    playBtn.setAttribute(
      "src",
      "./assests2/play-button-icon-design-illustration-vector.jpg"
    );
    videoPlayer.pause();
  }
}

function nextVideo() {
  let currentVideo = videoName.src;
  currentVideo = currentVideo.replace(videoHead, "");
  console.log(currentVideo);

  let indexVideo = listVideo.indexOf(currentVideo);

  console.log("Index Video type", typeof indexVideo);

  if (indexVideo == listVideo.length - 1) {
    alert("Last Video");
  } else {
    console.log(indexVideo);
    nextPlaylist = listVideo[indexVideo + 1];

    console.log(nextPlaylist);

    videoName.src = `http://127.0.0.1:5500/assests2/${nextPlaylist}`;
    videoPlayer.setAttribute("src", `./assests2/${nextPlaylist}`);
  }
}

function previousVideo() {
  let currentVideo = videoName.src;
  currentVideo = currentVideo.replace(videoHead, "");
  console.log(currentVideo);

  let indexVideo = listVideo.indexOf(currentVideo);

  console.log("Index Video type", typeof indexVideo);

  if (indexVideo == 0) {
    alert("Last Video");
  } else {
    console.log(indexVideo);
    nextPlaylist = listVideo[indexVideo - 1];

    console.log(nextPlaylist);

    videoName.src = `http://127.0.0.1:5500/assests2/${nextPlaylist}`;
    videoPlayer.setAttribute("src", `./assests2/${nextPlaylist}`);
  }
}
