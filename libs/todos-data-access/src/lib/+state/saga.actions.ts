import { createAction, props } from '@ngrx/store';

export const makeApiCallOne = createAction(
  '[Saga Actions] Make Api Call One',
  props<{ sagaId: string }>()
);


export const makeApiCallTwo = createAction(
  '[Saga Actions] Make Api Call Two',
  props<{ sagaId: string }>()
);
