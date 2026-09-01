export class LocationPermissionError extends Error {
  constructor() {
    super('Foreground location permission was not granted');
    this.name = 'LocationPermissionError';
  }
}
