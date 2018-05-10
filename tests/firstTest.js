const Nightmare = require('nightmare')
const chai = require('chai')
const expect = chai.expect

describe("This is first test for conduit using nightmare", function(){
	this.timeout('15s')
	var nightmare
	beforeEach(function(done){
		nightmare = Nightmare(
			{ 
				show: true,
				width: 1280,
				height: 1024
			}
			)
		done()
	});
	it("verify conduit icon",function(done){
		
		nightmare
      .goto('http://localhost:4100/login')
      .evaluate(() => document.querySelector('a.navbar-brand').text)
      .end()
      .then(conduitIcon => {
        expect(conduitIcon).to.equal('conduit')
        done()
      })
      .catch(done)
	});

	it("verify input email",function(done){
		nightmare
		.goto('http://localhost:4100/login')
		.evaluate(() => document.querySelector("input[type=email]").placeholder)
		.end()
      	.then(plcholder =>{
      		expect(plcholder).to.equal("Email")
      		done()
      	})
      	.catch(done)
	});

	it("verify both conduit icon and email textbox", function(done){
		nightmare
		.goto('http://localhost:4100/login')
		.evaluate(function(){
			return document.querySelector("a.navbar-brand").text;
		})
		.then(function(conduitIcon){
			expect(conduitIcon).to.equal("conduit")

			nightmare.goto("https://www.google.com/")
			.evaluate(function(){
				return document.querySelector("a.navbar-brand").text;
			})
			.end()
			.then(function(texttt){
				expect(texttt).to.eq("something")
				done()
			})
			.catch(done)

		})
		.catch(function(err){
			done(new Error(err))
		})
	});
});