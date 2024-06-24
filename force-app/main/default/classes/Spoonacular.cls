public class Spoonacular {
    private static final String SPOONACULAR = 'https://api.spoonacular.com';
    private static final String API_KEY = '6bc3fef50d6b40f685a5944da5900e20';
    
    public static void getRandomReceipe(){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(SPOONACULAR + '/recipes/random?apiKey=' +API_KEY);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        System.debug('response code : ' + response.getStatusCode());
        if(response.getStatusCode() == 200) {
            
            System.debug('response body' + response.getBody());
        }
       
    }
    
     public static void getReceipe(String receipeId){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(SPOONACULAR+'/recipes/'+receipeId+'/information?apiKey='+API_KEY);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        System.debug('response code : ' + response.getStatusCode());
         if(response.getStatusCode() == 200) {
            // Deserialize the JSON string into collections of primitive data types.
            System.debug('response body' + response.getBody());
         }       
    }
    
     public static void getReceipeByIngredient(String ingredients){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(SPOONACULAR + '/recipes/findByIngredients?apiKey=' +API_KEY+'&ingredients='+ingredients);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        System.debug('response code : ' + response.getStatusCode());
        if(response.getStatusCode() == 200) {
            // Deserialize the JSON string into collections of primitive data types.
            System.debug('response body' + response.getBody());
        }
    }

}
//System.debug(SPOONACULAR);