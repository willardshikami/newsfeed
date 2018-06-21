import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material";
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  
  imports: [ 
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule
  ],

  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule
  ]

})

export class MaterialModule {}