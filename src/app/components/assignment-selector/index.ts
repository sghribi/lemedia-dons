import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MatSlideToggleChange} from '@angular/material';

@Component({
  selector: 'app-assignment-selector',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class AssignmentSelectorComponent {
  @Input()
  assignmentForm: FormGroup;
  assignments: {value: string, label: string}[];

  public static readonly noAssignment = 'all';
  public static readonly assignments = [
    {
      value: 'jt-20h',
      label: 'Le journal du 20 heures'
    },
    {
      value: 'arcadia',
      label: 'Arcadia'
    }
  ];

  constructor() {
    this.assignments = AssignmentSelectorComponent.assignments;
  }

  assignToAll(event: MatSlideToggleChange) {
    if(event.checked) {
      this.assignmentForm.patchValue({assignment: AssignmentSelectorComponent.noAssignment});
    } else {
      this.assignmentForm.patchValue({assignment: AssignmentSelectorComponent.assignments[0].value});
    }
  }
}
