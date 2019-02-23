import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieContainerComponent } from './recepie-container.component';

describe('RecepieContainerComponent', () => {
  let component: RecepieContainerComponent;
  let fixture: ComponentFixture<RecepieContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepieContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
