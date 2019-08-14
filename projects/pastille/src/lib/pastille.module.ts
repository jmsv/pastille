import { NgModule } from '@angular/core';
import { PastilleComponent } from './pastille.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PastilleComponent],
  imports: [CommonModule],
  exports: [PastilleComponent]
})
export class PastilleModule {}
