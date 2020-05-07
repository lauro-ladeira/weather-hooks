
export const getIcon = text => {
  switch (text) {
    case 'Mostly Cloudy':
      return 'fas fa-cloud';
    case 'Partly Cloudy':
      return 'fas fa-cloud-sun';
    case 'Mostly Sunny':
      return 'fas fa-cloud-sun';
    case 'Rain':
      return 'fas fa-cloud-rain';
    case 'Scattered Showers':
      return 'fas fa-cloud-sun-rain';
    case 'Breezy':
      return 'fas fa-wind';
    case 'Scattered Thunderstorms':
      return 'fas fa-bolt';
    case 'Sunny':
      return 'fas fa-sun';
    default:
      return 'fas fa-cloud';
  }
};