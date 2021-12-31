export class CanNotLoadUserJournalsError extends Error {
  constructor() {
    super('Could not get user journals.')
    this.name = 'CanNotLoadUserJournalsError'
  }
}