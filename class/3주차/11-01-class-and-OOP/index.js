const aaa = new Date();
console.log(aaa.getFullYear());
console.log(aaa.getMonth() + 1); // 월은 0부터 시작하기에 항상 1을 더해줘야한다

// class 이름은 일반적으로 앞글자를 대문자로 사용한다.
// class 안에 있는 변수, 함수등에는 let, const 같은 선언을 별도로 하지 않는다.
class Monster {
  power = 10;

  // 생성자 : 초기값을 설정해줄 수 있는 부분
  // new Monster()할때 인자 값으로 넣은 값은 컨스트럭터의 파라미터로 담기게 된다.
  constructor(aaa) {
    this.power = aaa;
  }

  attack = () => {
    console.log("공격하자");
    this.power; // 클래스 안에 함수에서 다른 함수 혹은 변수를 쓸 거면 this를 붙여서 쓴다.
    this.run();
    console.log(`내 공격력은 ${this.power}이야!!`);
  };

  run = () => {
    console.log("도망가자");
  };
}

const myMonster1 = new Monster(10);
myMonster1.attack();
myMonster1.run();

const myMonster2 = new Monster(50);
myMonster2.attack();
myMonster2.run();
