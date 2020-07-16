import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaukariFormComponent } from './naukari-form.component';

describe('NaukariFormComponent', () => {
  let component: NaukariFormComponent;
  let fixture: ComponentFixture<NaukariFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaukariFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaukariFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
