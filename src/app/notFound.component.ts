import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  template: `<div class="p-3 mb-2 bg-danger text-white">Sorry, something went wrong</div>
<button class="btn btn-primary" routerLink="/">Start Over</button>`,
  imports: [RouterLink]
})
export class NotFoundComponent {}
