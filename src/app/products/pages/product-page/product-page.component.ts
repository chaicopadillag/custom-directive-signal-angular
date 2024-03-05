import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styles: ``,
})
export class ProductPageComponent {
  private fb = inject(FormBuilder);
  public formFb = this.fb.group({
    colorName: [
      'green',
      [Validators.required, Validators.minLength(3), Validators.email],
    ],
  });

  color = 'red';

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
  }
}
