import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { JsonPipe, NgForOf } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    JsonPipe,
    NgForOf 
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'templateDrivenForm';
  displayedColumns = ['column1', 'column2', 'actions'];
  dropdownOptions = [
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
    { label: 'Option C', value: 'C' }
  ];

  tableData = [
    { column1: '', column2: '' },
    { column1: '', column2: '' },
    { column1: '', column2: '' }
  ];
  addRow(row:any,index: number) {
    debugger;
    // const current = this.tableData[index];
    // const newRow = { column1: current.column1, column2: current.column2 };
    // this.tableData.splice(index + 1, 0, newRow);
    // this.tableData = [...this.tableData]; // triggers UI refresh
    // console.log(row)
    // console.log(this.tableData)
    // let newRow = JSON.parse(JSON.stringify(row));
    // this.tableData.splice(index + 1, 0, newRow);
    // this.tableData = [...this.tableData];

    let newRow = JSON.parse(JSON.stringify(row));

    row.column1 = ''
    row.column2 = ''

    // Rebind the selected values using dropdownOptions
    newRow.column1 = this.dropdownOptions.find(opt => opt.value === newRow.column1?.value) || '';
    newRow.column2 = this.dropdownOptions.find(opt => opt.value === newRow.column2?.value) || '';

  this.tableData.splice(index + 1, 0, newRow);
  this.tableData = [...this.tableData]; // trigger change detection

  }

  trackByIndex(index: number): number {
    return index;
  }
  compareOptions(o1: any, o2: any): boolean {
    return o1?.value === o2?.value;
  }
  
}
