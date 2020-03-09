let webcamStream;

const config = {
  video: {
    aspectRatio: { exact: 1 },
    width: { ideal: 4096 },
    height: { ideal: 2160 },
  },
  audio: false,
};

const initWebcam = async () => {
  try {
    webcamStream = await navigator.mediaDevices.getUserMedia(config);
  } catch (error) {
    Logger.error(`Error initialising webcam: ${error}`);
    throw error;
  }
};

const insertWebcamStream = async (webcamElement) => {
  if (!webcamStream) {
    await initWebcam();
  }
  webcamElement.srcObject = webcamStream; // eslint-disable-line

  try {
    await webcamElement.play();
  } catch (error) {
    Logger.error(`Error playing webcam stream ${error}`);
  }
};
