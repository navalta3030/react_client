import React from "react";
import { Table } from "reactstrap";

import TableComponentInterface from "_interface/component/TableComponentInterface";

const TableComponent: React.FC<TableComponentInterface> = ({
  columns,
  rows
}): React.ReactElement => {
  /**
   *  Returns a collection of table headers specifically columns.
   *  @link - https://reactstrap.github.io/components/tables/
   */
  const getTableColumns = (): any => {
    columns.unshift("#");
    return columns.map((column, i) => <th key={i}>{column}</th>);
  };

  /**
   *  Returns a collection of table rows.
   *  {@link https://reactstrap.github.io/components/tables/}
   */
  const getTableBody = (): React.ReactElement => {
    return (
      <tbody>
        {rows.map((row, i) => {
          return (
            <tr key={i}>
              <th scope="row">{i}</th>
              {row.map((cell, j) => {
                return <td key={j}>{cell}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };

  return (
    <Table dark>
      <thead>
        <tr>{getTableColumns()}</tr>
      </thead>

      {getTableBody()}
    </Table>
  );
};

export default TableComponent;
