function greedySelectMaxNonOverlapping(tasks) {
  const sorted = [...tasks].sort((a, b) => a.end - b.end);
  const selected = [];

  let lastEnd = -Infinity;

  for (const task of sorted) {
    if (task.start >= lastEnd) {
      selected.push(task);
      lastEnd = task.end;
    }
  }
  return selected;
}
