import {getDatabase, ref, set, update} from 'firebase/database';

function generateUUID() {
  let d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); //use high-precision timer if available
  }
  let newGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return newGuid;
}

export default {
  createMovie(context, data) {
    data.id = generateUUID();
    const db = getDatabase();
    set(ref(db, 'library/' + data.id), data);
  },
  updateMovie(context, data) {
    const updates = {};
    updates['/library/' + data.id] = data;
    const db = getDatabase();
    return update(ref(db), updates);
  },
  deleteMovie(context, id) {
    const updates = {};
    updates['/library/' + id] = null;
    const db = getDatabase();
    return update(ref(db), updates);
  },
}