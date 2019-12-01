import Typography from './Typography.styles';
import Iconography from './Iconography.styles';

export default {
  colours: {
    surface: '#121212',
    layer: layerIndex => {
      //Elevation calculation is a rough approximation
      //of material dark-theme guide
      var opacity = 10 - (5 - layerIndex);
      return `rgba(255, 255, 255, ${opacity / 100})`;
    },
    primary: '#448aff',
    primaryDark: '#005ECB',
    primaryLight: '#83b9ff',
    secondary: '#FFB82B',
    secondaryDark: '#c78800',
    secondaryLight: '#ffea61',
    error: '#CF6679'
  },
  icons: Iconography,
  font: Typography,
  breakpoints: {
    mobile: '@media screen and (min-width: 640px)',
    tablet: '@media screen and (min-width: 768px)',
    desktop: '@media screen and (min-width: 1024px)'
  }
};
