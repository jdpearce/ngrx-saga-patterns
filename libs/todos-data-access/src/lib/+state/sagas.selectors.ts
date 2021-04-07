import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  adapter,
  SagasPartialState,
  SagasState,
  SAGAS_FEATURE_KEY,
} from './sagas.reducer';

// Lookup the 'Sagas' feature state managed by NgRx
export const selectSagasState = createFeatureSelector<
  SagasPartialState,
  SagasState
>(SAGAS_FEATURE_KEY);

const { selectIds, selectAll, selectEntities } = adapter.getSelectors();

export const selectLog = createSelector(selectSagasState, (state) => state.log);

export const selectSagaIds = createSelector(selectSagasState, selectIds);

export const selectAllSagas = createSelector(selectSagasState, selectAll);

export const selectSagaEntities = createSelector(
  selectSagasState,
  selectEntities
);

export const selectSaga = (sagaId: string) =>
  createSelector(selectSagaEntities, (sagas) => sagas[sagaId]);
