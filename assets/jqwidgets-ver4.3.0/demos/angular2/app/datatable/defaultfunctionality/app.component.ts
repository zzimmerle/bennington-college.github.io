/// <reference path="components/jqwidgets.d.ts" />
import {Component, ViewChild} from '@angular/core';
import {jqxDataTableComponent} from 'components/angular_jqxdatatable';

@Component({
    selector: 'my-app',
    templateUrl: 'app/datatable/defaultfunctionality/app.component.htm'
}) 

export class AppComponent  { 
    @ViewChild('dataTableReference') myDataTable: jqxDataTableComponent;

    ngAfterViewInit(): void
    {
        this.myDataTable.createWidget(this.settings);
    } 

    settings: jqwidgets.DataTableOptions =
    {
        altRows: true,
        sortable: true,
        editable: true,
        selectionMode: 'singleRow',
        columns: [
            { text: 'First Name', dataField: 'First Name', width: 200 },
            { text: 'Last Name', dataField: 'Last Name', width: 200 },
            { text: 'Product', dataField: 'Product', width: 250 },
            { text: 'Unit Price', dataField: 'Price', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
            { text: 'Quantity', dataField: 'Quantity', width: 100, align: 'right', cellsAlign: 'right', cellsFormat: 'n' }
        ]
    }       
}
