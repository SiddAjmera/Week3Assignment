import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRemoveElementAfter]'
})
export class RemoveElementAfterDirective {

  @Input() set appRemoveElementAfter(value: number) {
    this.vcRef.createEmbeddedView(this.template);
    setTimeout(() => {
      this.vcRef.clear();
    }, value);
  }

  constructor(private template: TemplateRef<HTMLElement>, private vcRef: ViewContainerRef) { }

}
