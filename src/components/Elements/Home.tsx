import {PushNotificationButton} from "../UI/PushNotificationButton";

export const Home = () => {
  const askNotificationPermissions = async () => {
    const permissions = await Notification.requestPermission();

    if (permissions !== 'granted') {
      throw new Error('Notification permissions not granted!')
    } else {
      const serviceWorker = await navigator.serviceWorker.ready;
      console.log('isServiceWorkerActivated - ', serviceWorker);

      if (serviceWorker) {
        await serviceWorker.showNotification('Notification from service worker', {
          requireInteraction: true,
          badge: '/1.png',
          icon: '/2.png'
        })
      }
    }
  }

  return (<section className="w-full h-[600px] bg-gray-500">
    <PushNotificationButton />

    <button className="px-[16px] py-[8px] bg-blue-300 rounded-full text-white" onClick={askNotificationPermissions}>
      Ask notification permissions
    </button>
  </section>)
}