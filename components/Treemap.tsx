import React from "react";
import { Chart } from "react-google-charts";
import {options} from "@/lib/treemapOptions";
import { wrapped_data } from "@/lib/updated_treemap_data";

export default function Treemap() {

    return (
        <div className={'dashboard-section'}>
            <h2 className="section-title-no-indent">Work Distribution<span className={`text-sm block`}>Left click to drilldown. Right click to back up.</span></h2>

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
