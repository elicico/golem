import React from 'react';
import { render } from 'react-dom';

import Root from './store/Root.jsx';

require('../common_styles/main.scss');

const documentEl = document.getElementById('root');

render(<Root />, documentEl);
