export default function guardrail(mathFunction) {
  const queue = [];
  let value;
  try {
    k = mathFunction();
  } catch (error) {
    k = error.toString();
  }
  queue.push(k);
  queue.push('Guardrail was processed');
  return queue;
}
