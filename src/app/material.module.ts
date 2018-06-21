import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from "@angular/material";

@NgModule({
  
  imports: [ 
    MatButtonModule,
    MatCardModule
  ],

  exports: [
    MatButtonModule,
    MatCardModule
  ]

})

export class MaterialModule {}