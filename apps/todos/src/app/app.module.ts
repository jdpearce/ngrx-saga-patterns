import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodosDataAccessModule } from '@ngrx-saga-patterns/todos-data-access';
import { TodosUiModule } from '@ngrx-saga-patterns/todos-ui';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TodosDataAccessModule,
    TodosUiModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
