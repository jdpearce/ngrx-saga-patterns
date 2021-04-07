import { Component, Input, OnInit } from '@angular/core';
import {
  endSaga,
  Saga,
  SagasPartialState,
  selectSaga,
} from '@ngrx-saga-patterns/todos-data-access';
import { select, Store } from '@ngrx/store';
import {
  makeApiCallOne,
  makeApiCallTwo,
} from 'libs/todos-data-access/src/lib/+state/saga.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngrx-saga-patterns-saga-controller',
  templateUrl: './saga-controller.component.html',
  styleUrls: ['./saga-controller.component.scss'],
})
export class SagaControllerComponent implements OnInit {
  @Input() sagaId: string;

  saga$: Observable<Saga>;

  constructor(private readonly store: Store<SagasPartialState>) {}

  ngOnInit(): void {
    this.saga$ = this.store.pipe(select(selectSaga(this.sagaId)));
  }

  makeApiCallOne() {
    this.store.dispatch(makeApiCallOne({ sagaId: this.sagaId }));
  }

  makeApiCallTwo() {
    this.store.dispatch(makeApiCallTwo({ sagaId: this.sagaId }));
  }

  finish() {
    this.store.dispatch(endSaga({ sagaId: this.sagaId }));
  }
}
