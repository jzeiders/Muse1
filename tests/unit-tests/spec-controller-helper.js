beforeEach(module('muse'));

beforeEach(module(function($provide, $urlRouterProvider) {
  $provide.value('$ionicTemplateCache', function() {});
  $urlRouterProvider.deferIntercept();
}));
var $httpBackend;

beforeEach(inject(function($injector) {
  $httpBackend = $injector.get('$httpBackend');
  $httpBackend.whenGET('templates/trip_form.html').respond(200, '');
  $httpBackend.whenGET('templates/incident_form.html').respond(200, '');

}));
var accountServiceMock,
fireServiceMock,
homeServiceMock,
locationServiceMock,
playingServiceMock,
roomServiceMock,
soundcloudServiceMock,
storageServiceMock,
scope= {};
beforeEach(inject(function($window,$q, accountService, fireService,homeService,locationService,playingService,roomService,soundcloudService,storageService){
  accountServiceMock = accountService;
  fireServiceMock = fireService;
  homeServiceMock = homeService;
  locationServiceMock = locationService;
  playingServiceMock = playingService;
  roomServiceMock = roomService;
  soundcloudServiceMock = soundcloudService;
  storageServiceMock = storageService;
  window = $window;
  window.cordova = jasmine.createSpyObj("cordova", ["plugins"]);

  spyOn(accountServiceMock,"credentialSign").and.returnValue("")

  spyOn(fireServiceMock, "fbSign").and.returnValue($q.when({uid: "bleh"}));
  spyOn(fireServiceMock, "anonSign").and.returnValue($q.when({uid: "bleh"}));

}));
