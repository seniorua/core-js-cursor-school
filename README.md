# Core JS for Cursor School students

## Task
The task is to implement functions on different Core JS topics. There are nine modules with different tasks. Each module consists of tasks for specified topic:

1. Strings
2. Numbers
3. Arrays

## Prepare and test
1. Install Node.js
2. Fork this repository: https://github.com/DzmitryDabrahost/core-js-cursor-school
3. Clone your newly created repo: `https://github.com/<%your_github_username%>/core-js-cursor-school/`
4. Go to folder `core-js-cursor-school`
5. To install all dependencies use `npm install`
6. Each task is usually a regular function:
    ```javascript
      /**
       * Returns the result of concatenation of two strings.
      *
      * @param {string} value1
      * @param {string} value2
      * @return {string}
      *
      * @example
      *   'aa', 'bb' => 'aabb'
      *   'aa',''    => 'aa'
      *   '',  'bb'  => 'bb'
      */
      function concatenateStrings(value1, value2) {
        throw new Error('Not implemented');
      }
    ```
    Read the task description in the comment above the function. Try to understand the idea. You can see the tests prepared if you don't understand it.
7. Write your code in `src/*.js`.

    Remove the throwing error line from function body:
    ```javascript
        throw new Error('Not implemented'); 
    ```
    Implement the function by any way and verify your solution by running tests until the failed test become passed (green).
8. Run `npm test` in command line. If everything is OK you can try to resolve the next task.
9. You will see the number of passing and pending tests.

