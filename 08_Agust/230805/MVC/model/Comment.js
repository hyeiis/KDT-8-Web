// 댓글 목록은 배열로 가져오고, 각 댓글은 객체로 저장
// DB 선택하는 부분
exports.commentInfos = () => {
  // sql문 실행됐다고 가정하고 반환
  return [
    {
      id: 1,
      userId: "helloworld",
      date: "2022-10-31",
      comment: "안녕하세요 :)",
    },
    {
      id: 2,
      userId: "happy",
      date: "2022-11-01",
      comment: "반가워유~",
    },
    {
      id: 3,
      userId: "lucky",
      date: "2022-11-02",
      comment: "신기하군",
    },
    {
      id: 4,
      userId: "bestpart",
      date: "2022-11-02",
      comment: "첫 댓글입니다! ㅎㅎ",
    },
  ];
};
