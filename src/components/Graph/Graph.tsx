import { LineChart } from "@mui/x-charts/LineChart";
import { format } from "date-fns";

interface IGraphProps {
  days: Date[];
  data: number[];
}

export function Graph({ days, data }: IGraphProps) {
  console.log(days);
  return (
    <LineChart
      xAxis={[
        {
          data: days,
          dataKey: "day",
          valueFormatter: (value) => format(value, "dd.MM"),
          min: days[0],
          max: days[days.length - 1],
        },
      ]}
      series={[{ data }]}
      width={500}
      height={300}
    />
  );
}
