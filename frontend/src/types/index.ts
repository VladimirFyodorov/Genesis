export enum FormStates {
  INVALID = 'INVALID',
  VALID = 'VALID',
  PENDING = 'PENDING',
}

export type EntityNamesRu = 'Сделка' | 'Контакт' | 'Компания';
export type EntityNamesEn = 'lead' | 'contact' | 'company';

export type OptionsRu = 'Не выбрано' | EntityNamesRu;
export type OptionsEn = 'default' | EntityNamesEn;
export const optionsMap: Map<OptionsEn, OptionsRu> = new Map([
  ['default', 'Не выбрано'],
  ['lead', 'Сделка'],
  ['contact', 'Контакт'],
  ['company', 'Компания'],
]);



export type Entity = {
  id: number,
  name: EntityNamesRu,
}

export interface State {
  formState: FormStates,
  selectedOption: OptionsEn,
  entities: Entity[],
}
