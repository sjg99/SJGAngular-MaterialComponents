import { Injectable } from '@angular/core';
import {MaterialData} from 'src/app/DTO/MaterialData';

@Injectable({
  providedIn: 'root'
})
export class MaterialDataService {

  MaterialData: MaterialData={
    AutoCompleteOptions:[
      {Text:"AutoComplete 1"},
      {Text:"AutoComplete 2"},
      {Text:"AutoComplete 3"},
      {Text:"AutoComplete 4"}
    ],
    CheckBoxOptions:[
      {Text:"CheckBox 1"},
      {Text:"CheckBox 2"},
      {Text:"CheckBox 3"},
      {Text:"CheckBox 4"}
    ],
    RadioButtonOptions:[
      {Text:"Radio 1"},
      {Text:"Radio 2"},
      {Text:"Radio 3"},
      {Text:"Radio 4"},
    ],
    SelectOptions:[
      {Text:"Select 1"},
      {Text:"Select 2"},
      {Text:"Select 3"},
      {Text:"Select 4"},
    ]
  }

  constructor() { }

  getMaterialData(){
    return this.MaterialData;
  }
}
