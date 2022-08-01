export interface HttpResSuccess<T> {
    data: T;
    status: "success";
  }
  
export interface HttpResError {
    errorCode: number;
    message: string;
    status: "error";
}