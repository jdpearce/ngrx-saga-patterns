import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { makeApiCallOne, makeApiCallTwo } from './saga.actions';
import { SagasPartialState } from './sagas.reducer';

@Injectable()
export class SagaEffects {
  makeApiCallOne$ = createEffect(
    () => this.actions$.pipe(ofType(makeApiCallOne)),
    // does nothing here
    {
      dispatch: false,
    }
  );

  makeApiCallTwo$ = createEffect(
    () => this.actions$.pipe(ofType(makeApiCallTwo)),
    // does nothing so far
    {
      dispatch: false,
    }
  );

  constructor(
    private actions$: Actions,
    private readonly store: Store<SagasPartialState>
  ) {}
}
