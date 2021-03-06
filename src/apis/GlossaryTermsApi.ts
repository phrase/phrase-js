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
import {
    GlossaryTerm,
    GlossaryTermFromJSON,
    GlossaryTermToJSON,
    GlossaryTermCreateParameters,
    GlossaryTermCreateParametersFromJSON,
    GlossaryTermCreateParametersToJSON,
    GlossaryTermUpdateParameters,
    GlossaryTermUpdateParametersFromJSON,
    GlossaryTermUpdateParametersToJSON,
} from '../models';

export interface GlossaryTermCreateRequest {
    accountId: string;
    glossaryId: string;
    glossaryTermCreateParameters: GlossaryTermCreateParameters;
    xPhraseAppOTP?: string;
}

export interface GlossaryTermDeleteRequest {
    accountId: string;
    glossaryId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface GlossaryTermShowRequest {
    accountId: string;
    glossaryId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface GlossaryTermUpdateRequest {
    accountId: string;
    glossaryId: string;
    id: string;
    glossaryTermUpdateParameters: GlossaryTermUpdateParameters;
    xPhraseAppOTP?: string;
}

export interface GlossaryTermsListRequest {
    accountId: string;
    glossaryId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}

/**
 * 
 */
export class GlossaryTermsApi extends runtime.BaseAPI {

    /**
     * Create a new glossary term.
     * Create a glossary term
     */
    async glossaryTermCreateRaw(requestParameters: GlossaryTermCreateRequest): Promise<runtime.ApiResponse<GlossaryTerm>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling glossaryTermCreate.');
        }

        if (requestParameters.glossaryId === null || requestParameters.glossaryId === undefined) {
            throw new runtime.RequiredError('glossaryId','Required parameter requestParameters.glossaryId was null or undefined when calling glossaryTermCreate.');
        }

        if (requestParameters.glossaryTermCreateParameters === null || requestParameters.glossaryTermCreateParameters === undefined) {
            throw new runtime.RequiredError('glossaryTermCreateParameters','Required parameter requestParameters.glossaryTermCreateParameters was null or undefined when calling glossaryTermCreate.');
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
            path: `/accounts/{account_id}/glossaries/{glossary_id}/terms`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"glossary_id"}}`, encodeURIComponent(String(requestParameters.glossaryId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GlossaryTermCreateParametersToJSON(requestParameters.glossaryTermCreateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GlossaryTermFromJSON(jsonValue));
    }

    /**
     * Create a new glossary term.
     * Create a glossary term
     */
    async glossaryTermCreate(requestParameters: GlossaryTermCreateRequest): Promise<GlossaryTerm> {
        const response = await this.glossaryTermCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing glossary term.
     * Delete a glossary term
     */
    async glossaryTermDeleteRaw(requestParameters: GlossaryTermDeleteRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling glossaryTermDelete.');
        }

        if (requestParameters.glossaryId === null || requestParameters.glossaryId === undefined) {
            throw new runtime.RequiredError('glossaryId','Required parameter requestParameters.glossaryId was null or undefined when calling glossaryTermDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling glossaryTermDelete.');
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
            path: `/accounts/{account_id}/glossaries/{glossary_id}/terms/{id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"glossary_id"}}`, encodeURIComponent(String(requestParameters.glossaryId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete an existing glossary term.
     * Delete a glossary term
     */
    async glossaryTermDelete(requestParameters: GlossaryTermDeleteRequest): Promise<any> {
        const response = await this.glossaryTermDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details on a single glossary term.
     * Get a single glossary term
     */
    async glossaryTermShowRaw(requestParameters: GlossaryTermShowRequest): Promise<runtime.ApiResponse<GlossaryTerm>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling glossaryTermShow.');
        }

        if (requestParameters.glossaryId === null || requestParameters.glossaryId === undefined) {
            throw new runtime.RequiredError('glossaryId','Required parameter requestParameters.glossaryId was null or undefined when calling glossaryTermShow.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling glossaryTermShow.');
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
            path: `/accounts/{account_id}/glossaries/{glossary_id}/terms/{id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"glossary_id"}}`, encodeURIComponent(String(requestParameters.glossaryId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GlossaryTermFromJSON(jsonValue));
    }

    /**
     * Get details on a single glossary term.
     * Get a single glossary term
     */
    async glossaryTermShow(requestParameters: GlossaryTermShowRequest): Promise<GlossaryTerm> {
        const response = await this.glossaryTermShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an existing glossary term.
     * Update a glossary term
     */
    async glossaryTermUpdateRaw(requestParameters: GlossaryTermUpdateRequest): Promise<runtime.ApiResponse<GlossaryTerm>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling glossaryTermUpdate.');
        }

        if (requestParameters.glossaryId === null || requestParameters.glossaryId === undefined) {
            throw new runtime.RequiredError('glossaryId','Required parameter requestParameters.glossaryId was null or undefined when calling glossaryTermUpdate.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling glossaryTermUpdate.');
        }

        if (requestParameters.glossaryTermUpdateParameters === null || requestParameters.glossaryTermUpdateParameters === undefined) {
            throw new runtime.RequiredError('glossaryTermUpdateParameters','Required parameter requestParameters.glossaryTermUpdateParameters was null or undefined when calling glossaryTermUpdate.');
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
            path: `/accounts/{account_id}/glossaries/{glossary_id}/terms/{id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"glossary_id"}}`, encodeURIComponent(String(requestParameters.glossaryId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: GlossaryTermUpdateParametersToJSON(requestParameters.glossaryTermUpdateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GlossaryTermFromJSON(jsonValue));
    }

    /**
     * Update an existing glossary term.
     * Update a glossary term
     */
    async glossaryTermUpdate(requestParameters: GlossaryTermUpdateRequest): Promise<GlossaryTerm> {
        const response = await this.glossaryTermUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all glossary terms the current user has access to.
     * List glossary terms
     */
    async glossaryTermsListRaw(requestParameters: GlossaryTermsListRequest): Promise<runtime.ApiResponse<Array<GlossaryTerm>>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling glossaryTermsList.');
        }

        if (requestParameters.glossaryId === null || requestParameters.glossaryId === undefined) {
            throw new runtime.RequiredError('glossaryId','Required parameter requestParameters.glossaryId was null or undefined when calling glossaryTermsList.');
        }

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
            path: `/accounts/{account_id}/glossaries/{glossary_id}/terms`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"glossary_id"}}`, encodeURIComponent(String(requestParameters.glossaryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GlossaryTermFromJSON));
    }

    /**
     * List all glossary terms the current user has access to.
     * List glossary terms
     */
    async glossaryTermsList(requestParameters: GlossaryTermsListRequest): Promise<Array<GlossaryTerm>> {
        const response = await this.glossaryTermsListRaw(requestParameters);
        return await response.value();
    }

}
