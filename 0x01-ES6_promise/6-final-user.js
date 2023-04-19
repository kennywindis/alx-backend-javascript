import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const k = [];
    for (const item of values) {
      k.push({ status: item.status, value: item.value || item.reason });
    }
    return k;
  });
}
