import contactSaga from './contact/sagas';
import dealSaga from './freeTime/sagas';

const sagas = {
  contactSaga,
  dealSaga
};

export default function registerWithMiddleware(middleware) {
  for (let name in sagas) {
    middleware.run(sagas[name]);
  }
}
