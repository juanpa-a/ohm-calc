import { BusinessLogic } from "../utils/computeAnswer";

test("Calculation is correct: 1,2,1,1 -> 21", () => {
  const eleven = BusinessLogic.calculateOhmValues(
    "balck,1",
    "balck,1",
    "balck,1",
    "balck,1"
  );
  expect(eleven).toBe(11);
});

test("Calculation is correct: 1,1,1,1 -> 11", () => {
  const twenty_one = BusinessLogic.calculateOhmValues(
    "brown,2",
    "balck,1",
    "balck,1",
    "balck,1"
  );
  expect(twenty_one).toBe(21);
});
