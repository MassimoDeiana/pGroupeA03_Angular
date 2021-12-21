import { Component, OnInit } from '@angular/core';
import {Meeting} from "../_model/meeting";
import {ParticipateMeeting} from "../_model/participateMeeting";
import {Course} from "../_model/course";
import {Lesson} from "../_model/lesson";
import {ParticipateMeetingService} from "../_services/_participateMeeting/participate-meeting.service";
import {LessonService} from "../_services/_lesson/lesson.service";
import {CourseService} from "../_services/_course/course.service";
import {AuthenticationTeacherService} from "../_services/_Authentification/authentificationTeacher.service";
import {AuthenticationStudentService} from "../_services/_Authentification/authentificationStudent.service";
import {StudentService} from "../_services/_student/student.service";
import {Student} from "../_model/student";

@Component({
  selector: 'app-scheduler-container-student',
  templateUrl: './scheduler-container-student.component.html',
  styleUrls: ['./scheduler-container-student.component.css']
})
export class SchedulerContainerStudentComponent implements OnInit {

  courses:Course[]=[];
  lessons:Lesson[]=[];
  student:Student;

  constructor(private participateService:ParticipateMeetingService,
              private lessonService:LessonService,
              private courseService:CourseService,
              private studentService:StudentService,
              private authService:AuthenticationStudentService) { }

  ngOnInit(): void {
    this.getAllCourse();
    this.getAllLesson();
    this.getStudent(this.authService.currentUserValue.idStudent!);
  }

  getStudent(id:number){
    this.studentService.get(id).subscribe(s=>this.student=s);
  }

  getAllCourse(){
    this.courseService
      .getAll()
      .subscribe(c=>this.courses=c);
  }

  getAllLesson(){
    this.lessonService
      .getAll()
      .subscribe(l=>this.lessons=l);
  }

}
