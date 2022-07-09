const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://hiteshbhtia.github.io/cleanfolio',
  title: 'HB',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'hitesh bhatia',
  role: 'Software Engineer',
  description:
    'I am Full stack developer i am studying in L.J. College Of Engineering And Technology.I have complete knowledge of NodeJS,ExpressJS,Data Structures,Java,Databases,Mongodb,SQL,Javascript,ReactJS.',
  resume:
    'https://drive.google.com/file/d/1DCSiVLXXToK39i8xwXHUUnf3WeieSp1q/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/hitesh-bhatia-939931182/',
    github: 'https://github.com/hiteshbhtia',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Expense Tracker App',
    description:
      'Expense tracker app that tracks each expense of the individual,History funcationality is also present where user can see the history transcations and can remove it',
    stack: ['React'],
    sourceCode: 'https://github.com/hiteshbhtia/expenseapp/tree/master',
    livePreview: 'https://hiteshbhtia.github.io/expenseapp/',
  },
  {
    name: 'FoodrecipeApp',
    description:
      'Food recipe app where u can see the all types of recipes there are more than 100 plus dishes in each type of recipe',
    stack: ['react', 'rapidapi'],
    sourceCode: 'https://github.com/hiteshbhtia/foodrecipe/tree/master',
    livePreview: 'https://github.com/hiteshbhtia/foodrecipe/tree/master',
  },
  {
    name: 'Book Application',
    description:
      'Book Management System where user can add book to cart remove from cart update the cart page and admin can add new book to db and remove the book from db can see all the users present in the db.',
    stack: ['NodeJS', 'Express', 'Mongodb', 'React'],
    sourceCode: 'https://github.com/hiteshbhtia/book-application',
    livePreview: 'https://github.com/hiteshbhtia/book-application',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Java',
  'Bootstrap',
  'Git',
  'Node',
  'MERN',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hiteshbhatiya787@gmail.com',
}

export { header, about, projects, skills, contact }
