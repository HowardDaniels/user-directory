import React from 'react';
import './App.css';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const UserTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.users);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>Users</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('email')}
              className={getClassNamesFor('email')}
            >
              Email
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('userID')}
              className={getClassNamesFor('userID')}
            >
              User ID
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.userID}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div className="App">

       <h1>Click on the buttons above each column to sort the table.</h1>
      
      <UserTable
        users={[
          { id: 1, name: 'Arnold Smith', email: "asmith@developers.com", userID: 329840 },
          { id: 2, name: 'Jane Williams', email: "jwilliams@developers.com", userID: 234221 },
          { id: 3, name: 'Ujjal Singh', email: "usingh@developers.com", userID: 823192 },
          { id: 4, name: 'Sandra Sanchez', email: "ssanchez@developers.com", userID: 193400 },
          { id: 5, name: 'Vladimir Smirnov', email: "vsmirnov@developers.com", userID: 423419 },
          { id: 6, name: 'Aisha Jefferson', email: "ajefferson@developers.com", userID: 661087 },
		      { id: 7, name: 'Li Wong', email: "lwong@developers.com", userID: 180452 },
		      { id: 8, name: 'Carter Jones', email: "cjones@developers.com", userID: 422984 },
		      { id: 9, name: 'Lindsey Cohen', email: "lcohen@developers.com", userID: 904476 },
		      { id: 10, name: 'Juan Alvarez', email: "jalvarez@developers.com", userID: 133092 },
		      { id: 11, name: 'Miles DiSabatino', email: "mdisabatino@developers.com", userID: 102471 },
		      { id: 12, name: 'Ashley Palmer', email: "apalmer@developers.com", userID: 455702 },
		      { id: 13, name: 'Mohammad al-Farsi', email: "malfarsi@developers.com", userID: 448127 },
		      { id: 14, name: 'Anna Fitzgerald', email: "afitzgerald@developers.com", userID: 231178 },
        ]}
      />
    </div>
  );
}