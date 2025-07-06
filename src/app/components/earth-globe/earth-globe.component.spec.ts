import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthGlobeComponent } from './earth-globe.component';

describe('EarthGlobeComponent', () => {
  let component: EarthGlobeComponent;
  let fixture: ComponentFixture<EarthGlobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarthGlobeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarthGlobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
