import React from 'react';

import { AreaChart, AreaChartProps } from '@mantine/charts';

const LineChartCmp: React.FC<AreaChartProps> = (props) => {
    return (
        <AreaChart
            {...props}
            strokeWidth={2}
            dotProps={{ r: 6, strokeWidth: 2, stroke: 'transparent' }}
            activeDotProps={{ r: 8, strokeWidth: 1 }}
        />
    )
}

export default LineChartCmp;