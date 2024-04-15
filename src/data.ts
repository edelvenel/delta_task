import { ColumnType, IRow } from "./types";

export const graphData: number[][] = [
  [567309, 589039, 495324, 480521, 500521],
  [300000, 300000, 300000, 300000, 300000],
  [100000, 100000, 100000, 100000, 100000],
  [100521, 100521, 100521, 100521, 100521],
  [830, 800, 870, 900, 1300],
  [790, 860, 820, 800, 1200],
  [910, 890, 900, 1100, 1000],
  [880, 900, 890, 1300, 1300],
  [33, 30, 34, 36, 34],
  [31, 29, 32, 36, 34],
];

export const data: IRow[] = [
  {
    columns: [
      { type: ColumnType.Label, data: { label: "Выручка, руб" } },
      { type: ColumnType.Today, data: { value: 500521 } },
      { type: ColumnType.Yesterday, data: { value: 480521, diffPercent: 4 } },
      { type: ColumnType.Average, data: { value: 4805121, positive: -1 } },
    ],
  },
  {
    columns: [
      { type: ColumnType.Label, data: { label: "Наличные" } },
      { type: ColumnType.Today, data: { value: 300000 } },
      { type: ColumnType.Yesterday, data: { value: 300000, diffPercent: 0 } },
      { type: ColumnType.Average, data: { value: 300000, positive: 0 } },
    ],
  },
  {
    columns: [
      { type: ColumnType.Label, data: { label: "Безналичный расчет" } },
      { type: ColumnType.Today, data: { value: 100000 } },
      { type: ColumnType.Yesterday, data: { value: 100000, diffPercent: 0 } },
      { type: ColumnType.Average, data: { value: 100000, positive: 0 } },
    ],
  },
  {
    columns: [
      { type: ColumnType.Label, data: { label: "Кредитные карты" } },
      { type: ColumnType.Today, data: { value: 100521 } },
      { type: ColumnType.Yesterday, data: { value: 100521, diffPercent: 0 } },
      { type: ColumnType.Average, data: { value: 100521, positive: 0 } },
    ],
  },
  {
    columns: [
      { type: ColumnType.Label, data: { label: "Средний чек, руб" } },
      { type: ColumnType.Today, data: { value: 1300 } },
      { type: ColumnType.Yesterday, data: { value: 900, diffPercent: 44 } },
      { type: ColumnType.Average, data: { value: 900, positive: 1 } },
    ],
  },
  {
    columns: [
      { type: ColumnType.Label, data: { label: "Средний гость, руб" } },
      { type: ColumnType.Today, data: { value: 1200 } },
      { type: ColumnType.Yesterday, data: { value: 800, diffPercent: 50 } },
      { type: ColumnType.Average, data: { value: 800, positive: 1 } },
    ],
  },
  {
    columns: [
      {
        type: ColumnType.Label,
        data: { label: "Удаления из чека (после оплаты), руб" },
      },
      { type: ColumnType.Today, data: { value: 1000 } },
      { type: ColumnType.Yesterday, data: { value: 1100, diffPercent: -9 } },
      { type: ColumnType.Average, data: { value: 900, positive: 1 } },
    ],
  },
  {
    columns: [
      {
        type: ColumnType.Label,
        data: { label: "Удаления из чека (до оплаты), руб" },
      },
      { type: ColumnType.Today, data: { value: 1300 } },
      { type: ColumnType.Yesterday, data: { value: 1300, diffPercent: 0 } },
      { type: ColumnType.Average, data: { value: 900, positive: 1 } },
    ],
  },
  {
    columns: [
      { type: ColumnType.Label, data: { label: "Количество чеков" } },
      { type: ColumnType.Today, data: { value: 34 } },
      { type: ColumnType.Yesterday, data: { value: 36, diffPercent: -6 } },
      { type: ColumnType.Average, data: { value: 34, positive: 0 } },
    ],
  },
  {
    columns: [
      { type: ColumnType.Label, data: { label: "Количество гостей" } },
      { type: ColumnType.Today, data: { value: 34 } },
      { type: ColumnType.Yesterday, data: { value: 36, diffPercent: -6 } },
      { type: ColumnType.Average, data: { value: 32, positive: 1 } },
    ],
  },
];
