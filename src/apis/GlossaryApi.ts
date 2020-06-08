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
    Glossary,
    GlossaryFromJSON,
    GlossaryToJSON,
    GlossaryCreateParameters,
    GlossaryCreateParametersFromJSON,
    GlossaryCreateParametersToJSON,
    GlossaryUpdateParameters,
    GlossaryUpdateParametersFromJSON,
    GlossaryUpdateParametersToJSON,
} from '../models';

export interface GlossariesListRequest {
    accountId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}

export interface GlossaryCreateRequest {
    accountId: string;
    glossaryCreateParameters: GlossaryCreateParameters;
    xPhraseAppOTP?: string;
}

export interface GlossaryDeleteRequest {
    accountId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface GlossaryShowRequest {
    accountId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface GlossaryUpdateRequest {
    accountId: string;
    id: string;
    glossaryUpdateParameters: GlossaryUpdateParameters;
    xPhraseAppOTP?: string;
}

/**
 * no description
 */
export class GlossaryApi extends runtime.BaseAPI {

    /**
     * List all glossaries the current user has access to.
     * List glossaries
     */
    async glossariesListRaw(requestParameters: GlossariesListRequest): Promise<runtime.ApiResponse<Array<Glossary>>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling glossariesList.');
        }

        const queryParameters: runtime.HTTPQuery = {};

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
            path: `/accounts/{account_id}/glossaries`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GlossaryFromJSON));
    }

    /**
     * List all glossaries the current user has access to.
     * List glossaries
     */
    async glossariesList(requestParameters: GlossariesListRequest): Promise<Array<Glossary>> {
        const response = await this.glossariesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new glossary.
     * Create a glossary
     */
    async glossaryCreateRaw(requestParameters: GlossaryCreateRequest): Promise<runtime.ApiResponse<Glossary>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling glossaryCreate.');
        }

        if (requestParameters.glossaryCreateParameters === null || requestParameters.glossaryCreateParameters === undefined) {
            throw new runtime.RequiredError('glossaryCreateParameters','Required parameter requestParameters.glossaryCreateParameters was null or undefined when calling glossaryCreate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

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
            path: `/accounts/{account_id}/glossaries`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GlossaryCreateParametersToJSON(requestParameters.glossaryCreateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GlossaryFromJSON(jsonValue));
    }

    /**
     * Create a new glossary.
     * Create a glossary
     */
    async glossaryCreate(requestParameters: GlossaryCreateRequest): Promise<Glossary> {
        const response = await this.glossaryCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing glossary.
     * Delete a glossary
     */
    async glossaryDeleteRaw(requestParameters: GlossaryDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling glossaryDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling glossaryDelete.');
        }

        const queryParameters: runtime.HTTPQuery = {};

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
            path: `/accounts/{account_id}/glossaries/{id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an existing glossary.
     * Delete a glossary
     */
    async glossaryDelete(requestParameters: GlossaryDeleteRequest): Promise<void> {
        await this.glossaryDeleteRaw(requestParameters);
    }

    /**
     * Get details on a single glossary.
     * Get a single glossary
     */
    async glossaryShowRaw(requestParameters: GlossaryShowRequest): Promise<runtime.ApiResponse<Glossary>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling glossaryShow.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling glossaryShow.');
        }

        const queryParameters: runtime.HTTPQuery = {};

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
            path: `/accounts/{account_id}/glossaries/{id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GlossaryFromJSON(jsonValue));
    }

    /**
     * Get details on a single glossary.
     * Get a single glossary
     */
    async glossaryShow(requestParameters: GlossaryShowRequest): Promise<Glossary> {
        const response = await this.glossaryShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an existing glossary.
     * Update a glossary
     */
    async glossaryUpdateRaw(requestParameters: GlossaryUpdateRequest): Promise<runtime.ApiResponse<Glossary>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling glossaryUpdate.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling glossaryUpdate.');
        }

        if (requestParameters.glossaryUpdateParameters === null || requestParameters.glossaryUpdateParameters === undefined) {
            throw new runtime.RequiredError('glossaryUpdateParameters','Required parameter requestParameters.glossaryUpdateParameters was null or undefined when calling glossaryUpdate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

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
            path: `/accounts/{account_id}/glossaries/{id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: GlossaryUpdateParametersToJSON(requestParameters.glossaryUpdateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GlossaryFromJSON(jsonValue));
    }

    /**
     * Update an existing glossary.
     * Update a glossary
     */
    async glossaryUpdate(requestParameters: GlossaryUpdateRequest): Promise<Glossary> {
        const response = await this.glossaryUpdateRaw(requestParameters);
        return await response.value();
    }

}
