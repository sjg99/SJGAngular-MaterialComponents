import { Component, OnInit } from '@angular/core';
import {MaterialData} from 'src/app/DTO/MaterialData';
import {MaterialDataService} from 'src/app/Services/MaterialData/material-data.service';

@Component({
  selector: 'app-material-data',
  templateUrl: './material-data.component.html',
  styleUrls: ['./material-data.component.scss']
})
export class MaterialDataComponent implements OnInit {

  MaterialData:MaterialData;

  constructor(private MaterialDataSerice:MaterialDataService) {
    this.MaterialData=this.MaterialDataSerice.getMaterialData();
  }

  ngOnInit() {
  }

}
