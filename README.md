Next
TypeScript
SASS

const date = new Date()
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = new Intl.DateTimeFormat('pt', options);
console.log(formattedDate.format(date));