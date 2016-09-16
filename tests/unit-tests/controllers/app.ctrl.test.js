describe('App Controller Test', function() {
  var appCtrl;
  beforeEach(inject(function($rootScope, $controller, $q) {
    scope = $rootScope.$new();
    appCtrl = $controller('appCtrl', {
      $scope: scope,
      accountService: accountServiceMock,
      fireService: fireServiceMock
    });
  }));
  describe("Sign In", function() {
    it("should sign in fb", function() {
      scope.signIn("facebook");
      scope.$digest();
      expect(fireServiceMock.fbSign).toHaveBeenCalled();
      expect(scope.userData.uid).toBeDefined()
    });
    it("should sign in anon", function() {
      scope.signIn("anon");
      scope.$digest();
      expect(fireServiceMock.anonSign).toHaveBeenCalled();
      expect(scope.userData.uid).toBeDefined();
    });
  });
  describe("Sign In Credential", function() {
    it("should sign in with a Credential", function() {
      expect(accountServiceMock.credentialSign).toHaveBeenCalled();
    })
  })
  describe("Initialization", function() {
    it("should create an empty room", function(){
      expect(scope.room).toBeDefined();
    });
  });
});
