const n = navigator,
  d = document;
let storage = window.localStorage,
  cameraStatus = storage.setItem("cameraStatus", "off"),
  audioStatus = storage.setItem("audioStatus", "off");

export function webCam({ video, audio, audioDown, cameraDown, btns }) {
  if (audioDown) {
    if (storage.audioStatus === "off") {
      audio.setAttribute("autoplay", "autoplay");
      btns.children[1].children[0].removeAttribute("name");
      btns.children[1].children[0].setAttribute("name", "mic-outline");
      n.mediaDevices
        .getUserMedia({
          audio: true,
        })
        .then((streamAudio) => {
          audio.srcObject = streamAudio;
        })
        .catch();
      storage.setItem("audioStatus", "on");
    } else {
      btns.children[1].children[0].removeAttribute("name");
      btns.children[1].children[0].setAttribute("name", "mic-off-outline");
      storage.setItem("audioStatus", "off");
      audio.pause();
    }
  }
  if (cameraDown) {
    if (storage.cameraStatus === "off") {
      video.style.zIndex = 0;
      video.setAttribute("autoplay", "autoplay");
      btns.children[0].children[0].removeAttribute("name");
      btns.children[0].children[0].setAttribute("name", "videocam-outline");
      n.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then((streamVideo) => {
          video.srcObject = streamVideo;
        })
        .catch();
      storage.setItem("cameraStatus", "on");
    } else {
      video.style.zIndex = -23;
      video.srcObject.getTracks()[0].stop();
      video.pause();
      btns.children[0].children[0].removeAttribute("name");
      btns.children[0].children[0].setAttribute("name", "videocam-off-outline");
      storage.setItem("cameraStatus", "off");
    }
  }
}
