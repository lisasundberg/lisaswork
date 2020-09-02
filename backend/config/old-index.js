const dbuser = 'lisa-sundberg';
const dbpassword = 'KYLV5JuIftOnPg0y';

// const MONGODB_URI = `mongodb://${dbuser}:${dbpassword}@ds125453.mlab.com:25453/mern-example`;
const MONGODB_URI = `mongodb+srv://${dbuser}:${dbpassword}@cluster0.r7u8t.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = MONGODB_URI;
