import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INNOVATVEComponent } from './innovatve.component';

describe('INNOVATVEComponent', () => {
  let component: INNOVATVEComponent;
  let fixture: ComponentFixture<INNOVATVEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ INNOVATVEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(INNOVATVEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
