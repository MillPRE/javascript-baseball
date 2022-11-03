const MissionUtils = require('@woowacourse/mission-utils');

/**
 * @param computer : computer가제시한숫자
 * @param user : user가입력한숫자
 *
 * @return result : Array
 * result[0] : ball number
 * result[1] : strike number
 */
function match(computer, user) {
  const userArr = user.toString().split('');
  // result[0] : ball
  // result[1] : strike
  const result = [0, 0];

  computer.toString().split('').forEach((c, index) => {
    let ball = 0;
    let strike = 0;
    if (userArr.includes(c)) {
      ball += 1;
    }

    if (c === userArr[index]) {
      strike += 1;
      ball -= 1;
    }
    result[0] += ball;
    result[1] += strike;
  });

  return result;
}

/**
 * computer또는 user가 입력한 숫자 값의 validation check
 * @param number : validationCheckNumber
 *
 * @return
 * valid return true ( length === 3 && 1~9 )
 * invalid return false
 */
function validationCheck(number) {
  let result = true;

  const numberString = number.toString();
  // 3자리가 아니면 return false
  if (numberString.length !== 3) {
    return false;
  }

  // 1 ~ 9 가 아니면 return false
  numberString.split('').forEach((n) => {
    if (!(n.charCodeAt(0) >= 49 && n.charCodeAt(0) <= 57)) {
      result = false;
    }
  });

  return result;
}

class App {
  play() {
    // start
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let flag = 1;
    const input = null;

    while (flag === 1) {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input);
      console.log('input : ', input);
      flag = 2;
    }
  }
}

module.exports = { App, validationCheck, match };
