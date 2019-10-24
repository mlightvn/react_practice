import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const appInitialState = { count : 0 }
export const app = (state = appInitialState, action) => state

it('renders without crashing', () => {

	const RootReducer = combineReducers({app});

	const store = createStore(RootReducer);

	const div = document.createElement('div');
	// ReactDOM.render(<App />, div);

	ReactDOM.render(
		<Provider store={ store }>
			<App />
		</Provider>
		, div);

	ReactDOM.unmountComponentAtNode(div);
});
