async function getNewWords() {
  const lemmas = [];
  const wordForms = [];
  const response = await fetch('ANCallcount.csv');
  const data = await response.text();
  const table = data.split(/\r?\n/).slice(1);
  table.forEach((row) => {
    const columns = row.split(',');
    const lemma = columns[1];
    const wordForm = columns[0];
    lemmas.push(lemma);
    wordForms.push(wordForm);
  });
  const results = { lemmas, wordForms };
  return results;
}

export default getNewWords;
