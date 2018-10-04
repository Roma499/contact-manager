import * as contact from './contact/sagas';

const sagas = {
  ...contact
};

export default function registerWithMiddleware(middleware) {
  for (let name in sagas) {
    middleware.run(sagas[name]);
  }
}
