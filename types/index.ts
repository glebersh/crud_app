export type FormValueType = { [key: string]: string };

export type FormDataType = {
  first_name: string,
  last_name: string,
  email: string,
  salary: string,
  birth_date: string,
  avatar_img_URL: string,
  status: string,
  sex: string,
};

export type UserDataType = {
  name: string,
  email: string,
  salary: string,
  birth_date: string,
  avatar_img_URL: string,
  status: string,
  sex: string,
};

export type MongoDBUserModel = {
  _id: string,
  name: string,
  email: string,
  salary: string,
  birth_date: string,
  avatar_img_URL: string,
  status: string,
  sex: string,
};

export type OperationResultType = {
  operationStatus: string,
  alertVisible: boolean,
  alertMessage: string,
};

export type FormValidationResult = {
  first_name: boolean,
  last_name: boolean,
  email: boolean,
  salary: boolean,
  birth_date: boolean,
  status: boolean,
  sex: boolean,
};

export type SelectOptionType = { title: string, value: string | number };