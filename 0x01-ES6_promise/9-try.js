export default function guardrail(mathFunction) {
  const queue = [];
  const k;
  try {
    k = mathFunction();
  } catch (error) {
    k = error.toString();
  }
  queue.push(k);
  queue.push('Guardrail was processed');
  return queue;
}
