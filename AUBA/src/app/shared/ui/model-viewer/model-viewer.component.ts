import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-model-viewer',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <model-viewer 
      [attr.src]="modelSrc" 
      ar 
      camera-controls 
      auto-rotate 
      shadow-intensity="1">
      <ng-content select="[slot=ar-button]"></ng-content>
    </model-viewer>
  `,
  styleUrls: ['./model-viewer.component.scss']
})
export class ModelViewerComponent {
  @Input({ required: true }) modelSrc!: string;
}
