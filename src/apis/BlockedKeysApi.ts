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
    BlacklistedKey,
    BlacklistedKeyFromJSON,
    BlacklistedKeyToJSON,
    BlacklistedKeyCreateParameters,
    BlacklistedKeyCreateParametersFromJSON,
    BlacklistedKeyCreateParametersToJSON,
    BlacklistedKeyUpdateParameters,
    BlacklistedKeyUpdateParametersFromJSON,
    BlacklistedKeyUpdateParametersToJSON,
} from '../models';

export interface BlacklistedKeyCreateRequest {
    projectId: string;
    blacklistedKeyCreateParameters: BlacklistedKeyCreateParameters;
    xPhraseAppOTP?: string;
}

export interface BlacklistedKeyDeleteRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface BlacklistedKeyShowRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface BlacklistedKeyUpdateRequest {
    projectId: string;
    id: string;
    blacklistedKeyUpdateParameters: BlacklistedKeyUpdateParameters;
    xPhraseAppOTP?: string;
}

export interface BlacklistedKeysListRequest {
    projectId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
    branch?: string;
}

/**
 * 
 */
export class BlockedKeysApi extends runtime.BaseAPI {

    /**
     * Create a new rule for blocking keys.
     * Create a blocked key
     */
    async blacklistedKeyCreateRaw(requestParameters: BlacklistedKeyCreateRequest): Promise<runtime.ApiResponse<BlacklistedKey>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling blacklistedKeyCreate.');
        }

        if (requestParameters.blacklistedKeyCreateParameters === null || requestParameters.blacklistedKeyCreateParameters === undefined) {
            throw new runtime.RequiredError('blacklistedKeyCreateParameters','Required parameter requestParameters.blacklistedKeyCreateParameters was null or undefined when calling blacklistedKeyCreate.');
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
            path: `/projects/{project_id}/blacklisted_keys`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BlacklistedKeyCreateParametersToJSON(requestParameters.blacklistedKeyCreateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BlacklistedKeyFromJSON(jsonValue));
    }

    /**
     * Create a new rule for blocking keys.
     * Create a blocked key
     */
    async blacklistedKeyCreate(requestParameters: BlacklistedKeyCreateRequest): Promise<BlacklistedKey> {
        const response = await this.blacklistedKeyCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing rule for blocking keys.
     * Delete a blocked key
     */
    async blacklistedKeyDeleteRaw(requestParameters: BlacklistedKeyDeleteRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling blacklistedKeyDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling blacklistedKeyDelete.');
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
            path: `/projects/{project_id}/blacklisted_keys/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete an existing rule for blocking keys.
     * Delete a blocked key
     */
    async blacklistedKeyDelete(requestParameters: BlacklistedKeyDeleteRequest): Promise<any> {
        const response = await this.blacklistedKeyDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details on a single rule for blocking keys for a given project.
     * Get a single blocked key
     */
    async blacklistedKeyShowRaw(requestParameters: BlacklistedKeyShowRequest): Promise<runtime.ApiResponse<BlacklistedKey>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling blacklistedKeyShow.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling blacklistedKeyShow.');
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
            path: `/projects/{project_id}/blacklisted_keys/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BlacklistedKeyFromJSON(jsonValue));
    }

    /**
     * Get details on a single rule for blocking keys for a given project.
     * Get a single blocked key
     */
    async blacklistedKeyShow(requestParameters: BlacklistedKeyShowRequest): Promise<BlacklistedKey> {
        const response = await this.blacklistedKeyShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an existing rule for blocking keys.
     * Update a blocked key
     */
    async blacklistedKeyUpdateRaw(requestParameters: BlacklistedKeyUpdateRequest): Promise<runtime.ApiResponse<BlacklistedKey>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling blacklistedKeyUpdate.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling blacklistedKeyUpdate.');
        }

        if (requestParameters.blacklistedKeyUpdateParameters === null || requestParameters.blacklistedKeyUpdateParameters === undefined) {
            throw new runtime.RequiredError('blacklistedKeyUpdateParameters','Required parameter requestParameters.blacklistedKeyUpdateParameters was null or undefined when calling blacklistedKeyUpdate.');
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
            path: `/projects/{project_id}/blacklisted_keys/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BlacklistedKeyUpdateParametersToJSON(requestParameters.blacklistedKeyUpdateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BlacklistedKeyFromJSON(jsonValue));
    }

    /**
     * Update an existing rule for blocking keys.
     * Update a blocked key
     */
    async blacklistedKeyUpdate(requestParameters: BlacklistedKeyUpdateRequest): Promise<BlacklistedKey> {
        const response = await this.blacklistedKeyUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all rules for blocking keys for the given project.
     * List blocked keys
     */
    async blacklistedKeysListRaw(requestParameters: BlacklistedKeysListRequest): Promise<runtime.ApiResponse<Array<BlacklistedKey>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling blacklistedKeysList.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.branch !== undefined) {
            queryParameters['branch'] = requestParameters.branch;
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
            path: `/projects/{project_id}/blacklisted_keys`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BlacklistedKeyFromJSON));
    }

    /**
     * List all rules for blocking keys for the given project.
     * List blocked keys
     */
    async blacklistedKeysList(requestParameters: BlacklistedKeysListRequest): Promise<Array<BlacklistedKey>> {
        const response = await this.blacklistedKeysListRaw(requestParameters);
        return await response.value();
    }

}
