import { Component } from '@angular/core';
import {
  Saga,
  SagasPartialState,
  selectAllSagas,
  selectLog,
  startSaga,
} from '@ngrx-saga-patterns/todos-data-access';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as UUID from 'uuid';

@Component({
  selector: 'ngrx-saga-patterns-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  log$: Observable<string[]> = this.store.pipe(
    select(selectLog),
    map((log) =>
      log.map(
        (entry) => `${new Date(entry.time).toTimeString()} : ${entry.message}`
      )
    )
  );

  sagas$: Observable<Saga[]> = this.store.pipe(select(selectAllSagas));

  constructor(private readonly store: Store<SagasPartialState>) {}

  startSaga() {
    this.store.dispatch(startSaga({ sagaId: UUID.v4() }));
  }
}
