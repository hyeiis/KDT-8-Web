# 기본 이미지 설정
FROM node:16

# 작업 디렉토리 설정
WORKDIR /app

# 소스(파일) 추가
COPY . /app

# 패키지 설치 명령어 (쉘 스크립트)
RUN npm install

# 포트 연결 (포트를 명시할 뿐, 실행하지는 않음)
EXPOSE 8000

# 실행 명령문 = 컨테이너 생성 및 실행할 때 사용
# node index.js
CMD [ "node", "index.js" ]
