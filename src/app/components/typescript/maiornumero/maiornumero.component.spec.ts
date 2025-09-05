import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiornumeroComponent } from './maiornumero.component';

describe('MaiornumeroComponent', () => {
  let component: MaiornumeroComponent;
  let fixture: ComponentFixture<MaiornumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaiornumeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaiornumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
