import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';

const tableData = [
	{
		name: 'Amancio Ortega',
		net_worth: 62.7
	},
	{
		name: 'Bernard Arnault',
		net_worth: 76
	},
	{
		name: 'Bill Gates',
		net_worth: 96.5
	},
	{
		name: 'Carlos Sim Helu',
		net_worth: 64
	},
	{
		name: 'Jeff Bezos',
		net_worth: 131
	},
	{
		name: 'Larry Ellison',
		net_worth: 58
	},
	{
		name: 'Larry Page',
		net_worth: 50.8
	},
	{
		name: 'Mark Zuckerberg',
		net_worth: 62.3
	},
	{
		name: 'Michael Bloomberg',
		net_worth: 55.5
	},
	{
		name: 'Warren Buffet',
		net_worth: 82.5
	}
]

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
