import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pergunta01Component } from './pergunta01.component';

describe('Pergunta01Component', () => {
  let component: Pergunta01Component;
  let fixture: ComponentFixture<Pergunta01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pergunta01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pergunta01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
