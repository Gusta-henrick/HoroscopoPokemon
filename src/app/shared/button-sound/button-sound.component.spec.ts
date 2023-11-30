import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSoundComponent } from './button-sound.component';

describe('ButtonSoundComponent', () => {
  let component: ButtonSoundComponent;
  let fixture: ComponentFixture<ButtonSoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSoundComponent]
    });
    fixture = TestBed.createComponent(ButtonSoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
