import React from "react";
import { ColumnNames, ColumnType, IRow } from "../../types";
import { Column } from "../Column";
import css from "./styles.module.scss";
import { Graph } from "../Graph";
import { subDays } from "date-fns";

interface ITableProps {
  rows: IRow[];
  graphData: number[][];
}

export function Table({ rows, graphData }: ITableProps) {
  const [clickedRow, setClickedRow] = React.useState<number | undefined>();

  const handleOnClick = React.useCallback((idx: number) => {
    setClickedRow((prev) => (prev === idx ? undefined : idx));
  }, []);

  const days = [...new Array(5)]
    .map((_, idx) => {
      return subDays(new Date(), idx);
    })
    .reverse();

  const header: IRow = { columns: [] };

  for (let i = 0; i < rows[0].columns.length; i++) {
    switch (rows[0].columns[i].type) {
      case ColumnType.Label:
        header.columns.push({
          type: ColumnType.Title,
          data: { title: ColumnNames.Label },
        });
        break;
      case ColumnType.Today:
        header.columns.push({
          type: ColumnType.Title,
          data: { title: ColumnNames.Today },
        });
        break;
      case ColumnType.Yesterday:
        header.columns.push({
          type: ColumnType.Title,
          data: { title: ColumnNames.Yesterday },
        });
        break;
      case ColumnType.Average:
        header.columns.push({
          type: ColumnType.Title,
          data: { title: ColumnNames.Average },
        });
        break;
      default:
        break;
    }
  }

  return (
    <div className={css.table}>
      {header.columns.map((title, idx) => (
        <div key={idx}>
          <Column column={title} />
        </div>
      ))}
      {rows.map((row, rowIdx) => (
        <>
          {row.columns.map((column, columnIdx) => (
            <div
              key={rowIdx + "-" + columnIdx}
              onClick={() => handleOnClick(rowIdx)}
            >
              <Column column={column} />
            </div>
          ))}
          {clickedRow === rowIdx && (
            <div key={rowIdx} className={css.graph}>
              <Graph days={days} data={graphData[rowIdx]} />
            </div>
          )}
        </>
      ))}
    </div>
  );
}
