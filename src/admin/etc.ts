export type Translation = {
  indexInSentence: number;
  wordInEnglish: string;
  partOfSpeech: number;
};

export enum SPEECHPART {
  NOT_ASSIGNED,
  NOUN,
  VERB,
  ADJECTIVE,
  ADVERB,
  PRONOUN,
  ARTICLE,
  PHRASE,
}

export enum SPEECHPARTNAME {
  'NOT_ASSIGNED',
  'NOUN',
  'VERB',
  'ADJECTIVE',
  'ADVERB',
  'PRONOUN',
  'ARTICLE',
  'PHRASE',
}

export const NAMESPEECHPART = [
  'NOT_ASSIGNED',
  'NOUN',
  'VERB',
  'ADJECTIVE',
  'ADVERB',
  'PRONOUN',
  'ARTICLE',
  'PHRASE',
];
