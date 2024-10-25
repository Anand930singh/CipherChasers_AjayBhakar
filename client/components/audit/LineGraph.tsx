import useDemoConfig from "./useDemo";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

export default function LineGraph() {
  const { data } = useDemoConfig({
    series: 2,
    dataType: "time",
  });

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <div className="w-full h-[50vh] rounded bg-gradient-to-tr from-[#e86418] via-[#c6593e] to-[#653574] p-[2px]">
      <div className=""></div>
      <div className="flex h-full w-full items-center rounded justify-center p-4 bg-background back">
        <div className="w-full h-full">
          <Chart
            options={{
              data,
              primaryAxis,
              secondaryAxes,
              dark: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
