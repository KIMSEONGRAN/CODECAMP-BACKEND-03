class Monster {
  power = 10;

  constructor(aaa) {
    this.power = aaa;
  }

  attack = () => {
    console.log("공격하자");
    this.power;
    console.log(`내 공격력은 ${this.power}이야!!`);
  };
}

const myMonster1 = new Monster();
myMonster1.attack(); // 내 공격력은 undefined이야!!
/**
 *  내 생각으로는 constructor(매개변수){}를 쓰고 정작 사용할때 인자값을 빼면 undefined가
 * 되는 이뉴는 아마도 매개변수를 받아서 쓰려고 그 안에 내용을 지정해 놨는데, 값이 안들어와서
 * 언디파인드로 처리가 되는 것 같다. 컨스트럭터에 파라미터를 받지 않으면 정상적으로
 * 값이 출력되는 것을 보아서 컨스트럭트에 매개변수를 받기로 했으면 우선순위로 적용되는 것같다.
 */

const myMonster2 = new Monster(50);
myMonster2.attack(); // 내 공격력은 50이야!!
