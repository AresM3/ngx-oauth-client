import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOauthClientComponent } from './ngx-oauth-client.component';

describe('NgxOauthClientComponent', () => {
  let component: NgxOauthClientComponent;
  let fixture: ComponentFixture<NgxOauthClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxOauthClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxOauthClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
