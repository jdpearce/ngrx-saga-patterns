import { createAction, props } from '@ngrx/store';
import { LogEntry } from './sagas.models';

export const addLogEntry = createAction(
  '[Saga Actions] Add Log Entry',
  props<{ entry: LogEntry }>()
);

export const startSaga = createAction(
  '[Saga Actions] Start Saga',
  props<{ sagaId: string }>()
);

export const endSaga = createAction(
  '[Saga Actions] End Saga',
  props<{ sagaId: string }>()
);
