// export async function getWordList() {
//   const lemmas = [];
//   const lemRanks = [];
//   const wordForms = [];
//   const response = await fetch('wordForms.csv');
//   const data = await response.text();
//   const table = data.split(/\r?\n/).slice(1);
//   table.forEach((row) => {
//     const columns = row.split(',');
//     const lemRank = columns[0];
//     const lemma = columns[1];
//     const wordForm = columns[5];
//     lemRanks.push(parseFloat(lemRank));
//     lemmas.push(lemma);
//     wordForms.push(wordForm);
//   });
//   const wordList = { lemmas, lemRanks, wordForms };
//   return wordList;
// }

export async function getNewWords() {
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
  const wordList = { lemmas, wordForms };

  return wordList;
}

export async function getCocaWords() {
  const cocaWords = [];
  const response = await fetch('COCA60K.csv');
  const data = await response.text();
  const table = data.split(/\r?\n/).slice(1);
  table.forEach((row) => {
    const columns = row.split(',');
    const cocaWord = columns[0];
    cocaWords.push(cocaWord);
  });

  return cocaWords;
}
