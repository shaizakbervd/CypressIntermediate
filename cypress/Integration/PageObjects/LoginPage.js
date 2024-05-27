class LoginPage
{
    UserName="input[id='user-name']";
    Password="input[id='password']";
    Submit_Btn="input[type='submit']";
    Error_msg="[data-test='error']";

    Get_UserName()
    {
        return cy.get(this.UserName);
    }

    Get_Password()
    {
        return cy.get(this.Password);
    }

    Get_SubmitBtn()
    {
        return cy.get(this.Submit_Btn);
    }

    Get_Error_Msg()
    {
        return cy.get(this.Error_msg);
    }

    Enter_Values(username, password)
    {
        cy.EnterValues(this.Get_UserName(), username);
        cy.EnterValues(this.Get_Password(), password);
        this.Get_SubmitBtn().click();
    }

    Compare_Msg(text)
    {
        cy.Comparator(this.Get_Error_Msg(), text);
    }
}

export default LoginPage;