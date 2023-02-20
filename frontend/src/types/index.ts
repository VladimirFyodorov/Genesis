export enum FormStates {
  INVALID = 'INVALID',
  VALID = 'VALID',
  PENDING = 'PENDING',
}

export type EntetyNames = 'deal' | 'contact' | 'company';
export const EntetyNamesArray: EntetyNames[] = ['deal', 'contact', 'company'];

export type Options = EntetyNames | 'default';
export const OptionsArray: Options[] = [...EntetyNamesArray, 'default'];
export function checkIfOption(value: string | undefined): boolean {
  if (value === undefined) return false;
  if (value === 'deal' || value === 'contact' || value === 'company'|| value === 'default') return true;
  return false;
}

export type Entety = {
  id: number,
  name: EntetyNames,
}

export interface State {
  formState: FormStates,
  selectedOption: Options,
  entities: Entety[],
}
