import { DateTime } from './luxon.js';

const displayTime = () => {
  const now = DateTime.local();

  const newDate = now.toLocaleString({
    month: 'long',
    weekday: 'long',
    day: 'numeric',
  });

  const newTime = now.toLocaleString(DateTime.TIME_WITH_SECONDS).toLowerCase();

  document.querySelector('.current-day').textContent = `${newDate}, ${newTime}`;
};

export default displayTime();
