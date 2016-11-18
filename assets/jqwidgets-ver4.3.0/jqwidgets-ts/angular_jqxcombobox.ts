/// <reference path="jqwidgets.d.ts" />
import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from '@angular/http';
declare let $: any;

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxComboBoxComponent),
    multi: true
}

@Component({
    selector: 'angularComboBox',
    template: '<div><ng-content></ng-content></div>',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})

export class jqxComboBoxComponent implements ControlValueAccessor {
   @Input('width') containerWidth: any;
   @Input('height') containerHeight: any;

   elementRef: ElementRef;
   host;
   private onTouchedCallback: () => void = noop;
   private onChangeCallback: (_: any) => void = noop;
   widgetObject:  jqwidgets.jqxComboBox;

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
         this.widgetObject = jqwidgets.createInstance(this.host, 'jqxComboBox', options);
         this.__updateRect__();

      }
   }

   __updateRect__() : void {
      this.host.css({width: this.containerWidth, height: this.containerHeight});
   }

   get ngValue(): any {
       if (this.widgetObject)
           return this.host.jqxComboBox('val');
       return '';
   }

   set ngValue(value: any) {
       if (this.widgetObject) {
           this.host.jqxComboBox('val', value)
           this.onChangeCallback(value);
       }
   }

   writengValue(value: any): void {
       if(value !== this.ngValue && this.widgetObject) {
            this.host.jqxComboBox('val', value)
       }
   }

   registerOnChange(fn: any): void {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any): void {
       this.onTouchedCallback = fn;
   }

   setOptions(options: any) : void {
      this.host.jqxComboBox('setOptions', options);
   }

   // jqxComboBoxComponent properties
   animationType(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('animationType', arg);
      } else {
          return this.host.jqxComboBox('animationType');
      }
   }

   autoComplete(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('autoComplete', arg);
      } else {
          return this.host.jqxComboBox('autoComplete');
      }
   }

   autoOpen(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('autoOpen', arg);
      } else {
          return this.host.jqxComboBox('autoOpen');
      }
   }

   autoItemsHeight(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('autoItemsHeight', arg);
      } else {
          return this.host.jqxComboBox('autoItemsHeight');
      }
   }

   autoDropDownHeight(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('autoDropDownHeight', arg);
      } else {
          return this.host.jqxComboBox('autoDropDownHeight');
      }
   }

   closeDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('closeDelay', arg);
      } else {
          return this.host.jqxComboBox('closeDelay');
      }
   }

   checkboxes(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('checkboxes', arg);
      } else {
          return this.host.jqxComboBox('checkboxes');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('disabled', arg);
      } else {
          return this.host.jqxComboBox('disabled');
      }
   }

   displayMember(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('displayMember', arg);
      } else {
          return this.host.jqxComboBox('displayMember');
      }
   }

   dropDownHorizontalAlignment(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('dropDownHorizontalAlignment', arg);
      } else {
          return this.host.jqxComboBox('dropDownHorizontalAlignment');
      }
   }

   dropDownVerticalAlignment(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('dropDownVerticalAlignment', arg);
      } else {
          return this.host.jqxComboBox('dropDownVerticalAlignment');
      }
   }

   dropDownHeight(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('dropDownHeight', arg);
      } else {
          return this.host.jqxComboBox('dropDownHeight');
      }
   }

   dropDownWidth(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('dropDownWidth', arg);
      } else {
          return this.host.jqxComboBox('dropDownWidth');
      }
   }

   enableHover(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('enableHover', arg);
      } else {
          return this.host.jqxComboBox('enableHover');
      }
   }

   enableSelection(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('enableSelection', arg);
      } else {
          return this.host.jqxComboBox('enableSelection');
      }
   }

   enableBrowserBoundsDetection(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('enableBrowserBoundsDetection', arg);
      } else {
          return this.host.jqxComboBox('enableBrowserBoundsDetection');
      }
   }

   height(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('height', arg);
      } else {
          return this.host.jqxComboBox('height');
      }
   }

   itemHeight(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('itemHeight', arg);
      } else {
          return this.host.jqxComboBox('itemHeight');
      }
   }

   multiSelect(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('multiSelect', arg);
      } else {
          return this.host.jqxComboBox('multiSelect');
      }
   }

   minLength(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('minLength', arg);
      } else {
          return this.host.jqxComboBox('minLength');
      }
   }

   openDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('openDelay', arg);
      } else {
          return this.host.jqxComboBox('openDelay');
      }
   }

   popupZIndex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('popupZIndex', arg);
      } else {
          return this.host.jqxComboBox('popupZIndex');
      }
   }

   placeHolder(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('placeHolder', arg);
      } else {
          return this.host.jqxComboBox('placeHolder');
      }
   }

   remoteAutoComplete(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('remoteAutoComplete', arg);
      } else {
          return this.host.jqxComboBox('remoteAutoComplete');
      }
   }

   remoteAutoCompleteDelay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('remoteAutoCompleteDelay', arg);
      } else {
          return this.host.jqxComboBox('remoteAutoCompleteDelay');
      }
   }

   renderer(arg?: (index:number, label?:string, value?:any) => string) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('renderer', arg);
      } else {
          return this.host.jqxComboBox('renderer');
      }
   }

   renderSelectedItem(arg?: (index:number, item?:any) => string) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('renderSelectedItem', arg);
      } else {
          return this.host.jqxComboBox('renderSelectedItem');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('rtl', arg);
      } else {
          return this.host.jqxComboBox('rtl');
      }
   }

   selectedIndex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('selectedIndex', arg);
      } else {
          return this.host.jqxComboBox('selectedIndex');
      }
   }

   showArrow(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('showArrow', arg);
      } else {
          return this.host.jqxComboBox('showArrow');
      }
   }

   showCloseButtons(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('showCloseButtons', arg);
      } else {
          return this.host.jqxComboBox('showCloseButtons');
      }
   }

   searchMode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('searchMode', arg);
      } else {
          return this.host.jqxComboBox('searchMode');
      }
   }

   search(arg?: (searchString:string) => void) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('search', arg);
      } else {
          return this.host.jqxComboBox('search');
      }
   }

   source(arg?: Array<any>) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('source', arg);
      } else {
          return this.host.jqxComboBox('source');
      }
   }

   scrollBarSize(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('scrollBarSize', arg);
      } else {
          return this.host.jqxComboBox('scrollBarSize');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('template', arg);
      } else {
          return this.host.jqxComboBox('template');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('theme', arg);
      } else {
          return this.host.jqxComboBox('theme');
      }
   }

   validateSelection(arg?: (itemValue:string) => boolean) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('validateSelection', arg);
      } else {
          return this.host.jqxComboBox('validateSelection');
      }
   }

   valueMember(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('valueMember', arg);
      } else {
          return this.host.jqxComboBox('valueMember');
      }
   }

   width(arg?: jqwidgets.Size) : any {
      if (arg !== undefined) {
          this.host.jqxComboBox('width', arg);
      } else {
          return this.host.jqxComboBox('width');
      }
   }


   // jqxComboBoxComponent functions
   addItem(item: any): boolean {
      return this.host.jqxComboBox('addItem', item);

   }
   clearSelection(): void {
      this.host.jqxComboBox('clearSelection');

   }
   clear(): void {
      this.host.jqxComboBox('clear');

   }
   close(): void {
      this.host.jqxComboBox('close');

   }
   checkIndex(index: number): void {
      this.host.jqxComboBox('checkIndex', index);

   }
   checkItem(item: any): void {
      this.host.jqxComboBox('checkItem', item);

   }
   checkAll(): void {
      this.host.jqxComboBox('checkAll');

   }
   destroy(): void {
      this.host.jqxComboBox('destroy');

   }
   disableItem(item: any): void {
      this.host.jqxComboBox('disableItem', item);

   }
   disableAt(index: number): void {
      this.host.jqxComboBox('disableAt', index);

   }
   enableItem(item: any): void {
      this.host.jqxComboBox('enableItem', item);

   }
   enableAt(index: number): void {
      this.host.jqxComboBox('enableAt', index);

   }
   ensureVisible(index: number): void {
      this.host.jqxComboBox('ensureVisible', index);

   }
   focus(): void {
      this.host.jqxComboBox('focus');

   }
   getItem(index: number): any {
      return this.host.jqxComboBox('getItem', index);

   }
   getItemByValue(value: string): any {
      return this.host.jqxComboBox('getItemByValue', value);

   }
   getVisibleItems(): Array<any> {
      return this.host.jqxComboBox('getVisibleItems');

   }
   getItems(): Array<any> {
      return this.host.jqxComboBox('getItems');

   }
   getCheckedItems(): Array<any> {
      return this.host.jqxComboBox('getCheckedItems');

   }
   getSelectedItem(): any {
      return this.host.jqxComboBox('getSelectedItem');

   }
   getSelectedItems(): Array<any> {
      return this.host.jqxComboBox('getSelectedItems');

   }
   getSelectedIndex(): number {
      return this.host.jqxComboBox('getSelectedIndex');

   }
   insertAt(item: any, index: number): boolean {
      return this.host.jqxComboBox('insertAt', item, index);

   }
   isOpened(): boolean {
      return this.host.jqxComboBox('isOpened');

   }
   indeterminateIndex(index: number): void {
      this.host.jqxComboBox('indeterminateIndex', index);

   }
   indeterminateItem(item: any): void {
      this.host.jqxComboBox('indeterminateItem', item);

   }
   loadFromSelect(selectTagId: string): void {
      this.host.jqxComboBox('loadFromSelect', selectTagId);

   }
   open(): void {
      this.host.jqxComboBox('open');

   }
   removeItem(item: any): boolean {
      return this.host.jqxComboBox('removeItem', item);

   }
   removeAt(index: number): boolean {
      return this.host.jqxComboBox('removeAt', index);

   }
   selectIndex(index: number): void {
      this.host.jqxComboBox('selectIndex', index);

   }
   selectItem(item: any): void {
      this.host.jqxComboBox('selectItem', item);

   }
   updateItem(item: any, itemValue: string): void {
      this.host.jqxComboBox('updateItem', item, itemValue);

   }
   updateAt(item: any, index: any): void {
      this.host.jqxComboBox('updateAt', item, index);

   }
   unselectIndex(index: number): void {
      this.host.jqxComboBox('unselectIndex', index);

   }
   unselectItem(item: any): void {
      this.host.jqxComboBox('unselectItem', item);

   }
   uncheckIndex(index: number): void {
      this.host.jqxComboBox('uncheckIndex', index);

   }
   uncheckItem(item: any): void {
      this.host.jqxComboBox('uncheckItem', item);

   }
   uncheckAll(): void {
      this.host.jqxComboBox('uncheckAll');

   }
   val(value: string): string {
      return this.host.jqxComboBox('val', value);

   }

   // jqxComboBoxComponent events
   @Output() OnBindingComplete = new EventEmitter();
   @Output() OnCheckChange = new EventEmitter();
   @Output() OnClose = new EventEmitter();
   @Output() OnChange = new EventEmitter();
   @Output() OnOpen = new EventEmitter();
   @Output() OnSelect = new EventEmitter();
   @Output() OnUnselect = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('bindingComplete', (eventData) => { this.OnBindingComplete.emit(eventData); });
      this.host.on('checkChange', (eventData) => { this.OnCheckChange.emit(eventData); });
      this.host.on('close', (eventData) => { this.OnClose.emit(eventData); });
      this.host.on('change', (eventData) => { this.OnChange.emit(eventData); });
      this.host.on('open', (eventData) => { this.OnOpen.emit(eventData); });
      this.host.on('select', (eventData) => { this.OnSelect.emit(eventData); });
      this.host.on('unselect', (eventData) => { this.OnUnselect.emit(eventData); });
   }

} //jqxComboBoxComponent
