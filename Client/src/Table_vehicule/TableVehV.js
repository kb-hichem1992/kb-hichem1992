import React from "react";
import "./TableVeh.css";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Filter,
  Group,
  Resize,
  Sort,
} from "@syncfusion/ej2-react-grids";
export default function TableVehV({ data }) {
  const filter = {
    type: "CheckBox",
  };
  return (
    <div id="cont">
      <GridComponent
        dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 10 }}
        allowFiltering={true}
        allowGrouping={true}
        filterSettings={filter}
        allowResizing={true}
        allowSorting={true}
        height={330}
      >
        <ColumnsDirective>
          <ColumnDirective field="IMMATRECULATION" headerText="IMMATRECULATION" />
          <ColumnDirective
            field="GENRE"
            headerText="GENRE"
          />
          <ColumnDirective
            field="MARQUE"
            headerText="MARQUE"

          />
          <ColumnDirective
            field="NOMBRE_PLACE "
            headerText="NOMBRE PLACE"
          />
          <ColumnDirective
            field="NOM_OPERATEUR"
            headerText="NOM"
          />
          <ColumnDirective
            field="PRENOM_OPERATEUR"
            headerText="PRENOM_OPERATEUR"
          />
          <ColumnDirective
            field="PRENOM_PERE"
            headerText="PRENOM PERE"
          />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group, Resize]} />
      </GridComponent>
    </div>
  );
}
