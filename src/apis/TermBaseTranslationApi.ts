/* tslint:disable */
/* eslint-disable */
/**
 * Phrase API Reference
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@phrase.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface GlossaryTermTranslationDeleteRequest {
    accountId: string;
    glossaryId: string;
    termId: string;
    id: string;
    xPhraseAppOTP?: string;
}

/**
 * 
 */
export class TermBaseTranslationApi extends runtime.BaseAPI {

    /**
     * Delete an existing translation of a term in a term base (previously: glossary).
     * Delete a translation for a term
     */
    async glossaryTermTranslationDeleteRaw(requestParameters: GlossaryTermTranslationDeleteRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling glossaryTermTranslationDelete.');
        }

        if (requestParameters.glossaryId === null || requestParameters.glossaryId === undefined) {
            throw new runtime.RequiredError('glossaryId','Required parameter requestParameters.glossaryId was null or undefined when calling glossaryTermTranslationDelete.');
        }

        if (requestParameters.termId === null || requestParameters.termId === undefined) {
            throw new runtime.RequiredError('termId','Required parameter requestParameters.termId was null or undefined when calling glossaryTermTranslationDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling glossaryTermTranslationDelete.');
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
            path: `/accounts/{account_id}/glossaries/{glossary_id}/terms/{term_id}/translations/{id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"glossary_id"}}`, encodeURIComponent(String(requestParameters.glossaryId))).replace(`{${"term_id"}}`, encodeURIComponent(String(requestParameters.termId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete an existing translation of a term in a term base (previously: glossary).
     * Delete a translation for a term
     */
    async glossaryTermTranslationDelete(requestParameters: GlossaryTermTranslationDeleteRequest): Promise<any> {
        const response = await this.glossaryTermTranslationDeleteRaw(requestParameters);
        return await response.value();
    }

}
