import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ShareService {

  private valueObs: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public setValue(value: any): void {
    this.valueObs.next(value);
  }

  public getValue(): Observable<any> {
    return this.valueObs;
  }

  private sub1 = new Subject();
  subj1$ = this.sub1.asObservable();
  sendName(value: string) {
    this.sub1.next(value);
  }
}
