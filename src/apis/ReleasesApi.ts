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
    Release,
    ReleaseFromJSON,
    ReleaseToJSON,
    ReleaseCreateParameters,
    ReleaseCreateParametersFromJSON,
    ReleaseCreateParametersToJSON,
    ReleasePreview,
    ReleasePreviewFromJSON,
    ReleasePreviewToJSON,
    ReleaseUpdateParameters,
    ReleaseUpdateParametersFromJSON,
    ReleaseUpdateParametersToJSON,
} from '../models';

export interface ReleaseCreateRequest {
    accountId: string;
    distributionId: string;
    releaseCreateParameters: ReleaseCreateParameters;
    xPhraseAppOTP?: string;
}

export interface ReleaseDeleteRequest {
    accountId: string;
    distributionId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface ReleasePublishRequest {
    accountId: string;
    distributionId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface ReleaseShowRequest {
    accountId: string;
    distributionId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface ReleaseUpdateRequest {
    accountId: string;
    distributionId: string;
    id: string;
    releaseUpdateParameters: ReleaseUpdateParameters;
    xPhraseAppOTP?: string;
}

export interface ReleasesListRequest {
    accountId: string;
    distributionId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}

/**
 * 
 */
export class ReleasesApi extends runtime.BaseAPI {

    /**
     * Create a new release.
     * Create a release
     */
    async releaseCreateRaw(requestParameters: ReleaseCreateRequest): Promise<runtime.ApiResponse<Release>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling releaseCreate.');
        }

        if (requestParameters.distributionId === null || requestParameters.distributionId === undefined) {
            throw new runtime.RequiredError('distributionId','Required parameter requestParameters.distributionId was null or undefined when calling releaseCreate.');
        }

        if (requestParameters.releaseCreateParameters === null || requestParameters.releaseCreateParameters === undefined) {
            throw new runtime.RequiredError('releaseCreateParameters','Required parameter requestParameters.releaseCreateParameters was null or undefined when calling releaseCreate.');
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
            path: `/accounts/{account_id}/distributions/{distribution_id}/releases`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"distribution_id"}}`, encodeURIComponent(String(requestParameters.distributionId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReleaseCreateParametersToJSON(requestParameters.releaseCreateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ReleaseFromJSON(jsonValue));
    }

    /**
     * Create a new release.
     * Create a release
     */
    async releaseCreate(requestParameters: ReleaseCreateRequest): Promise<Release> {
        const response = await this.releaseCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing release.
     * Delete a release
     */
    async releaseDeleteRaw(requestParameters: ReleaseDeleteRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling releaseDelete.');
        }

        if (requestParameters.distributionId === null || requestParameters.distributionId === undefined) {
            throw new runtime.RequiredError('distributionId','Required parameter requestParameters.distributionId was null or undefined when calling releaseDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling releaseDelete.');
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
            path: `/accounts/{account_id}/distributions/{distribution_id}/releases/{id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"distribution_id"}}`, encodeURIComponent(String(requestParameters.distributionId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete an existing release.
     * Delete a release
     */
    async releaseDelete(requestParameters: ReleaseDeleteRequest): Promise<any> {
        const response = await this.releaseDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Publish a release for production.
     * Publish a release
     */
    async releasePublishRaw(requestParameters: ReleasePublishRequest): Promise<runtime.ApiResponse<Release>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling releasePublish.');
        }

        if (requestParameters.distributionId === null || requestParameters.distributionId === undefined) {
            throw new runtime.RequiredError('distributionId','Required parameter requestParameters.distributionId was null or undefined when calling releasePublish.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling releasePublish.');
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
            path: `/accounts/{account_id}/distributions/{distribution_id}/releases/{id}/publish`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"distribution_id"}}`, encodeURIComponent(String(requestParameters.distributionId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ReleaseFromJSON(jsonValue));
    }

    /**
     * Publish a release for production.
     * Publish a release
     */
    async releasePublish(requestParameters: ReleasePublishRequest): Promise<Release> {
        const response = await this.releasePublishRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details on a single release.
     * Get a single release
     */
    async releaseShowRaw(requestParameters: ReleaseShowRequest): Promise<runtime.ApiResponse<Release>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling releaseShow.');
        }

        if (requestParameters.distributionId === null || requestParameters.distributionId === undefined) {
            throw new runtime.RequiredError('distributionId','Required parameter requestParameters.distributionId was null or undefined when calling releaseShow.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling releaseShow.');
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
            path: `/accounts/{account_id}/distributions/{distribution_id}/releases/{id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"distribution_id"}}`, encodeURIComponent(String(requestParameters.distributionId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ReleaseFromJSON(jsonValue));
    }

    /**
     * Get details on a single release.
     * Get a single release
     */
    async releaseShow(requestParameters: ReleaseShowRequest): Promise<Release> {
        const response = await this.releaseShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an existing release.
     * Update a release
     */
    async releaseUpdateRaw(requestParameters: ReleaseUpdateRequest): Promise<runtime.ApiResponse<Release>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling releaseUpdate.');
        }

        if (requestParameters.distributionId === null || requestParameters.distributionId === undefined) {
            throw new runtime.RequiredError('distributionId','Required parameter requestParameters.distributionId was null or undefined when calling releaseUpdate.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling releaseUpdate.');
        }

        if (requestParameters.releaseUpdateParameters === null || requestParameters.releaseUpdateParameters === undefined) {
            throw new runtime.RequiredError('releaseUpdateParameters','Required parameter requestParameters.releaseUpdateParameters was null or undefined when calling releaseUpdate.');
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
            path: `/accounts/{account_id}/distributions/{distribution_id}/releases/{id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"distribution_id"}}`, encodeURIComponent(String(requestParameters.distributionId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ReleaseUpdateParametersToJSON(requestParameters.releaseUpdateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ReleaseFromJSON(jsonValue));
    }

    /**
     * Update an existing release.
     * Update a release
     */
    async releaseUpdate(requestParameters: ReleaseUpdateRequest): Promise<Release> {
        const response = await this.releaseUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all releases for the given distribution.
     * List releases
     */
    async releasesListRaw(requestParameters: ReleasesListRequest): Promise<runtime.ApiResponse<Array<ReleasePreview>>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling releasesList.');
        }

        if (requestParameters.distributionId === null || requestParameters.distributionId === undefined) {
            throw new runtime.RequiredError('distributionId','Required parameter requestParameters.distributionId was null or undefined when calling releasesList.');
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
            path: `/accounts/{account_id}/distributions/{distribution_id}/releases`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"distribution_id"}}`, encodeURIComponent(String(requestParameters.distributionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ReleasePreviewFromJSON));
    }

    /**
     * List all releases for the given distribution.
     * List releases
     */
    async releasesList(requestParameters: ReleasesListRequest): Promise<Array<ReleasePreview>> {
        const response = await this.releasesListRaw(requestParameters);
        return await response.value();
    }

}
