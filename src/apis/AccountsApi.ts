/* tslint:disable */
/* eslint-disable */
/**
 * Phrase Strings API Reference
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@phrase.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Account,
    AccountFromJSON,
    AccountToJSON,
    AccountDetails,
    AccountDetailsFromJSON,
    AccountDetailsToJSON,
} from '../models';

export interface AccountShowRequest {
    id: string;
    xPhraseAppOTP?: string;
}

export interface AccountsListRequest {
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}

/**
 * 
 */
export class AccountsApi extends runtime.BaseAPI {

    /**
     * Get details on a single account.
     * Get a single account
     */
    async accountShowRaw(requestParameters: AccountShowRequest): Promise<runtime.ApiResponse<AccountDetails>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling accountShow.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPhraseAppOTP !== undefined && requestParameters.xPhraseAppOTP !== null) {
            headerParameters['X-PhraseApp-OTP'] = String(requestParameters.xPhraseAppOTP);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Token authentication
        }

        const response = await this.request({
            path: `/accounts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountDetailsFromJSON(jsonValue));
    }

    /**
     * Get details on a single account.
     * Get a single account
     */
    async accountShow(requestParameters: AccountShowRequest): Promise<AccountDetails> {
        const response = await this.accountShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all accounts the current user has access to.
     * List accounts
     */
    async accountsListRaw(requestParameters: AccountsListRequest): Promise<runtime.ApiResponse<Array<Account>>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPhraseAppOTP !== undefined && requestParameters.xPhraseAppOTP !== null) {
            headerParameters['X-PhraseApp-OTP'] = String(requestParameters.xPhraseAppOTP);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Token authentication
        }

        const response = await this.request({
            path: `/accounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AccountFromJSON));
    }

    /**
     * List all accounts the current user has access to.
     * List accounts
     */
    async accountsList(requestParameters: AccountsListRequest): Promise<Array<Account>> {
        const response = await this.accountsListRaw(requestParameters);
        return await response.value();
    }

}
