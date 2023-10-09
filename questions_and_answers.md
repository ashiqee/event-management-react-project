<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i> This variable output show empty Object. greetign spelling mistake. let greeting variable declare after greetign varibale value add object empty {}.
console.log greetign and output show {} </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>
Correct Answer I:
function sum(a, b) {
  return parseInt(a) + parseInt(b);
}

const result = sum(1, "2");
console.log(result);

or

Correct Answer II:
function sum(a, b) {
return a + b;
}

const result = sum(1, 2);
console.log(result);

- Ans-I for explanation: user submit any string type number or number then string convert in number value by using parseInt, get correct output is 3.

- Ans-II for explanation: sum function parameter must need number type value.
  otherwise string value in sum output 1+"2" = 12,when give number value 1+2= 3.
  math calculation for must need number type value.
  </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";
food[0] = "🍝";

console.log(food);

Then Output is: ['🍝', '🍫', '🥑', '🍔']

Explanation: Above the Question Code food Output is A.because of favoriteFood value not add in array.

- we can add favoriteFood add or replace by this code.
  - one way for replace food[0]= '🍝';
  - in-Front added for food.unshift("🍝");

</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>
Right Code:
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi("Ashiq"));

Explanation here:
sayHi function parameter is empty for the name is undefined. when i give parameter value in sayHi("Ashiq") then correct output is Hi there, Ashiq </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>count variable value is = 0 , nums array element with loop by forEach , condition is if num is truthy then count +1 and 0 is falsy value for this count value is 3 </i>

</p>
</details>
