import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAndPipesComponent } from './directives-and-pipes.component';

describe('DirectivesAndPipesComponent', () => {
  let component: DirectivesAndPipesComponent;
  let fixture: ComponentFixture<DirectivesAndPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesAndPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesAndPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
