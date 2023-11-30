import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticulasComponent } from './particulas.component';

describe('ParticulasComponent', () => {
  let component: ParticulasComponent;
  let fixture: ComponentFixture<ParticulasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticulasComponent]
    });
    fixture = TestBed.createComponent(ParticulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
