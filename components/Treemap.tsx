import React from "react";
import { Chart } from "react-google-charts";
import {options} from "@/lib/treemapOptions";
import { wrapped_data } from "@/lib/updated_treemap_data";

export default function Treemap() {

    return (
        <div className={'dashboard-section'}>
            <Chart
            chartType="TreeMap"
            width="100%"
            height="100%"
            data={wrapped_data}
            options={options}
        />
        </div>
    );
}
