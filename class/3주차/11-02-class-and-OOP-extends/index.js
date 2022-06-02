// 1. 공통된 부분은 부모 클래스를 만들어 자식에게 상속해주자.
class Monster {
  power = 10;

  constructor(aaa) {
    this.power = aaa;
  }

  attack = () => {
    console.log("공격하자");
    console.log(`내 공격력은 ${this.power}이야!!`);
  };
}

// 2. 자식클래스가 부모에게 상속 받는 법 : extends 부모클래스
// 3. 상속과 별개로 constructor는 각 클래스 마다 생성할 수 있다.
// 4. super(컨스트럭트 매개변수)는 부모 클래스에게 인자를 토스 하는 개념이다. new Class(인자)를 받을때 super()을 쓰면 부모 생성자가 인자값을 받아 쓸 수 있다.
// 5. 상속은 하나만 가능하다. 동시에 여러개 ❌️.
class SkyMonster extends Monster {
  constructor(qqq) {
    super(qqq);
  }
  run = () => {
    console.log("날아서 도망가자");
  };
}

class GroundMonster extends Monster {
  constructor(www) {
    super(www);
  }
  run = () => {
    console.log("뛰어서 도망가자");
  };
}

const myMonster1 = new SkyMonster(10);
myMonster1.attack();
myMonster1.run();

const myMonster2 = new GroundMonster(10);
myMonster2.attack();
myMonster2.run();
