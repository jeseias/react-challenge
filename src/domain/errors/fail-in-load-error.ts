export class FailInLoadError extends Error {
  constructor(loadItem: string) {
    super(`Could not get user ${loadItem}.`)
    this.name = 'CanNotLoadUserJournalsError'
  }
}