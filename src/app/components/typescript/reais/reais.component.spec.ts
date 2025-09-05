import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaisComponent } from './reais.component';

describe('ReaisComponent', () => {
  let component: ReaisComponent;
  let fixture: ComponentFixture<ReaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
