//* 경로와 연결될 함수 내용 정의 *//
const Comment = require("../model/Comment");

exports.main = (req, res) => {
  res.render("index");
};

// 댓글 목록
exports.comments = (req, res) => {
  console.log(Comment.commentInfos());
  // res.render("comments");
  // 컨트롤러와 모델 연결
  res.render("comments", { commentInfos: Comment.commentInfos() });
};

exports.comment = (req, res) => {
  // console.log(req.params); // 라우트 매개변수에 대한 정보 담겨 있음
  console.log(req.params.id); // id 고유 값

  const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
  const comments = Comment.commentInfos();
  console.log(comments[commentId - 1]);

  //* 변수 :id에 숫자가 아닌 값이 온다면 404
  if (isNaN(commentId)) return res.render("404");

  // 존재 하지 않는 댓글 id 접근 시 404
  if (commentId < 1 || commentId > comments.length) return res.render("404");

  res.render("comment", { commentInfo: comments[commentId - 1] });
};
