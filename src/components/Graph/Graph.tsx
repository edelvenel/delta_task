import { LineChart } from "@mui/x-charts/LineChart";
import { format } from "date-fns";
import css from "./styles.module.scss";
import { motion } from "framer-motion";

interface IGraphProps {
  days: Date[];
  data: number[];
}

export function Graph({ days, data }: IGraphProps) {
  return (
    <motion.div
      className={css.graph}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
    >
      <LineChart
        xAxis={[
          {
            data: days,
            valueFormatter: (value) => format(value, "dd.MM"),
            min: days[0],
            max: days[days.length - 1],
            scaleType: "point",
          },
        ]}
        series={[{ data }]}
        width={500}
        height={300}
      />
    </motion.div>
  );
}
