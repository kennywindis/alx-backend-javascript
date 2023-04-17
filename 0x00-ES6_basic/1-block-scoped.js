export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    console.log(task)
    console.log(task2)
  }

  return [task, task2];
}
