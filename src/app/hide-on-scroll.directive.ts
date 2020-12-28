import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHideOnScroll]'
})
export class HideOnScrollDirective {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  private unlistener!: () => void;
  private prevScrollPos = window.pageYOffset;

  expand(value: string | number): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'transition', '1s');
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transform',
      `translateY(${value})`
    );
  }
  ngOnInit(): void {
    this.unlistener = this.renderer.listen('document', 'scroll', () => {
      const currentScrollpos = window.pageYOffset;
      if (this.prevScrollPos > currentScrollpos) {
        this.expand('0px');
      } else {
        this.expand('-70px');
      }
      this.prevScrollPos = currentScrollpos;
    });
  }

  ngOnDestroy(): void {
    this.unlistener();
  }
}
