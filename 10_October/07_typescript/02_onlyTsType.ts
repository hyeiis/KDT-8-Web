// 튜플 타입 선언
let drink: [string, number];

// 튜플 초기화
drink = ['cola', 2000];

// 튜플 선언, 초기화
let drink2: [string, number] = ['cola', 2000];

// js 배열과 동일하게 인덱스 접근 가능, 메서드 사용 가능
console.log(drink[0]);
// spread 연산자도 사용 가능
console.log([...drink2, '콜라공장']);

// readonly : 데이터 변경X
let drink3: readonly [string, number] = ['cola', 2000];
// drink3.push("콜라공장"); // error

// -------------enum------------------------
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = 'americano',
  latte = 'latte',
}

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

console.log(Cafe.americano);
console.log(Cafe.latte);

enum Cake {
  chocolate, // 0
  vanilla, // 1
  strawberry, // 2
  kiwi = 'kiwi', // 숫자와 문자열 같이 쓸 수 있음(이왕이면 통일하게 좋다)
}

console.log(Cake.chocolate);
console.log(Cake.vanilla);
