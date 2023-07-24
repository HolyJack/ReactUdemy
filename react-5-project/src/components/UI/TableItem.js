const TableItem = (props) => {
  const tableData = props.dataRow.map((dataEntry) => <td>{dataEntry}</td>);

  return <tr>{tableData}</tr>;
};

export default TableItem;
