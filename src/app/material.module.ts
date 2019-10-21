import { NgModule } from '@angular/core';
import { MatIconModule, MatButtonModule } from '@angular/material';

const MaterialModules = [MatIconModule, MatButtonModule];

@NgModule({
  imports: [...MaterialModules],
  exports: [...MaterialModules]
})
export class MaterialModule {}
