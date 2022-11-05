import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { getSrc } from 'src/app/shared/utils/get-src.util';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFileComponent,
      multi: true
    }
  ]
})
export class InputFileComponent implements ControlValueAccessor {
  @Input() accept = '';
  value!: File;
  onChange!: (value: File) => void;
  onTouch!: () => void;
  isDisabled = false;
  src = '';

  async setValue(e: any) {
    this.value = e.target.files[0];
    this.onChange(this.value);
    this.onTouch();
    this.src = await getSrc(this.value)
  }

  writeValue(value: File): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
