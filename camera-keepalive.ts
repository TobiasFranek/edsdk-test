import { CameraProperty, Camera, watchCameras } from '@dimensional/napi-canon-cameras';

process.on('SIGINT', () => process.exit());

try {
  const camera = new Camera();
  camera.setEventHandler(
    (eventName, eventData) => {
      if (eventName === Camera.EventName.StateChange) {
        console.log(eventName, eventData)
      } else {
        console.log(eventName);
      }
    }
  );
  if (camera) {
    camera.connect(true);
  }
  watchCameras();
} catch (e) {
  console.error(e);
}


