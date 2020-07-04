let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat
};

console.log(gemstone);

//After ShortHand

const gemstone = {type,color,carat};
console.log(gemstone);
