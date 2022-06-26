import App from './App';
import eventListener from './eventClick';

(async () => {
  await App();
  eventListener();
})();

