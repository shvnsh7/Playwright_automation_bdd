import {test as base, createBdd} from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../stepdefinitions/LoginPage';

export const test=base.extend<{
    loginPage: LoginPage;

}>({
    loginPage: async({page},use)=>{
        const loginPage=new LoginPage(page);
        await use(loginPage);
    },

});

export const{Given, When, Then, Before, After}=createBdd(test);
export{expect};