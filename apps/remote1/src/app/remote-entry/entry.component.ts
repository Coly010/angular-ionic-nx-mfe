import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'ionic-mfe-remote1-entry',
  template: `<ionic-mfe-nx-welcome></ionic-mfe-nx-welcome>`,
})
export class RemoteEntryComponent {}
