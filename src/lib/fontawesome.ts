// Font Awesome setup for Astro with React
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Prevent Font Awesome from automatically adding CSS to the <head>
// We'll manually import the CSS in our Astro files instead
config.autoAddCss = false;

// Add all icons to the library so you can use them without importing individually
library.add(fas, far, fab);

export { FontAwesomeIcon } from '@fortawesome/react-fontawesome';