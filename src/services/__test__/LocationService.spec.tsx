import {LocationService} from '../LocationService';

describe('LocationService', () => {
  it('Should return latitude & longitude from current location', aync () => {
    const position = await LocationService.getCurrentPosition();
    expect(position).toEqual({
      latitude: 0,
      longitude: 0,
    })
  })
});
