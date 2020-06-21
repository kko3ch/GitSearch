import { Directive, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit{

  @Input('highlight') highlightColor: string;

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {}

  @HostListener('mouseenter') mouseEnter(eventData: Event){
    this.backgroundColor = this.highlightColor
    this.color = 'brown'
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event){
    this.backgroundColor = 'black'
    this.color = 'white'
  }

}
