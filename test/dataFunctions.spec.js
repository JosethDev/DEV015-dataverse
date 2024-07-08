import { filterDataYear, filterDataRating, sortData, calculateAverageRating, calculateAwardsReceived, calculateTotalAudience} from '../src/dataFunctions.js';
import { data } from './data.js';

describe('filterDataYear', () => {
  it('returns all data when filterValue is "all"', () => {
    const result = filterDataYear(data, 'all');
    expect(result).toEqual(data);
  });

  it('filters data between 2005 and 2010', () => {
    const result = filterDataYear(data, '2005-2010');
    const expectedResult = data.filter(item => item.facts.year >= 2005 && item.facts.year <= 2010);
    expect(result).toEqual(expectedResult);

  });

  it('filters data between 2010 and 2015', () => {
    const result = filterDataYear(data, '2010-2015');
    const expectedResult = data.filter(item => item.facts.year >= 2010 && item.facts.year <= 2015);
    expect(result).toEqual(expectedResult);

  });

  it('filters data between 2015 and 2020', () => {
    const result = filterDataYear(data, '2015-2020');
    const expectedResult = data.filter(item => item.facts.year >= 2015 && item.facts.year <= 2020);
    expect(result).toEqual(expectedResult);

  });

  it('filters data between 2020 and 2023', () => {
    const result = filterDataYear(data, '2020-2023');
    const expectedResult = data.filter(item => item.facts.year >= 2020 && item.facts.year <= 2023);
    expect(result).toEqual(expectedResult);

  });

});

describe('filterDataRating', () => {
  const getRating = (item) => {
    const ratingStr = item.facts.rating.split('/')[0];
    return parseFloat(ratingStr);
  };

  it('returns all data when filterValue is "all"', () => {
    const result = filterDataRating(data, 'all');
    expect(result).toEqual(data);
  });

  it('filters data with rating between 1 and 4', () => {
    const result = filterDataRating(data, '1-4');
    const expectedResult = data.filter(item => {
      const rating = getRating(item);
      return rating >= 1 && rating <= 4;
    });
    expect(result).toEqual(expectedResult);
  });

  it('filters data with rating between 4 and 7', () => {
    const result = filterDataRating(data, '4-7');
    const expectedResult = data.filter(item => {
      const rating = getRating(item);
      return rating > 4 && rating <= 7;
    });
    expect(result).toEqual(expectedResult);
  });

  it('filters data with rating between 7 and 10', () => {
    const result = filterDataRating(data, '7-10');
    const expectedResult = data.filter(item => {
      const rating = getRating(item);
      return rating > 7 && rating <= 10;
    });
    expect(result).toEqual(expectedResult);
  });
});


describe('sortData', () => {
  it('sorts data in ascending order', () => {
    const result = sortData(data, 'asc');
    const expectedResult = [...data].sort((a, b) => a.facts.year - b.facts.year);
    expect(result).toEqual(expectedResult);
  });

  it('sorts data in descending order', () => {
    const result = sortData(data, 'desc');
    const expectedResult = [...data].sort((a, b) => b.facts.year - a.facts.year);
    expect(result).toEqual(expectedResult);
  });

  it('returns original data when sortValue is not "asc" or "desc"', () => {
    const result = sortData(data, 'invalid');
    expect(result).toEqual(data);
  });

});
describe('calculateAverageRating', () => {
  it('calculates the average rating correctly', () => {
    const result = calculateAverageRating(data);
    const expectedResult = "7.4";
    expect(result).toEqual(expectedResult);
  });

  it('returns NaN for empty data', () => {
    const result = calculateAverageRating([]);
    const expectedResult = "NaN";
    expect(result).toEqual(expectedResult);
  });
});

describe('calculateAwardsReceived', () => {
  it('calculates the total awards received correctly', () => {
    const result = calculateAwardsReceived(data);
    const expectedResult = 470; 
    expect(result).toEqual(expectedResult);
  });

  it('returns 0 for empty data', () => {
    const result = calculateAwardsReceived([]);
    const expectedResult = 0;
    expect(result).toEqual(expectedResult);
  });
});

describe('calculateTotalAudience', () => {
  it('calculates the total audience correctly', () => {
    const result = calculateTotalAudience(data);
    const expectedResult = "2551 M";
    expect(result).toEqual(expectedResult);
  });

  it('returns "0 M" for empty data', () => {
    const result = calculateTotalAudience([]);
    const expectedResult = "0 M";
    expect(result).toEqual(expectedResult);
  });
});

