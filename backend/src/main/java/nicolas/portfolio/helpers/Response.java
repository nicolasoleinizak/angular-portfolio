package nicolas.portfolio.helpers;

import java.util.HashMap;

public class Response {

    public static HashMap<String, Object> getResponse(Boolean success, String statusCode, Object data){
        HashMap<String, Object> response = new HashMap<String, Object>();
        response.put("success", success);
        response.put("data", data);
        if(success == false){
            response.put("error", Error.get(statusCode));
        }
        return response;
    }

}
