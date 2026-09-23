import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelActivity } from './model-activity';

describe('ModelActivity', () => {
  let component: ModelActivity;
  let fixture: ComponentFixture<ModelActivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelActivity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelActivity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
