import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMenuItemComponent } from './new-menu-item.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NewMenuItemComponent],
  exports: [NewMenuItemComponent],
})
export class NewMenuItemModule {}
