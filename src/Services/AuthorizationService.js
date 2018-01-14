import HttpService from './HttpService';

class AuthorizationService extends HttpService {

  constructor() {
    super('/auth/login');
  }

  authorize (data) {
    return this.post('', data).then((response) => {
      localStorage.setItem('accessToken',response.accessToken);
      localStorage.setItem('refreshToken',response.refreshToken);
    });
  }
}

let authorizationService = new AuthorizationService();
export default authorizationService;
