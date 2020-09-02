const dbuser = 'lisa-sundberg';
const dbpassword = 'KYLV5JuIftOnPg0y';

module.exports = {
  mongoURI: `mongodb+srv://${dbuser}:${dbpassword}@cluster0.r7u8t.mongodb.net/test?retryWrites=true&w=majority`,
  secretOrKey: "secret"
};
