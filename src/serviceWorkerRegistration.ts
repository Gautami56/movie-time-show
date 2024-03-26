import { v4 as uuidv4 } from 'uuid';
export const generateUniqueUserId = () => {
    return uuidv4();
}


export const register = () => {
  if ("serviceWorker" in navigator) {
    let swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    window.addEventListener("load", function () {
      navigator.serviceWorker
        .register(swUrl)
        .then(
          function (registration) {
            console.log(
              "worker registration is successfull",
              registration.scope
            );
          },
          function (err) {
            console.log("Failed");
          }
        )
        .catch(function (err) {
          console.log(err);
        });
    });
  } else {
    console.log("Service worker is not supported");
  }
};



export const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();
  console.log("requestnotification----------------", permission);
  if (permission === "granted") {
    // new Notification("Notification Title", {
    //   body: "Notification body text goes here there.",
    // });
  }
};
