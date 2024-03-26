const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

let cacheName = "CACHE-PWA";

const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
};
const checkExistingUserId = async () => {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match("/user-id"); // Match the known Request
  if (cachedResponse) {
    const userId = await cachedResponse.text(); // Retrieve the UUID from the Response body
    console.log("userId--------------", userId);
    return userId;
  }
  return null;
};
const saveUserIdToCache = async (userId) => {
  const cache = await caches.open(cacheName);
  // Use a known Request (like a URL path) to store the UUID as the Response body
  await cache.put("/user-id", new Response(userId));
  return userId;
};
const saveSubscription = async (subscriptionBody) => {
  console.log("subscriptionBody original", subscriptionBody);

  if (!(await checkExistingUserId())) {
    console.log("userId not there -------------------");
    const uuid = generateUUID();
    await saveUserIdToCache(uuid);
    const body = {
      subscription: subscriptionBody,
      userUniqueId: uuid,
    };

    const response = await fetch("http://localhost:8443/subscription", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    });
    return response.json();
  } else {
    console.log("therreeeeeeeeeeeeeeeeeeeeeeeee-------------");
  }
};

self.addEventListener("load", async (e) => {
  console.log("Service Worker: Activated");
});

self.addEventListener("activate", async (e) => {
  console.log("Service Worker: Activated *********************");

  // Check if Push and Notification are supported and if the Notification permission is granted
  if ("PushManager" in self && Notification.permission === "granted") {
    try {
      const subscription = await self.registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          "BAPP3Q6SPrY0fDjzugje1gjYNJev7M1c4JeYNnTxIjy2lYX9oPKgDfujFG5skA1ph-kLDEZy3JGYD3lI6DqvS-0"
        ),
      });
      //you generate the public and private key using vapid keys --install a package called web push which has a command called generate-vapid-keys

      //Voluntary Application Server Identification(VAPID) for Web Push
      console.log("subscripbtion-------", subscription);
      const response = await saveSubscription(subscription);
      console.log("Subscription:", response);
    } catch (error) {
      console.error("Subscription failed:", error);
    }
  } else {
    console.log("Push Not Supported or Permission not granted");
  }
});

self.addEventListener("push", async (e) => {
  console.log("pushed an event--------------------");
  console.log(
    "Granted permission ???????",
    Notification.permission === "granted"
  );
  const data = e.data.json();
  self.registration.showNotification("Upcoming Movie Alert!", {
    body: `${data.title} is releasing soon. Get ready!`,
    icon: data.icon,
  });
});
