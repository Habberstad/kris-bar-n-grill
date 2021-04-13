import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMenuItemComponent } from './new-menu-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [NewMenuItemComponent],
  exports: [NewMenuItemComponent],
})
export class NewMenuItemModule {}
