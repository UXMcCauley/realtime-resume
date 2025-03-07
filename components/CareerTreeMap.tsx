import * as React from "react";
import { TreeMapComponent, LevelDirective, LevelsDirective } from "@syncfusion/ej2-react-treemap";

interface CareerTreeMapProps {
    data: Array<{ Category: string; Country: string; JobDescription: string; JobGroup: string; EmployeesCount: number }>;
    palette?: string[];
    enableDrillDown?: boolean;
}

export function CareerTreeMap({
                                  data,
                                  palette = ["#f44336", "#29b6f6", "#ab47bc", "#ffc107", "#5c6bc0", "#009688"],
                                  enableDrillDown = true
                              }: CareerTreeMapProps) {
    return (
        <TreeMapComponent
            palette={palette}
            dataSource={data}
            weightValuePath="EmployeesCount"
            enableDrillDown={enableDrillDown}
            leafItemSettings={{
                labelFormat: "${JobDescription}-${EmployeesCount}",
                interSectAction: "WrapByWord",
            }}
        >
            <LevelsDirective>
                <LevelDirective groupPath="Country" border={{ color: "black", width: 0.5 }} />
                <LevelDirective groupPath="JobDescription" border={{ color: "black", width: 0.5 }} />
                <LevelDirective groupPath="JobGroup" border={{ color: "black", width: 0.5 }} />
            </LevelsDirective>
        </TreeMapComponent>
    );
}
