import TableItem from "./TableItem";

const Table = ({ heading, rows, className }) => {
  const tableHeading = (
    <tr>
      {heading.map((columnName) => (
        <th>{columnName}</th>
      ))}
    </tr>
  );
  const tableItems = rows.map((dataRow) => <TableItem dataRow={dataRow} />);

  return (
    <table className={className}>
      <thead>{tableHeading}</thead>
      <tbody>{tableItems}</tbody>
    </table>
  );
};


export default Table;