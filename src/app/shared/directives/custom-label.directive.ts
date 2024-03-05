import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  htmlElement?: ElementRef<HTMLElement>;
  _color: string = 'red';
  _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(errs: ValidationErrors | null | undefined) {
    this._errors = errs;
    this.setMessageErrors();
  }

  constructor(element: ElementRef<HTMLElement>) {
    console.log(element);
    this.htmlElement = element;
  }

  setMessageErrors() {
    if (!this.htmlElement?.nativeElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return;
    } else if (errors.includes('minlength')) {
      this.htmlElement.nativeElement.innerText =
        'Escribe al menos tres caracteres';
      return;
    } else if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'Ingresa un correo valido';
      return;
    }
  }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle() {
    if (!this.htmlElement?.nativeElement) return;

    this.htmlElement.nativeElement.style.color = this._color;
  }
}
