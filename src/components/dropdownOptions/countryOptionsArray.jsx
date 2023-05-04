const countryOptionsArray = [
  'Canada',
  'USA',
  'Japan',
  'Australia',
  'Taiwan',
  'Singapore',
  'Croatia',
  'UK',
  'Ireland',
  'Switzerland',
  'Austria',
  'Iceland',
  'India',
  'Hungray',
  'South Africa',
  'Morocco',
  'Kenya',
  'Israel',
  'Brazil',
  'Germany',
  'Italy',
  'Mexico',
  'The best country in the world',
];

countryOptionsArray.sort((a, b) => a.localeCompare(b));

export default countryOptionsArray;
