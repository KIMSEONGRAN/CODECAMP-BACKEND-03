class Mycar {
  emphysema;
  horsepower;
  color;

  constructor(emphysema, horsepower, color) {
    this.emphysema = emphysema;
    this.horsepowe = horsepower;
    this.color = color;
  }

  depart = () => {
    console.log(
      `내 차 기종은 ${this.emphysema}이고 마력은 ${this.horsepower}고 색은 ${this.color}이니까 출발한다!`
    );
  };

  stop = () => {
    console.log(
      `내 차 기종은 ${this.emphysema}이고 마력은 ${this.horsepower}고 색은 ${this.color}이니까 멈춘다!`
    );
  };
}

const myCar = new Mycar("suv", 20, "royalBlue");
myCar.depart();
myCar.stop();
