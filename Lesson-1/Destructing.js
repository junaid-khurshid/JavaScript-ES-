const point = [10, 25, -34];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z);

const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
  };
  
  const type = gemstone.type;
  const color = gemstone.color;
  const carat = gemstone.carat;
  
  console.log(type, color, carat);

// Destructuring borrows inspiration from languages like Perl and Python by allowing
//  you to specify the elements you want to extract from an array or object on the left side of an assignment.
//   It sounds a little weird, but you can actually achieve the same result as before,
//  but with much less code; and it's still easy to understand.

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one, , , two, , , , three] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);