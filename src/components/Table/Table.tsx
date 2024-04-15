import React, { Fragment } from "react";
import { ColumnNames, ColumnType, IRow } from "../../types";
import { Column } from "../Column";
import css from "./styles.module.scss";
import { Graph } from "../Graph";
import { startOfDay, subDays } from "date-fns";
import cn from "classnames";
import { AnimatePresence } from "framer-motion";

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
      return subDays(startOfDay(new Date()), idx);
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
    <table className={css.table}>
      <thead>
        <tr className={css.tr}>
          {header.columns.map((title, idx) => (
            <th key={idx} className={cn(css.td, css.th)}>
              <Column column={title} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIdx) => (
          <Fragment key={rowIdx}>
            <tr className={css.tr}>
              {row.columns.map((column, columnIdx) => (
                <td
                  key={rowIdx + "-" + columnIdx}
                  className={css.td}
                  onClick={() => handleOnClick(rowIdx)}
                >
                  <Column column={column} />
                </td>
              ))}
            </tr>
            <tr className={css.tr}>
              <AnimatePresence>
                {clickedRow === rowIdx && (
                  <td
                    colSpan={4}
                    key={rowIdx}
                    className={cn(css.graph, css.td)}
                  >
                    <Graph days={days} data={graphData[rowIdx]} />
                  </td>
                )}
              </AnimatePresence>
            </tr>
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}
