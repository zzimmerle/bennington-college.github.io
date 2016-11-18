/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxSliderComponent),
    multi: true
}

@Component({
    selector: 'angularSlider',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxSliderComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxSlider;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   isHostReady(): boolean {
       return (this.host !== undefined && this.host.length == 1);
   }

   createWidget(options: any): void {
      if (!this.isHostReady()) {

         this.host = $(this.elementRef.nativeElement.firstChild);
         this.__wireEvents__();
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSlider', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxSlider('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxSlider('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxSlider('val', value)
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxSlider('setOptions', options);
   }

   // jqxSliderComponent properties
   buttonsPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('buttonsPosition', arg);
      } else {
          return this.host.jqxSlider('buttonsPosition');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('disabled', arg);
      } else {
          return this.host.jqxSlider('disabled');
      }
   }

   height(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('height', arg);
      } else {
          return this.host.jqxSlider('height');
      }
   }

   layout(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('layout', arg);
      } else {
          return this.host.jqxSlider('layout');
      }
   }

   mode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('mode', arg);
      } else {
          return this.host.jqxSlider('mode');
      }
   }

   minorTicksFrequency(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('minorTicksFrequency', arg);
      } else {
          return this.host.jqxSlider('minorTicksFrequency');
      }
   }

   minorTickSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('minorTickSize', arg);
      } else {
          return this.host.jqxSlider('minorTickSize');
      }
   }

   max(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('max', arg);
      } else {
          return this.host.jqxSlider('max');
      }
   }

   min(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('min', arg);
      } else {
          return this.host.jqxSlider('min');
      }
   }

   rangeSlider(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('rangeSlider', arg);
      } else {
          return this.host.jqxSlider('rangeSlider');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('rtl', arg);
      } else {
          return this.host.jqxSlider('rtl');
      }
   }

   step(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('step', arg);
      } else {
          return this.host.jqxSlider('step');
      }
   }

   showTicks(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('showTicks', arg);
      } else {
          return this.host.jqxSlider('showTicks');
      }
   }

   showMinorTicks(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('showMinorTicks', arg);
      } else {
          return this.host.jqxSlider('showMinorTicks');
      }
   }

   showTickLabels(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('showTickLabels', arg);
      } else {
          return this.host.jqxSlider('showTickLabels');
      }
   }

   showButtons(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('showButtons', arg);
      } else {
          return this.host.jqxSlider('showButtons');
      }
   }

   showRange(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('showRange', arg);
      } else {
          return this.host.jqxSlider('showRange');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('template', arg);
      } else {
          return this.host.jqxSlider('template');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('theme', arg);
      } else {
          return this.host.jqxSlider('theme');
      }
   }

   ticksPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('ticksPosition', arg);
      } else {
          return this.host.jqxSlider('ticksPosition');
      }
   }

   ticksFrequency(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('ticksFrequency', arg);
      } else {
          return this.host.jqxSlider('ticksFrequency');
      }
   }

   tickSize(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('tickSize', arg);
      } else {
          return this.host.jqxSlider('tickSize');
      }
   }

   tickLabelFormatFunction(arg?: (value: any) => String) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('tickLabelFormatFunction', arg);
      } else {
          return this.host.jqxSlider('tickLabelFormatFunction');
      }
   }

   tooltip(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('tooltip', arg);
      } else {
          return this.host.jqxSlider('tooltip');
      }
   }

   tooltipHideDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('tooltipHideDelay', arg);
      } else {
          return this.host.jqxSlider('tooltipHideDelay');
      }
   }

   tooltipPosition(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('tooltipPosition', arg);
      } else {
          return this.host.jqxSlider('tooltipPosition');
      }
   }

   tooltipFormatFunction(arg?: (value: any) => string) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('tooltipFormatFunction', arg);
      } else {
          return this.host.jqxSlider('tooltipFormatFunction');
      }
   }

   value(arg?: any) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('value', arg);
      } else {
          return this.host.jqxSlider('value');
      }
   }

   values(arg?: Array<Number>) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('values', arg);
      } else {
          return this.host.jqxSlider('values');
      }
   }

   width(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxSlider('width', arg);
      } else {
          return this.host.jqxSlider('width');
      }
   }


   // jqxSliderComponent functions
   destroy(): void {
      this.host.jqxSlider('destroy');

   }
   decrementValue(): void {
      this.host.jqxSlider('decrementValue');

   }
   disable(): void {
      this.host.jqxSlider('disable');

   }
   enable(): void {
      this.host.jqxSlider('enable');

   }
   focus(): void {
      this.host.jqxSlider('focus');

   }
   getValue(): number {
      return this.host.jqxSlider('getValue');

   }
   incrementValue(): void {
      this.host.jqxSlider('incrementValue');

   }
   setValue(index: number): void {
      this.host.jqxSlider('setValue', index);

   }
   val(value: string): string {
      return this.host.jqxSlider('val', value);

   }

   // jqxSliderComponent events
   @Output() OnChange = new EventEmitter();
   @Output() OnCreated = new EventEmitter();
   @Output() OnSlide = new EventEmitter();
   @Output() OnSlideStart = new EventEmitter();
   @Output() OnSlideEnd = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
      this.host.on('created', (eventData) => { this.OnCreated.emit(eventData); });
      this.host.on('slide', (eventData) => { this.OnSlide.emit(eventData); });
      this.host.on('slideStart', (eventData) => { this.OnSlideStart.emit(eventData); });
      this.host.on('slideEnd', (eventData) => { this.OnSlideEnd.emit(eventData); });
   }

} //jqxSliderComponent
