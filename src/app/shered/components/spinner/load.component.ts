import { RESTORED_VIEW_CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.less']
})
export class LoadComponent implements OnInit {

   constructor() { }

  ngOnInit(): void {
  }

  static getSpinner(isLoading: boolean) {
    return isLoading = !isLoading;
  }
}
