/// <reference types="Cypress" />

import LoginPage from "../PageObjects/LoginPage";
import HomePage from "../PageObjects/HomePage";


describe("Scenario Suite", function(){

    let fixture_data;
    const loginpg=new LoginPage();
    const homepg=new HomePage();

    beforeEach(()=>{

        cy.fixture("LoginCredentials").then(function(data){
            fixture_data=data;
        })

        cy.visit(Cypress.env("url"));
    });

    it("Scenario1 Entering correct username and incorrect password and then asserting the error msg", function(){
        loginpg.Enter_Values(fixture_data.valid_username, fixture_data.invalid_pwd);
        loginpg.Compare_Msg("Username and password");
    });

    it("Scenario2 Entering correct username and password and then asserting home page", function(){
        loginpg.Enter_Values(fixture_data.valid_username, fixture_data.valid_pwd);
        homepg.Compare_Msg("Swag");
    });

})