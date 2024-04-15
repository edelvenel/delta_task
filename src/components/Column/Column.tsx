import {
  Colors,
  ColumnType,
  IAverage,
  IColumn,
  ILabel,
  ITitle,
  IToday,
  IYesterday,
} from "../../types";
import css from "./styles.module.scss";
import cn from "classnames";

interface IColumnProps {
  column: IColumn;
}

export function Column({ column }: IColumnProps) {
  switch (column.type) {
    case ColumnType.Label:
      return <ColumnLabel data={column.data as ILabel} />;
    case ColumnType.Today:
      return <ColumnToday data={column.data as IToday} />;
    case ColumnType.Yesterday:
      return <ColumnYesterday data={column.data as IYesterday} />;
    case ColumnType.Average:
      return <ColumnAverage data={column.data as IAverage} />;
    case ColumnType.Title:
      return <ColumnTitle data={column.data as ITitle} />;
    default:
      return <></>;
  }
}

interface IColumnLabelProps {
  data: ILabel;
}

function ColumnLabel({ data }: IColumnLabelProps) {
  return <div className={cn(css.column, css.label)}>{data.label}</div>;
}

interface IColumnTitleProps {
  data: ITitle;
}

function ColumnTitle({ data }: IColumnTitleProps) {
  return <div className={cn(css.column, css.title)}>{data.title}</div>;
}

interface IColumnTodayProps {
  data: IToday;
}

function ColumnToday({ data }: IColumnTodayProps) {
  return (
    <div className={cn(css.column, css.today)}>
      {Intl.NumberFormat("fr-FR").format(data.value)}
    </div>
  );
}

interface IColumnYesterdayProps {
  data: IYesterday;
}

function ColumnYesterday({ data }: IColumnYesterdayProps) {
  let backgroundColor = Colors.gray;
  if (data.diffPercent > 0) {
    backgroundColor = Colors.green;
  } else if (data.diffPercent < 0) {
    backgroundColor = Colors.pink;
  }

  return (
    <div className={cn(css.column, css.yesterday)} style={{ backgroundColor }}>
      <div className={css.yesterdayValue}>
        {Intl.NumberFormat("fr-FR").format(data.value)}
      </div>
      <div
        className={cn(
          css.diffPercent,
          data.diffPercent >= 0 ? css.textGreen : css.textRed
        )}
      >
        {data.diffPercent}%
      </div>
    </div>
  );
}

interface IColumnAverageProps {
  data: IAverage;
}

function ColumnAverage({ data }: IColumnAverageProps) {
  let backgroundColor = Colors.gray;
  switch (data.positive) {
    case 1:
      backgroundColor = Colors.green;
      break;
    case -1:
      backgroundColor = Colors.pink;
      break;
    case 0:
      backgroundColor = Colors.gray;
      break;

    default:
      break;
  }
  return (
    <div className={cn(css.column, css.average)} style={{ backgroundColor }}>
      {Intl.NumberFormat("fr-FR").format(data.value)}
    </div>
  );
}
