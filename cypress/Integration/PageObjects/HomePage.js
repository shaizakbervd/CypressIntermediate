class HomePage
{
    Landing_Homepg="div.app_logo";

    Get_Landingpg_Text()
    {
        return cy.get(this.Landing_Homepg);
    }

    Compare_Msg(text)
    {
        cy.Comparator(this.Get_Landingpg_Text(), text);
    }
}

export default HomePage;