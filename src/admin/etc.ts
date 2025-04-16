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
}

export enum SPEECHPARTNAME {
  'NOT_ASSIGNED',
  'NOUN',
  'VERB',
  'ADJECTIVE',
  'ADVERB',
  'PRONOUN',
  'ARTICLE',
}

export const NAMESPEECHPART = [
  'NOT_ASSIGNED',
  'NOUN',
  'VERB',
  'ADJECTIVE',
  'ADVERB',
  'PRONOUN',
  'ARTICLE',
];
