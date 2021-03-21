import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'item', headerName: 'Item', width: 130 },
  { field: 'quantity', headerName: 'Quantity', width: 130 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 90,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { id: 1, quantity: 'Snow', item: 'Jon', price: 35 },
  { id: 2, quantity: 'Lannister', item: 'Cersei', price: 42 },
  { id: 3, quantity: 'Lannister', item: 'Jaime', price: 45 },
  { id: 4, quantity: 'Stark', item: 'Arya', price: 16 },
  { id: 5, quantity: 'Targaryen', item: 'Daenerys', price: null },
  { id: 6, quantity: 'Melisandre', item: null, price: 150 },
  { id: 7, quantity: 'Clifford', item: 'Ferrara', price: 44 },
  { id: 8, quantity: 'Frances', item: 'Rossini', price: 36 },
  { id: 9, quantity: 'Roxie', item: 'Harvey', price: 65 },
  { id: 10, quantity: 'Snow', item: 'Jon', price: 35 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: 630 }}>
      <DataGrid rows={rows} columns={columns}  checkboxSelection />
    </div>
  );
}