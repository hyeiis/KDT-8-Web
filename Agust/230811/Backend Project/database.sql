USE db1;

SELECT a.name as "학생명", a.major as "전공", a.enroll as "입학년도", b.name as "수업명", b.room as "강의실", b.code, b.teacher_name 
FROM students as a
INNER JOIN classes as b
ON a.id = b.student_id;