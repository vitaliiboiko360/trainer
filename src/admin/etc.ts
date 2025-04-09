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
}

export enum SPEECHPARTNAME {
  'NOT_ASSIGNED',
  'NOUN',
  'VERB',
  'ADJECTIVE',
  'ADVERB',
  'PRONOUN',
}
