export class EntityDTO {
  id?: number;
  name: string;
}

export class AmocrmLeadsDTO {
  _embedded: {
    leads: [
      {
        id: number,
      }
    ]
  }
}

export class AmocrmContactsDTO {
  _embedded: {
    contacts: [
      {
        id: number,
      }
    ]
  }
}

export class AmocrmCompaniesDTO  {
  _embedded: {
    companies: [
      {
        id: number,
      }
    ]
  }
}

export type Paths = 'leads' | 'contacts' | 'companies';
export type AmocrmDTO = AmocrmLeadsDTO | AmocrmContactsDTO | AmocrmCompaniesDTO;
