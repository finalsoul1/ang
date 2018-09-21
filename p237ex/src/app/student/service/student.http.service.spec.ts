import { TestBed } from '@angular/core/testing';

import { Student.HttpService } from './student.http.service';

describe('Student.HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Student.HttpService = TestBed.get(Student.HttpService);
    expect(service).toBeTruthy();
  });
});
