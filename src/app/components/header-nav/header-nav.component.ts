import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  @Input() toggled: boolean;
  @Input() theming: number;
  @Output() toggledChange = new EventEmitter();
  @Output() themingChange = new EventEmitter();
  constructor() {}
  toggle(){
    this.toggledChange.emit(!this.toggled);
    console.log("test",this.toggled);
  }
  themingChanges(colors){
    this.theming = colors
    this.themingChange.emit(this.theming);
    console.log(this.theming);
  }
  
  ngOnInit() {
  }

}
