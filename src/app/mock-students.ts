import {Student} from "./student";
import {TEACHERS} from "./mock-teachers";
import {Teacher} from "./teacher";
import {formatDate} from "@angular/common";
import { v4 as uuid } from 'uuid';

export const STUDENTS: Student[] = [
  {
    id: uuid(),
    firstName: 'Bart',
    lastName: 'Simpson',
    course: 'Math',
    teacher: randomTeacher(),
    startDate: randomDate(),
    isActive: randomStatus(),
    sport: randomSport(),
  },
  {
    id: uuid(),
    firstName: 'Fred',
    lastName: 'Flintstone',
    course: 'Science',
    teacher: randomTeacher(),
    startDate: randomDate(),
    isActive: randomStatus(),
    sport: randomSport(),
  },
  {
    id: uuid(),
    firstName: 'Hank',
    lastName: 'Hill',
    course: 'History',
    teacher: randomTeacher(),
    startDate: randomDate(),
    isActive: randomStatus(),
    sport: randomSport(),
  },
  {
    id: uuid(),
    firstName: 'Hulk',
    lastName: 'Hogan',
    course: 'Science',
    teacher: randomTeacher(),
    startDate: randomDate(),
    isActive: randomStatus(),
    sport: randomSport(),
  },
  {
    id: uuid(),
    firstName: 'Mickey',
    lastName: 'Mouse',
    course: 'Math',
    teacher: randomTeacher(),
    startDate: randomDate(),
    isActive: randomStatus(),
    sport: randomSport(),
  }
];

export function randomTeacher(): Teacher {
  const index = Math.floor(Math.random() * TEACHERS.length);

  return TEACHERS[index];
}

export function randomDate(): string {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);

  return formatDate(new Date(timestamp), 'M/d/yy', 'en_us');
}

export function randomStatus(): boolean {
  const trueFalse = [true, false];
  const index = Math.floor(Math.random() * trueFalse.length);

  return trueFalse[index];
}

export function randomSport(): string {
  const sports = [
    'Football',
    'Basketball',
    'Running',
    'Baseball',
    'Bowling',
    'Disc Golf'];

  const index = Math.floor(Math.random() * sports.length);

  return sports[index];
}
