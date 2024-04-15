export enum ColumnType {
  Label = "label",
  Today = "today",
  Yesterday = "yesterday",
  Average = "average",
  Title = "title",
}

export enum ColumnNames {
  Label = "Показатель",
  Today = "Текущий день",
  Yesterday = "Вчера",
  Average = "Этот день недели",
}

export enum Colors {
  gray = "#F5F5F5",
  blue = "#EDF8FF",
  green = "#ECF7E7",
  pink = "#FEE6E6",
}

export type ITitle = {
  title: string;
};

export type ILabel = {
  label: string;
};

export type IToday = {
  value: number;
};

export type IYesterday = {
  value: number;
  diffPercent: number;
};

export type IAverage = {
  value: number;
  positive: 1 | -1 | 0;
};

export type IColumnType = ILabel | IToday | IYesterday | IAverage | ITitle;

export type IRow = {
  columns: IColumn[];
};

export type IColumn = {
  type: ColumnType;
  data: IColumnType;
};
