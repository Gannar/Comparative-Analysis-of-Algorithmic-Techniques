function bruteForceSelectMaxNonOverlapping(tasks) {
  const sorted = [...tasks].sort((a, b) => a.start - b.start);
  let best = [];

  function backtrack(index, current, lastEnd) {
    if (index === sorted.length) {
      if (current.length > best.length) {
        best = current.slice();
      }
      return;
    }

    // Skip current task
    backtrack(index + 1, current, lastEnd);

    // Take current task if non-overlapping
    if (sorted[index].start >= lastEnd) {
      current.push(sorted[index]);
      backtrack(index + 1, current, sorted[index].end);
      current.pop();
    }
  }

  backtrack(0, [], -Infinity);
  return best;
}
