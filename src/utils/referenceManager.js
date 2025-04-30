import bibtexParse from 'bibtex-parse-js';

const references = {};
const referenceOrder = []; // Array to track the order of references as they're used
const referenceNumbers = {}; // Map of citation keys to their reference numbers

export function loadReferences(bibtexContent) {
  const parsedEntries = bibtexParse.toJSON(bibtexContent);
  parsedEntries.forEach(entry => {
    if (entry.citationKey) {
      references[entry.citationKey] = entry;
    }
  });
  console.log('Loaded references:', references);
}

export function getReference(citationKey) {
  // If this is the first time this reference is used, add it to the order
  if (!referenceNumbers[citationKey] && referenceOrder.indexOf(citationKey) === -1) {
    referenceOrder.push(citationKey);
    referenceNumbers[citationKey] = referenceOrder.length; // 1-based indexing
  }
  
  return references[citationKey] || null;
}

export function getReferenceNumber(citationKey) {
  // If the reference has not been used yet, get it to register the number
  if (!referenceNumbers[citationKey]) {
    getReference(citationKey);
  }
  
  return referenceNumbers[citationKey] || '?';
}

export function getAllReferences() {
  // Return references in the order they were used
  return referenceOrder.map(key => ({
    ...references[key],
    number: referenceNumbers[key]
  }));
}