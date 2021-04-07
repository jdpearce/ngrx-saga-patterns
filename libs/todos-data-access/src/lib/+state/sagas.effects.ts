import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { filter, map } from 'rxjs/operators';
import * as SagasActions from './sagas.actions';

@Injectable()
export class SagasEffects {
  //#region
  // Tiny hack for adding log messages to state on every action
  addLogEntry$ = createEffect(() =>
    this.actions$.pipe(
      filter((action) => action.type !== SagasActions.addLogEntry.type),
      map((action) =>
        SagasActions.addLogEntry({
          entry: {
            time: Date.now(),
            message: JSON.stringify(action),
          },
        })
      )
    )
  );
  //#endregion

  constructor(private actions$: Actions) {}
}
