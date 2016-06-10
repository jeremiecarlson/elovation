import ReactOnRails from 'react-on-rails';
import PongApp from './PongAppClient';
import runtime from 'offline-plugin/runtime';
runtime.install();

// This is how react_on_rails can see the PongApp in the browser.
ReactOnRails.register({ PongApp });
