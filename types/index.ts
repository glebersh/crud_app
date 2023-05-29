export type FormValueType = { [key: string]: string };

type BaseDataType = {
  email: string,
  salary: string,
  birth_date: string,
  avatar_img_URL: string,
  status: string,
  gender: string,
  department: string,
  phone: string,
  desiredPosition: string,
  about: string
};

export type FormDataType = BaseDataType & { first_name: string, last_name: string };
export type POSTReqFormDataType = BaseDataType & { name: string };

export type MongoDBUserModel = {
  _id: string,
  name: string,
  email: string,
  salary: string,
  birth_date: string,
  avatar_img_URL: string,
  status: string,
  gender: string,
  department: string,
  phone: string,
  desiredPosition: string,
  about: string
};

export type OperationResultType = {
  operationStatus: string,
  alertVisible: boolean,
  alertMessage: string,
};

export type SelectOptionType = { title: string, value: string | number };

