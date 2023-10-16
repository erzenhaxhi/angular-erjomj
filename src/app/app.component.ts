import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('chordA', { static: true }) chordA: ElementRef;
  @ViewChild('chordB', { static: true }) chordB: ElementRef;
  @ViewChild('chordC', { static: true }) chordC: ElementRef;

  @HostListener('window:keyup', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    // console.log(event)
    // if (event.key === 'A' || event.key === 'B' || event.key === 'C') {
    //   console.log(`You pressed the key: ${event.key}`);
    //   // You can perform any action here based on the key press.
    // }
  }

  ngOnInit() {
    // this.chordA.nativeElement.click();
    // this.chordA.nativeElement.click();
  }

  onClick(chord) {
    console.log('clicked', chord);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
