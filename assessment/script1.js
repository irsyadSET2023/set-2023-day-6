let videoPlayer = document.querySelector("#videoPlayer");

let videoName = document.querySelector("#videoPlayer source");

let playBtn = document.querySelector("#play i");

let videoTitle = document.querySelector("#title h2");

const listVideo = [
  "Opening-001.mp4",
  "Opening-007.mp4",
  "Opening-011.mp4",
  "Opening-020.mp4",
  "Opening-012.mp4",
  "Opening-013.mp4",
];

videoTitle.innerHTML = "Opening - 001";

let videoHead = "http://127.0.0.1:5500/assests2/";

listVideo.sort();

function videoPlay() {
  if (videoPlayer.paused) {
    playBtn.className = "fa fa-pause";

    videoPlayer.play();
  } else {
    playBtn.className = "fa fa-play";

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

  playBtn.className = "fa fa-play";

  videoTitle.innerHTML = `${nextPlaylist}`.replace(".mp4", "");
}

function previousVideo() {
  let currentVideo = videoName.src;
  currentVideo = currentVideo.replace(videoHead, "");
  console.log(currentVideo);

  let indexVideo = listVideo.indexOf(currentVideo);

  console.log("Index Video type", typeof indexVideo);

  if (indexVideo == 0) {
    alert("First Video");
  } else {
    console.log(indexVideo);
    nextPlaylist = listVideo[indexVideo - 1];

    console.log(nextPlaylist);

    videoName.src = `http://127.0.0.1:5500/assests2/${nextPlaylist}`;
    videoPlayer.setAttribute("src", `./assests2/${nextPlaylist}`);
  }

  playBtn.className = "fa fa-play";

  videoTitle.innerHTML = `${nextPlaylist}`.replace(".mp4", "");
}

function gotoVideo(video) {
  videoName.src = `http://127.0.0.1:5500/assests2/${video}.mp4`;
  videoPlayer.setAttribute("src", `./assests2/${video}.mp4`);
  videoTitle.innerHTML = video;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
