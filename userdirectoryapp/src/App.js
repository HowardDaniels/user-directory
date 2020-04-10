import React from 'react';
// import logo from './logo.svg';
import ReactDOM from 'react-dom';
import Table from '../public/index.html';
import './App.css';


	const App = () => (
		<div className='text-center'>
			<h4>A list of top 10 richest billionaires.</h4>
			<p>
				Click on the icon next to "Net Worth" to see the sorting functionality
			</p>
	
			<Table data={tableData} />
	
			<small>
				* Data gathered from{' '}
				<a
					href='https://www.theweek.co.uk/people/57553/top-billionaires-who-richest-person-world'
					target='_blank'>
					theweek.co.uk
				</a>
			</small>
		</div>
	);
	
	ReactDOM.render(<App />, document.getElementById('app'));

export default App;
