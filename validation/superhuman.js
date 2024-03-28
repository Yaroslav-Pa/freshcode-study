const yup = require('yup');

module.exports.CREATION_SCHEMA = yup.object({
  nickname: yup.string().min(3).max(100).required('nickname required'),
  realName: yup.string().min(3).max(100).required('real name required'),
  originStory: yup.string(),
  catchPhrase: yup.string().min(3).required('catch phrase required'),
  // file: yup.file(), ???
  powerName:yup.string().min(3).max(100),
  powerDescription: yup.string(),
});
module.exports.EDIT_SCHEMA = yup.object({
  nickname: yup.string().min(3).max(100),
  realName: yup.string().min(3).max(100),
  originStory: yup.string(),
  catchPhrase: yup.string(),
});
