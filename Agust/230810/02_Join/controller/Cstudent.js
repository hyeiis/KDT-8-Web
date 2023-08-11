const { Student, StudentProfile, Classes } = require("../models");

exports.index = (req, res) => {
  res.render("index");
};

// POST
// 비동기처리하지 않으면 pending 상태가 됨. then보다는 async await을 쓰는 것 권장
exports.post_student = async (req, res) => {
  try {
    const { userid, password, email, name, major, enroll } = req.body;
    const user = await Student.create(
      {
        userid,
        password,
        email,
        // StudentProfile: 외래키
        StudentProfile: {
          name,
          major,
          enroll,
        },
      },
      // include: 쿼리를 실행할 때 관련된 모델의 데이터도 함께 조회 가능하게 하는 옵션
      { include: StudentProfile },
    );
    console.log(user);
    // res.send(user);
  } catch (error) {
    console.log(error);
  }
};
exports.post_class = async (req, res) => {
  try {
    const { name, room, code, teacher_name, studentId } = req.body;
    const classes = await Classes.create({
      name,
      room,
      code,
      teacher_name,
      studentId,
    });
    console.log(classes);
    // res.send(classes);
  } catch (error) {
    console.log(error);
  }
};

// GET
exports.get_student = async (req, res) => {
  try {
    const student = await Student.findAll({
      attributes: ["userid", "email"],
      include: [{ model: StudentProfile, attributes: ["major", "enroll"] }],
    });
    res.send(student);
  } catch (error) {
    console.log(error);
  }
};
