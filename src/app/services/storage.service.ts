import { Injectable } from '@angular/core';
import { LocalUser } from '../models/localUser';
import { STORAGE_KEYS } from 'src/configs/storage.keys.config';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getLocalUser(): LocalUser {
    const user = localStorage.getItem(STORAGE_KEYS.localUser);

    if (user == null) {
      return null;
    } else {
      return JSON.parse(user);
    }


  }

  setLocalUser(obj: LocalUser) {
    if (obj == null) {
      localStorage.removeItem(STORAGE_KEYS.localUser);
    } else {
      localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }
  }
}
