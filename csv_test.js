var expect = chai.expect;

describe("CSV", function () {
  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe("funcion calculate", function() {
    it("deberia aceptar una cadena", function() {
      var cadena = '"hola"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal('hola');
    });
  });
});
