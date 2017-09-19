import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCycleTextColor]'
})
export class CycleTextColorDirective implements OnInit {

  private index: number = 0;
  @Input() listOfColors: Array<string> = ['black'];
  @Input() changeAfter: number = 5000;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    setInterval(() => {
      this.renderer.setStyle(this.el.nativeElement, 'color', this.listOfColors[this.index]);
      this.index = (this.index + 1) % this.listOfColors.length;
    }, this.changeAfter);
  }

}
