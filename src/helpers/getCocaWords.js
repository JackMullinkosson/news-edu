async function getCocaWords() {
  const results = [];
  const response = await fetch('COCA60K.csv');
  const data = await response.text();
  const table = data.split(/\r?\n/).slice(1);
  table.forEach((row) => {
    const columns = row.split(',');
    const cocaWord = columns[0];
    results.push(cocaWord);
  });
  return results;
}

export default getCocaWords;
