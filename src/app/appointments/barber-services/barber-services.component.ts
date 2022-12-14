import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-barber-services',
  templateUrl: './barber-services.component.html',
  styleUrls: ['./barber-services.component.css']
})
export class BarberServicesComponent implements OnInit {
  @ViewChild('services', {static: false}) services: MatSelectionList | undefined
  typeOfServices: string[] = ['Tuns', 'Spalat', 'Styling', 'Masaj Capilar', 'Pensat cu penseta'];
  @Output() navToServices: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectOption() {
    this.navToServices.emit( this.services?.selectedOptions.selected[0]?.value)
  }

}
