package nicolas.portfolio.helpers;

import java.util.HashMap;

public class Error {
    public static HashMap<String, String> get(String code){
        HashMap<String, String> error = new HashMap<String, String>();
        if(code != null){
            error.put("statusCode", code);
            error.put("message", ErrorMessage.get(code));
            return error;
        } else{
            error.put("statusCode", "unknown");
            error.put("message", "unknown");
            return error;
        }
    }
}
