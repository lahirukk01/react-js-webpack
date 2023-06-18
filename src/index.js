import { createRoot } from 'react-dom/client';

import '@awac/assets/styles/index.scss';

import App from '@awac/App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
