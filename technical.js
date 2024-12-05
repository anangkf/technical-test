/**
 * Task #2
 *
 * Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
 *
 * Division by zero should return “NaN”.
 *
 * @param {number} m first number
 * @param {number} n last number
 *
 * @return {number | NaN}
 */
function modLargerBySmaller(m, n) {
  return Math.max(m, n) % Math.min(m, n);
}

/**
 * Task #3
 *
 * Create a function that will return a string that combines all of the letters of the three inputed
strings in groups. Taking the first letter of all of the inputs and grouping them next to each
other. Do this for every letter, see example below!
 * 
 * @param {Array<String>} ...params 
 *
 * @return {String}
 */
function stringCombiner(...params) {
  let arrangedStringArr = [];

  for (let i = 0; i < params.length; i++) {
    params[i].split('').map((l, idx) => {
      !arrangedStringArr[idx]
        ? (arrangedStringArr[idx] = l)
        : (arrangedStringArr[idx] += l);
    });
  }

  return arrangedStringArr.join('');
}

/**
 * 
 * In nearly every company each employee has a certain acronym containing the first
characters of his first and last name(s).
Your task is to write an acronym generator which generates an acronym for a given name.
You don't have to care about duplicate acronyms (someone else will do this for you). Note
that names can be given in upper or in lower case. The acronym shall always be upper case.
Normally the acronym is always the first letter of your first and the first letter of the last name
in upper case.
 * ```
 * For example:
 * Thomas Meyer => TM
 * martin schmidt => MS
 * ```
 * In your company there work only people with a maximum of two first names. If a person has
two first names, they might be joined with a dash.
 * ```
 * Jan-Erich Schmidt => JES Jan Erich Mueller => JEM
 * ```
 * Last names may also be joined with a dash. No one can have more than two last names.
 * ```
 * Paul Meyer-Schmidt
 * ```
 * In Germany, there are last names which have the leading word "von". This shall be
abbreviated with a lower case "v":
 * ```
 * Paul von Lahnstein => PvL
 * Martin von Lahnstein-Meyer => MvLM
 * ```
 * @param {String} name 
 */
function getAcronym(name) {
  // remove '-' and ' ', then store them in an array
  let acronym = name.split('-').join(' ').split(' ');
  // get acronym based on rules
  acronym = acronym
    .map((name) => (name === 'von' ? 'v' : name.at(0).toUpperCase()))
    .join('');

  return acronym;
}

// run each function

console.log('----------------Task #1----------------');
console.log('');

console.log('----------------Task #2----------------');
console.log(modLargerBySmaller(14, 3));
console.log(modLargerBySmaller(5, 0));
console.log(modLargerBySmaller(-4, 0));
console.log('');

console.log('----------------Task #3----------------');
console.log(stringCombiner('aa', 'bb', 'cc'));
console.log(stringCombiner('wer', 'gfh', 'uyw'));
console.log('');

console.log('----------------Task #4----------------');
console.log(getAcronym('Thomas Meyer'));
console.log(getAcronym('martin schmidt'));
console.log(getAcronym('Jan-Erich Schmidt'));
console.log(getAcronym('Paul Meyer-Schmidt'));
console.log(getAcronym('Paul von Lahnstein'));
console.log(getAcronym('Martin von Lahnstein-Meyer'));
console.log('');
