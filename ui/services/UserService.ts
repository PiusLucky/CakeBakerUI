import http from "../http-common";
import { IRegister, ILogin, ILoggedInData, IOrder} from "../types";

// const getAll = () => {
//   return http.get<Array<IRegisterData>>("/tutorials");
// };

const authenticate = (data: ILogin) => {
  return http.post<ILogin>("/api/v1/auth/login", data);
};

const create = (data: IRegister) => {
  return http.post<IRegister>("/api/v1/auth/register", data);
};

const getLoggedIn = () => {
  return http.get<ILoggedInData>("/api/v1/auth/loggedIn");
};

const unauthenticate = () => {
  return http.get<any>("/api/v1/auth/logout");
};

const initiateCallback = (ref: string) => {
  return http.get<any>(`/paystack/callback?reference=${ref}`);
};

const orders = () => {
  return http.get<IOrder>(`/paystack/orders`);
};

// const compilePaystack = (url: string) => {
//   return http.get<any>("https://checkout.paystack.com/6i8u1dk8jjew4zd");
// };



// const update = (id: any, data: IRegisterData) => {
//   return http.put<any>(`/tutorials/${id}`, data);
// };

// const remove = (id: any) => {
//   return http.delete<any>(`/tutorials/${id}`);
// };

// const removeAll = () => {
//   return http.delete<any>(`/tutorials`);
// };

// const findByTitle = (title: string) => {
//   return http.get<Array<IRegisterData>>(`/tutorials?title=${title}`);
// };

const UserService = {
  // getAll,
  authenticate,
  create,
  getLoggedIn,
  unauthenticate,
  initiateCallback,
  orders
  // compilePaystack
  // update,
  // remove,
  // removeAll,
  // findByTitle,
};

export default UserService;
