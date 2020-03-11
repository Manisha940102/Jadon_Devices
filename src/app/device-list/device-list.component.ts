import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  registeredDevice : any
  
  constructor(private http: HttpClient) { }

  getEmployees(): any {
    return this.http.get('/assets/device.json');
  }


  ngOnInit(): void {
  
    this.registeredDevice=this.getEmployees();
  }

}
