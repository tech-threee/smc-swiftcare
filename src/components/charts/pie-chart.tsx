import { ResponsivePie } from '@nivo/pie';
import { FC } from 'react';

interface PieChartProps {
    data: {
        id: string;
        label: string;
        value: number;
        color: string;
        bgColor: string;
    }[];
}

const PieChart: FC<PieChartProps> = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        innerRadius={0}
        padAngle={0.7}
        cornerRadius={5}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        colors={{ datum: 'data.color' }}
        enableArcLinkLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={"white"}
    />
);

export default PieChart;