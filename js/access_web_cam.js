const n = navigator;

let storage = window.localStorage,
  camera = storage.getItem("camera", "denied"),
  audio = storage.getItem("audio", "denied");

export function webCamAccess() {
  console.log(storage.camera);
  console.log(camera === "denied");
  n.mediaDevices
    .getUserMedia({
      video: true,
    })
    .then((stream) => {
      camera = storage.setItem("camera", stream);
    })
    .catch();
  n.mediaDevices
    .getUserMedia({
      audio: true,
    })
    .then((stream) => {
      audio = storage.setItem("audio", stream);
    })
    .catch();
}
