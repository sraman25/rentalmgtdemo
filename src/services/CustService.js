import axios from "axios";

class CustService {

    getCust(){
      return  axios.get(' http://localhost:8080/api');
    }

}
export default new CustService()