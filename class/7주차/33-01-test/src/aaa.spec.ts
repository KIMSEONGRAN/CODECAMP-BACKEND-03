// 테스트 이름 :  it("짓고싶은 이름", () => {})

// 1. 1개 테스트하기
it('더하기 이름', () => {
  const a = 1;
  const b = 2;

  // 예상하기로(expect) toBe(원하는값) 이기를 판별.
  expect(a + b).toBe(3);
});

// 2. 여러개 묶음으로 테스트하기
describe('나의 테스트 그룹', () => {
  it('더하기 테스트', () => {
    const a = 1;
    const b = 2;

    expect(a + b).toBe(3);
  });
  it('곱하기 테스트', () => {
    const a = 1;
    const b = 2;

    expect(a * b).toBe(2);
  });
});

// 3. 상품 구매하기 테스트 예제
describe('상품 구매테스트', () => {
  // beforeEach : 각각의 테스트를 하기전에 실행되어야할 로직을 넣어둠.
  beforeEach(() => {
    // 로그인 로직 작성!!
  });

  it('돈 검증하기', () => {
    const result = true; // 돈이 충분하다고 가정
    expect(result).toBe(true);
  });
  it('상품 구매하기', () => {
    const result = true;
    expect(result).toBe(true);
  });
});
