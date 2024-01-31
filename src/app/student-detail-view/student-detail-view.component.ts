import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Student} from "../student";
import {Teacher} from "../teacher";
import {provideNativeDateAdapter} from "@angular/material/core";
import {DatePipe} from "@angular/common";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-student-detail-view',
  templateUrl: './student-detail-view.component.html',
  styleUrl: './student-detail-view.component.css',
  providers: [provideNativeDateAdapter(), DatePipe],
})
export class StudentDetailViewComponent {
  @Input() selectedStudent!: Student;
  @Input() courses!: string[];
  @Input() teachers!: Teacher[];
  @Input() sports!: string[];
  @Output() addStudent: EventEmitter<Student> = new EventEmitter<Student>();
  @Output() editStudent: EventEmitter<Student> = new EventEmitter<Student>();

  constructor(private datePipe: DatePipe) {}

  get dateStringToDate(): Date {
    if (this.selectedStudent.startDate) {
      return new Date(this.selectedStudent.startDate);
    }

    return new Date();
  }

  isSameTeacher(t1: Teacher, t2: Teacher): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

  isSameSport(s1: string, s2: string): boolean {
    return s1 === s2;
  }

  get isButtonDisabled(): boolean {
    return this.selectedStudent.firstName === '' ||
      this.selectedStudent.lastName === '' ||
      this.selectedStudent.course === '' ||
      this.selectedStudent.teacher === undefined ||
      this.selectedStudent.sport === undefined;
  }

  onChecked(change: MatCheckboxChange): void {
    this.selectedStudent.isActive = change.checked;
  }

  onDateChange(date: string): void {
    const transformed = this.datePipe.transform(date, 'M/d/yy');
    this.selectedStudent.startDate = transformed ?? '';
  }
}
