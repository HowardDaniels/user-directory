import React from 'react';
// import logo from './logo.svg';
import ReactDOM from 'react-dom';
// import Table from './components/Table';
// import tableData from './components/tableData';
import './App.css';

const tableData = [
	{
		name: 'David Scott',
		email: 'dscott@developers.com',
		id: 239249
	}, {
		name: 'Sandra Wilson',
		email: 'swilson@developers.com',
		id: 489022
	}, {
		name: 'Anthony Davis',
		email: 'adavis@developers.com',
		id: 892304
	}, {
		name: 'Wendy Armstrong',
		email: 'warmstrong@developers.com',
		id: 211033
	}
];

const sortTypes = {
	up: {
		class: 'sort-up',
		fn: (a, b) => a.id - b.id
	},
	down: {
		class: 'sort-down',
		fn: (a, b) => b.id - a.id
	},
	default: {
		class: 'sort',
		fn: (a, b) => a
	}
}

class Table extends React.Component {
	state = {
		currentSort: 'default'
	}
	
	onSortChange = () => {
		const { currentSort } = this.state;
		let nextSort;
		
		if(currentSort === 'down') nextSort = 'up';
		else if(currentSort === 'up') nextSort = 'default';
		else if(currentSort === 'default') nextSort = 'down';
		
		this.setState({
			currentSort: nextSort
		})
	}
	
	render() {
		const { data } = this.props;
		const { currentSort } = this.state;
		
		return ( data.length > 0 && (
			<table className="text-left">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>
							ID
							<button onClick={this.onSortChange}>
								<i className={`fas fa-${sortTypes[currentSort].class}`}></i>
							</button>
						</th>
					</tr>
				</thead>
				<tbody>
					{[...data].sort(sortTypes[currentSort].fn).map(p => (
						<tr>
							<td>{p.name}</td>
							<td>{p.email}</td>
							<td>{p.id}</td>
						</tr>
					))}
				</tbody>
			</table>
		))
	}
}

const App = () => (
	<div className="text-center">
		<h4>A list of top 10 richest billionaires.</h4>
		<p>Click on the icon next to "Net Worth" to see the sorting functionality</p>
		
		<Table data={tableData} />
		
		<small>* Data gathered from <a href="https://www.theweek.co.uk/people/57553/top-billionaires-who-richest-person-world" target="_blank" rel="noopener noreferrer">theweek.co.uk</a></small>
	</div>
);


export default App;