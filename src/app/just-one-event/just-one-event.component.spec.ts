import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustOneEventComponent } from './just-one-event.component';

describe('JustOneEventComponent', () => {
  let component: JustOneEventComponent;
  let fixture: ComponentFixture<JustOneEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustOneEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustOneEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
