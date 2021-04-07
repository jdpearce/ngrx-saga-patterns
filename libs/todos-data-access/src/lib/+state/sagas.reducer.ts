import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as SagasActions from './sagas.actions';
import { LogEntry, Saga } from './sagas.models';

export const SAGAS_FEATURE_KEY = 'sagas';

export interface SagasState extends EntityState<Saga> {
  log: LogEntry[];
}

export interface SagasPartialState {
  readonly [SAGAS_FEATURE_KEY]: SagasState;
}

export const adapter: EntityAdapter<Saga> = createEntityAdapter<Saga>();

export const initialState: SagasState = adapter.getInitialState({
  log: [],
});

const sagasReducer = createReducer(
  initialState,
  on(SagasActions.addLogEntry, (state, action) => ({
    ...state,
    log: [...state.log, action.entry],
  })),
  on(SagasActions.startSaga, (state, { sagaId }) =>
    adapter.addOne({ id: sagaId }, state)
  ),
  on(SagasActions.endSaga, (state, { sagaId }) =>
    adapter.removeOne(sagaId, state)
  )
);

export function reducer(state: SagasState | undefined, action: Action) {
  return sagasReducer(state, action);
}
