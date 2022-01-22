export interface IRegister {
  username: string,
  phoneNumber: string,
  email: string,
  password: string,
  repeatPassword: string
}

export interface ILogin {
  username_email: string,
  password: string
}

export interface ILoggedInData {
  status: number,
  info: object
}



export interface IOrder {
    name: string,
    color: string,
    amount: number,
    size: string,
    note: string,
    delivery_date: Date,
    reference?: any | null,
    paid?: any | null,
    email?: any | null,
    user?: any | null,
    createdAt?: Date | null,
    updatedAt?: Date | null,
    _id?: any | null,
    __v?: any | null,

}