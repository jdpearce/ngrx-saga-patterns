import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SagaEffects } from './+state/saga.effects';
import { SagasEffects } from './+state/sagas.effects';
import * as fromSagas from './+state/sagas.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSagas.SAGAS_FEATURE_KEY, fromSagas.reducer),
    EffectsModule.forFeature([SagasEffects, SagaEffects]),
  ],
})
export class TodosDataAccessModule {}
