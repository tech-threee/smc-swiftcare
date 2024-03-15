"use client"
import {
    ComputedDatum,
    ResponsiveBar,
} from "@nivo/bar";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { FC } from "react";
dayjs.extend(advancedFormat);

type BarChartProps = {
    data: any[];
    xLabel?: string;
    xLabelFormat?: (value: string) => string;
    yLabel?: string;
    indexBy: string;
    keys: string[];
    enableLabel?: boolean;
    chartLabel?: (data: ComputedDatum<any>) => string;
    tooltipLabel?: (data: ComputedDatum<any>) => string;
    layout?: "horizontal" | "vertical";
    groupMode?: "grouped" | "stacked";
};

const BarChart: FC<BarChartProps> = ({
    data,
    xLabel,
    xLabelFormat,
    yLabel,
    indexBy,
    keys,
    layout,
    groupMode,
    enableLabel = true,
    chartLabel = (data) => `${data?.value}`,
    tooltipLabel = (data) => `${data?.id}`,
}) => {
    return (
        <ResponsiveBar
            data={data}
            keys={keys}
            indexBy={indexBy}
            margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
            padding={0.3}
            groupMode={groupMode}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colorBy="indexValue"
            layout={layout || "vertical"}
            colors={({ id, data }) => String(data[`${id}Color`])}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: xLabel,
                legendPosition: "middle",
                legendOffset: 32,
                format: xLabelFormat,
                // truncateTickAt: 0
            }}
            labelTextColor="white"
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: yLabel,
                legendPosition: "middle",
                legendOffset: -40,
                ariaHidden: true,
                // truncateTickAt: 0
            }}
            tooltipLabel={tooltipLabel}
            labelSkipWidth={12}
            labelSkipHeight={12}
            role="application"
            enableLabel={enableLabel}
            label={chartLabel}
        />
    );
};

export default BarChart;
