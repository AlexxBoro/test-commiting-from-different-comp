import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `<p>I'm a <span>WARNING</span> component nested inside an Alert Component</p>`,
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent { }
