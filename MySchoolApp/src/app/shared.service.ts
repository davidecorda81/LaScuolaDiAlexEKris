import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EProfile } from './api-client';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private kidSubject = new BehaviorSubject<EProfile>(EProfile.Alex);
  kid$ = this.kidSubject.asObservable();

  setKid(value: EProfile) {
    this.kidSubject.next(value);
  }
}
