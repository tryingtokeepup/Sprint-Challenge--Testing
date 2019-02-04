# Sprint Challenge: Testing - TDD Video Games

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored Testing. During this Sprint, you studied Introduction to Automated Testing, Testing React Applications & Testing Web APIs. In your challenge this week, you will demonstrate proficiency by creating an application that follows the TDD pattern to create a simple Web API using Node.js and Express.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Testing and your command of the concepts and techniques in the Introduction to Automated Testing, Testing React Applications & Testing Web APIs modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge use `Test Driven Development` to build a RESTful API using Node.js and Express to create and list _games_. **Data can be stored in memory using a simple JS array**. No need to keep track of incrementing `id`s for this project's MVP, that is part of the Stretch Problem.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?

Describe is kind of how we break down your tests into components; for us who were reborn into the church of React and component-based engineering, it is a godsend, as we can basically use it to break down our tests into what particular component we are testing and why. The `it()` global is for those individual tests that we make to test the different little parts in our component, like buttons and labels and whatnot.

1. What is the point of `Test Driven Development`? What do you think about this approach?

This was probably the most controversial and important thing I learned in the whole backend section: TDD is hell, an evil, an absolute time-sink THAT IS UNAVOIDABLE AND NECESSARY AND THE ONLY WAY TO ACTUALLY BECOME A COMPETENT DEVELOPER. I think, personally, that when I can truely grasp all the fundamentals of testing AND am able to implement them in my projects consistently, I will graduate from junior to senior dev, and open my path up to being a project manager and (maybe!) even a tech lead. So much of TDD is learning to strategize and actually think through what you want your code to do, and then think about how the user will actually use your code, and how other developers will grapple with your code and how they will try to add to it. Put simply, testing is how you force us borderline autistic keyboard monkeys to think beyond one's self and try to figure out what you are actually doing. So many of us programmers are brilliant on our lonesome, but never can quite make the jump to working with others, and it's because they treat programming as their own fiefdom, their own domain. This mentality is so hard to break (I am still struggling with it), but testing kind of forces you to see your code in a different light, and when it works, it helps you feel so much more confident that you are putting out clean code.

1. Mention three types of automated tests.

There are unit tests, which are (in therory lol) easy to write, fast, and used to test components individually. I almost think of it like a spell-checker; it's what you are writing when you are checking if your div indeed is turning blue when you click the "turn div to blue" button. It's also really the only way to learn testing without shooting your head off. I am kind of sure that component testing is very similar to this, but on a slightly larger scale. (used for React, Vue, and other front-end frameworks)

Then there is integration testing, which is A LOT more complicated, and what people usually think when they think of testing and the hell that they can bring. It's when you test how different units and components WORK WITH EACH OTHER. Conflicts arise a lot more than you would imagine; two units could be working perfectly well, but they have side-effects that absolutely make the user experience almost unbearable. Tons of bugs in the wild are actually not really bugs but unexpected conflicts of components doing what they were supposed to do but in the end reacting to each other in a way that becomes absolutely unsafe over time.

The final type of test we got exposed to what snapshot testing, which is more of a sub-type of component testing. It is probably the most simple of the tests we learned: all it does is take a "snapshot" of the current state of a component, and if that component in ANY way changes in the future, the test will fail. Useful if you want to create little "checkpoints" (like in gaming) that you can reference in the future to see if your code inadventently changed over some span of time.

## Project Set Up

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you downloaded the repository.
- [ ] run `yarn` or `npm i` to download all dependencies.
- [ ] type `yarn test` or `npm test` to run the tests. The `test` script is already configured.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] use `jest` and `supertest` to write the tests.
- [ ] Write the **tests BEFORE** writing the route handlers.
- [ ] Your API must be have `POST` and `GET` endpoints for `/games`.
- [ ] Write a **minimum** of three tests per endpoint.

Below is a product specification covering the requirements for your endpoints.

### POST /games

- [ ] The `POST /games` endpoint should take in an object that looks like this

  ```js
  {
    title: 'Pacman', // required
    genre: 'Arcade', // required
    releaseYear: 1980 // not required
  }
  ```

- [ ] In the route handler, validate that the required fields are included inside the body. If the information is incomplete, return a `422` status code.
- [ ] Write tests to verify that the endpoint returns the correct HTTP status code when receiving correct and incorrect game data.

### GET /games

- [ ] The `GET /games` endpoint should return the list of games and HTTP status code 200.
- [ ] Write a test to make sure this endpoint always returns an array, even if there are no games stored. If there are no games to return, the endpoint should return an empty array.

## Stretch Problems

The following exercises are optional, but we suggest that you tackle them if you finish the MVP early.

- validate that the game `title` is unique. If the client tries to create a duplicate game, return a status code 405 (Not Allowed). Write a test that checks for this.
- add an `id` property to the game schema and write code in the server to increment it automatically. After implementing this functionality work on the following:
  - Write a `GET /games/:id` endpoint that returns the information about a single game. Respond with a 404 status code when a game is not found for the provided `id`. Add the corresponding tests for it.
  - add a `DELETE /games/:id` endpoint that can remove the corresponding game. If the game does not exists return a 404 status code. Write tests for this endpoint.

**Remember you can use any resources you want to solve these problems, but avoid copying/pasting solutions you've previously written. Also if you don't finish all of the challenges, that's fine! Just do what you can and submit your challenges in the end! HAVE FUN!**
