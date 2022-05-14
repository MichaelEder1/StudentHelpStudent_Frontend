export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {
  }
}

export const OfferFormErrorMessages = [
  new ErrorMessage('title', 'required', 'Ein Angebotstitel muss angegeben werden'),
  new ErrorMessage('studiengang', 'required', 'Es muss ein Studiengang ausgewählt werden'),
  new ErrorMessage('lehrveranstaltung', 'required', 'Es muss eine Lehrveranstaltung ausgewählt werden'),
  new ErrorMessage('information', 'required', 'Es muss eine Information eingegeben werden')
];
