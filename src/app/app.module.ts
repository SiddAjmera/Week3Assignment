import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { RemoveElementAfterDirective } from './directives/remove-element-after/remove-element-after.directive';
import { CycleTextColorDirective } from './directives/cycle-text-color/cycle-text-color.directive';
import { MaskCreditCardPipe } from './pipes/mask-credit-card/mask-credit-card.pipe';
import { DirectivesAndPipesComponent } from './components/directives-and-pipes/directives-and-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    RemoveElementAfterDirective,
    CycleTextColorDirective,
    MaskCreditCardPipe,
    DirectivesAndPipesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'directives-and-pipes', component: DirectivesAndPipesComponent },
      { path: 'forms', component: ReactiveFormComponent },
      { path: '', redirectTo: '/forms', pathMatch: 'full' },
      { path: '**', redirectTo: '/forms', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
