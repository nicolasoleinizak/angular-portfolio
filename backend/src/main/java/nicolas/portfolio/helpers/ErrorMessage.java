package nicolas.portfolio.helpers;

import java.util.HashMap;

public class ErrorMessage {

    public static String get(String code){
        HashMap<String, String> errorMessages= new HashMap<String, String>();
        errorMessages.put("REQ001", "Bad request");
        errorMessages.put("REQ002", "Not found");
        errorMessages.put("SRV001", "Internal server error");
        return errorMessages.get(code);
    }

}
