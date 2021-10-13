const calculatorModule = () => {
  const soma = (x, y) => x + y;

  const subtracao = (x, y) => x - y;

  const multiplicacao = (x, y) => x * y;

  const divisao = (x, y) => x / y;

  const operations = {
    '+': soma,
    '-': subtracao,
    '*': multiplicacao,
    '/': divisao,
  };

  const isOperator = operator => operations.hasOwnProperty(operator);

  const calculate = ({ x, operator, y }) => {
    if (isOperator(operator)) {
      const operation = operations[operator];
      return operation(x, y);
    }

    return 'Invalid operator';
  };

  let memory = [];

  // buffer: {x, y, operator, result}
  let buffer = {};

  const isEmpty = arr => arr.length == 0;

  const hasProp = prop => buffer.hasOwnProperty(prop);

  const clearBuffer = () => (buffer = {});

  const clearMemory = () => (memory = []);

  const handleResult = result => {
    buffer.result = result;
    memory.push(buffer);
    clearBuffer();
  };

  const enter = input => {
    if (isEmpty(memory) && !hasProp('x')) {
      buffer.x = input;
      return;
    }

    if (isOperator(input)) {
      buffer.operator = input;
      return;
    }

    if (!hasProp('x')) {
      buffer.x = equals();
    }

    if (hasProp('x') && !hasProp('y')) {
      buffer.y = input;
      let result = calculate(buffer);
      handleResult(result);
    }
  };

  const equals = () => {
    let buffer = memory[memory.length - 1];
    console.log(buffer.result);
    return buffer.result;
  };

  const list = () => {
    console.log(memory);
  };

  const reset = () => {
    clearBuffer();
    clearMemory();
  };

  return { enter, equals, list, reset };
};

const { enter, equals, list, reset } = calculatorModule();
