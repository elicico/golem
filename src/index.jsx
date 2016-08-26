import React from 'react';
import { render } from 'react-dom';

import Root from '../src/Root.jsx';

require('../styles/main.scss');

const documentEl = document.getElementById('root');

render(<Root />, documentEl);
