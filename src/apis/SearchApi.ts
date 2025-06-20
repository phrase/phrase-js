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
    AccountSearchResult,
    AccountSearchResultFromJSON,
    AccountSearchResultToJSON,
    SearchInAccountParameters,
    SearchInAccountParametersFromJSON,
    SearchInAccountParametersToJSON,
} from '../models';

export interface SearchInAccountRequest {
    accountId: string;
    searchInAccountParameters: SearchInAccountParameters;
    xPhraseAppOTP?: string;
}

/**
 * 
 */
export class SearchApi extends runtime.BaseAPI {

    /**
     * Search for keys and translations in all account projects  *Note: Search is limited to 10000 results and may not include recently updated data depending on the project sizes.* 
     * Search across projects
     */
    async searchInAccountRaw(requestParameters: SearchInAccountRequest): Promise<runtime.ApiResponse<AccountSearchResult>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling searchInAccount.');
        }

        if (requestParameters.searchInAccountParameters === null || requestParameters.searchInAccountParameters === undefined) {
            throw new runtime.RequiredError('searchInAccountParameters','Required parameter requestParameters.searchInAccountParameters was null or undefined when calling searchInAccount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/accounts/{account_id}/search`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SearchInAccountParametersToJSON(requestParameters.searchInAccountParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountSearchResultFromJSON(jsonValue));
    }

    /**
     * Search for keys and translations in all account projects  *Note: Search is limited to 10000 results and may not include recently updated data depending on the project sizes.* 
     * Search across projects
     */
    async searchInAccount(requestParameters: SearchInAccountRequest): Promise<AccountSearchResult> {
        const response = await this.searchInAccountRaw(requestParameters);
        return await response.value();
    }

}
