import { Component } from '@angular/core';
@Component({
  template: `<div class="p-3 mb-2 bg-danger text-white">Sorry, something went wrong</div>
<button class="btn btn-primary" routerLink="/">Start Over</button>`
})
export class NotFoundComponent {}
