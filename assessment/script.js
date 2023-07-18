console.log("connected");

let videoPlayer = document.querySelector("#videoPlayer");
let showControlButton = document.querySelector("#showControl");

function videoPlay() {
  console.log("play");
  videoPlayer.play();
}

function videoPause() {
  console.log("pause");
  videoPlayer.pause();
}

function showControl() {
  console.log(videoPlayer.querySelector("controls"));
  videoPlayer.setAttribute("controls", true);
  console.log(videoPlayer.querySelector("controls"));

  if (videoPlayer) {
  }
}

function get() {
  let statusControls = document.querySelector("controls");
  console.log(statusControls);
}
