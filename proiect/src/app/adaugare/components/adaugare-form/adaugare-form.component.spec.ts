import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugareFormComponent } from './adaugare-form.component';

describe('AdaugareFormComponent', () => {
  let component: AdaugareFormComponent;
  let fixture: ComponentFixture<AdaugareFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdaugareFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaugareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
