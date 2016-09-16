angular.module('muse').service('accountService',['storageService',function(storageService){
  var service = this;
  ACCOUNT_KEY = 'account';
  service.storeCredential = function(credential){
    return storageService.set(ACCOUNT_KEY, credential);
  };
  service.getCredential = function(){
    return storageService.get(ACCOUNT_KEY).then(function(credential){
      return credential;
    });
  };
  service.credentialSign = function(){

  };
}]);
