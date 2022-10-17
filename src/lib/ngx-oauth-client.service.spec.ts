import { TestBed } from '@angular/core/testing';

import { NgxOauthClientService } from './ngx-oauth-client.service';
import {NgxOauthClientModule} from "./ngx-oauth-client.module";

describe('NgxOauthClientService', () => {
  let service: NgxOauthClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxOauthClientModule]
    });
    service = TestBed.inject(NgxOauthClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
