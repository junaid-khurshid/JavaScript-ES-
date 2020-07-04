const student = {
    name: 'Richard Kalehoff',
    guardian: 'Mr. Kalehoff'
  };
  
  const teacher = {
    name: 'Mrs. Wilson',
    room: 'N231'
  }

  let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';

//Template literals are essentially string literals that include embedded expressions

// Denoted with backticks (` `) instead of single quotes ( '' ) or double quotes ( "" ),
//  template literals can contain placeholders which are represented using ${expression}.
//  This makes it much easier to build strings.

let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;