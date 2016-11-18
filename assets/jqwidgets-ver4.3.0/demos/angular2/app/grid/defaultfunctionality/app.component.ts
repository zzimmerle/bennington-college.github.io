﻿/// <reference path="components/jqwidgets.d.ts" />

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { jqxGridComponent } from 'components/angular_jqxgrid';

@Component({
    selector: 'my-app',
    template: `<angularGrid #gridReference></angularGrid>`
})

export class AppComponent  {
    @ViewChild('gridReference') myGrid: jqxGridComponent;

    ngAfterViewInit(): void
    {
        this.myGrid.createWidget(this.settings);
    }

    source =
    {
        datatype: "xml",
        datafields: [
            { name: 'ProductName', type: 'string' },
            { name: 'QuantityPerUnit', type: 'int' },
            { name: 'UnitPrice', type: 'float' },
            { name: 'UnitsInStock', type: 'float' },
            { name: 'Discontinued', type: 'bool' }
        ],
        root: "Products",
        record: "Product",
        id: 'ProductID',
        url: "../sampledata/products.xml"
    };

    dataAdapter = new $.jqx.dataAdapter(this.source);

    cellsrenderer = (row, columnfield, value, defaulthtml, columnproperties, rowdata) =>
    {
        if (value < 20)
        {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
        }
        else
        {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
        }
    };

    settings: jqwidgets.GridOptions = {
        width: 850,
        source: this.dataAdapter,
        pageable: true,
        autoheight: true,
        sortable: true,
        altrows: true,
        enabletooltips: true,
        editable: true,
        selectionmode: 'multiplecellsadvanced',
        columns:
        [
            {
                text: 'Product Name', columngroup: 'ProductDetails',
                datafield: 'ProductName', width: 250
            },
            {
                text: 'Quantity per Unit', columngroup: 'ProductDetails',
                datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right', width: 200
            },
            {
                text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2', width: 200
            },
            {
                text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: this.cellsrenderer, width: 100
            },
            {
                text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued'
            }
        ],
        columngroups:
        [
            {
                text: 'Product Details', align: 'center', name: 'ProductDetails'
            }
        ]
    };

}