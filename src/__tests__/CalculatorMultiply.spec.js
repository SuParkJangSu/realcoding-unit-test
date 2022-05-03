import Calculator from "../js/calculator/Calculator";

const cal = new Calculator();
describe("사칙연산 곱셈 테스트.", () => {
  let a = 4;
  let b = 2;

  test("3과 6을 곱하면 18이다.", () => {
    expect(cal.multiply(a, b)).toEqual(a * b);
  });
});
