import Table from 'react-bootstrap/Table';
function Table(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>{props.colum1}</th>
          <th>{props.colum2}</th>
          <th>{props.colum3}</th>
          <th>{props.colum4}</th>
          <th>{props.colum5}</th>
          <th>{props.colum6}</th>
          <th>{props.colum7}</th>
          <th>{props.colum8}</th>
          <th>{props.colum9}</th>
          <th>{props.colum10}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.row1}</td>
          <td>{props.row1}</td>
          <td>{props.row1}</td>
          <td>{props.row1}</td>
          <td>{props.row1}</td>
          <td>{props.row1}</td>
          <td>{props.row1}</td>
          <td>{props.row1}</td>
          <td>{props.row1}</td>
          <td>{props.row1}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Table