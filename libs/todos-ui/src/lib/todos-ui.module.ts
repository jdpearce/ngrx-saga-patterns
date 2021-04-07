import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShellComponent } from './shell/shell.component';
import { SagaControllerComponent } from './saga-controller/saga-controller.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ShellComponent, SagaControllerComponent],
  exports: [ShellComponent],
})
export class TodosUiModule {}
