const PromiseEach = require('bluebird')
const csv = require('csvtojson')
const fetchData = require('./fetchData');

const init = async () => {
  try {
    await csv()
      .fromFile(`${__dirname}/Files/Crops.csv`)
      .then(async jsonObj => {
        PromiseEach.each(jsonObj, async value => {
          const { name, gender, species } = value;
          console.log(`origimal, name: ${name}  gender: ${gender} species: ${species}`);
          
          const nameParsed = await parsedStr(name);
          console.log('nameParsed', nameParsed);
        });
      })
  } catch (err) {
    console.error(err)
  }
}
const parsedStr = async (str) => {
  const arrayStr  = str.split(' ');
  const result =  arrayStr.map(async item => {
    if (item.includes('�')) {
      const suggestion = await fetchData.suggestWord(item);
      const firstOpcion = suggestion[0];
      const re = new RegExp(item, 'g');
      return str.replace(re, firstOpcion);
    }
  });
  const resolve = await Promise.all(result);
  return resolve[0];
}

init();

     
    // } else if (gender.includes('�')) {
    //   const genderParsed = await fetchData.suggestWord(gender);
    //   console.log('genderParsed', genderParsed);
    // } else if (species.includes('�')) {
    //   const speciesParsed = await fetchData.suggestWord(species);
    //   console.log('speciesParsed', speciesParsed);