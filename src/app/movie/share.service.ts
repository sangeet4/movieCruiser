import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class ShareService {
  private sub = new Subject();
  subj$ = this.sub.asObservable();
  send(value: string) {
    this.sub.next(value);
  }
}
