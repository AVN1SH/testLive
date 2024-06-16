import { api } from "./conf";

export class DjangoService {
  async getResponse() {
    try {
      const response = await api.post("/users/post/", {
        firstName : "hello",
        middleName : "kdjljl",
        lastName : "jkjd",
        role : "faculty",
        email : "assk@as.com",
        mobNum : "1234567890",
        password : "12345678"
    }
      );
      
      if(!response) throw new Error("Error while fetching data");
      console.log(response.data)
      return response;
    } catch (error : any) {
      console.log(error);
      throw new Error(error.response.status);
    }
  }
}

const djangoService = new DjangoService;

export default  djangoService;