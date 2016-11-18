/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
declare let $: any;

@Component({
    selector: 'angularTreeMap',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxTreeMapComponent {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   widgetObject:  jqwidgets.jqxTreeMap;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   isHostReady(): boolean {
       return (this.host !== undefined && this.host.length == 1);
   }

   createWidget(options: any): void {
      if (!this.isHostReady()) {

         this.host = $(this.elementRef.nativeElement.firstChild);
         this.host[0].style.marginLeft = '1px';
         this.__wireEvents__();
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTreeMap', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   setOptions(options: any) : void {
      this.host.jqxTreeMap('setOptions', options);
   }

   // jqxTreeMapComponent properties
   baseColor(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('baseColor', arg);
      } else {
          return this.host.jqxTreeMap('baseColor');
      }
   }

   colorRanges(arg?: Array<jqwidgets.TreeMapColorRanges>) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('colorRanges', arg);
      } else {
          return this.host.jqxTreeMap('colorRanges');
      }
   }

   colorRange(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('colorRange', arg);
      } else {
          return this.host.jqxTreeMap('colorRange');
      }
   }

   colorMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('colorMode', arg);
      } else {
          return this.host.jqxTreeMap('colorMode');
      }
   }

   displayMember(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('displayMember', arg);
      } else {
          return this.host.jqxTreeMap('displayMember');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('height', arg);
      } else {
          return this.host.jqxTreeMap('height');
      }
   }

   hoverEnabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('hoverEnabled', arg);
      } else {
          return this.host.jqxTreeMap('hoverEnabled');
      }
   }

   headerHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('headerHeight', arg);
      } else {
          return this.host.jqxTreeMap('headerHeight');
      }
   }

   legendLabel(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('legendLabel', arg);
      } else {
          return this.host.jqxTreeMap('legendLabel');
      }
   }

   legendPosition(arg?: jqwidgets.TreeMapLegendPosition) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('legendPosition', arg);
      } else {
          return this.host.jqxTreeMap('legendPosition');
      }
   }

   legendScaleCallback(arg?: jqwidgets.(value: Number) => Number) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('legendScaleCallback', arg);
      } else {
          return this.host.jqxTreeMap('legendScaleCallback');
      }
   }

   renderCallbacks(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('renderCallbacks', arg);
      } else {
          return this.host.jqxTreeMap('renderCallbacks');
      }
   }

   selectionEnabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('selectionEnabled', arg);
      } else {
          return this.host.jqxTreeMap('selectionEnabled');
      }
   }

   showLegend(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('showLegend', arg);
      } else {
          return this.host.jqxTreeMap('showLegend');
      }
   }

   source(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('source', arg);
      } else {
          return this.host.jqxTreeMap('source');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('theme', arg);
      } else {
          return this.host.jqxTreeMap('theme');
      }
   }

   valueMember(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('valueMember', arg);
      } else {
          return this.host.jqxTreeMap('valueMember');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxTreeMap('width', arg);
      } else {
          return this.host.jqxTreeMap('width');
      }
   }


   // jqxTreeMapComponent functions
   destroy(): void {
      this.host.jqxTreeMap('destroy');

   }
   render(): void {
      this.host.jqxTreeMap('render');

   }

   // jqxTreeMapComponent events
   @Output() OnBindingComplete = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('bindingComplete', (eventData) => { this.OnBindingComplete.emit(eventData); });
   }

} //jqxTreeMapComponent
