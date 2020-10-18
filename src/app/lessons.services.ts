import { LessonInfo } from './lesson-info';

export class LessonsService {
    //web service ga ulanib darslar ro'yxatini olib kelish logikasi yozilishi kerak

    getLessons(): LessonInfo[] {
        let lesson = JSON.parse(`[
            {"id": 1,"title": "Angular asoslari", "price": 50, "duration": 20, "intakeDeadLine": "2019-06-30T23:59:59"},
            {"id": 2,"title": "Web API", "price": 40, "duration": 16, "intakeDeadLine": "2019-07-30T23:59:59"},
            {"id": 3,"title": "Entity Framework", "price": 30, "duration": 12, "intakeDeadLine": "2019-08-30T23:59:59"},
            {"id": 4,"title": "MS SQL Server", "price": 30, "duration": 8, "intakeDeadLine": "2019-09-30T23:59:59"}
        ]`);
        return lesson;
    }
}