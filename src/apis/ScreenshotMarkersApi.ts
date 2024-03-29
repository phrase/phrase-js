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
    ScreenshotMarker,
    ScreenshotMarkerFromJSON,
    ScreenshotMarkerToJSON,
    ScreenshotMarkerCreateParameters,
    ScreenshotMarkerCreateParametersFromJSON,
    ScreenshotMarkerCreateParametersToJSON,
    ScreenshotMarkerUpdateParameters,
    ScreenshotMarkerUpdateParametersFromJSON,
    ScreenshotMarkerUpdateParametersToJSON,
} from '../models';

export interface ScreenshotMarkerCreateRequest {
    projectId: string;
    screenshotId: string;
    screenshotMarkerCreateParameters: ScreenshotMarkerCreateParameters;
    xPhraseAppOTP?: string;
}

export interface ScreenshotMarkerDeleteRequest {
    projectId: string;
    screenshotId: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface ScreenshotMarkerShowRequest {
    projectId: string;
    screenshotId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface ScreenshotMarkerUpdateRequest {
    projectId: string;
    screenshotId: string;
    screenshotMarkerUpdateParameters: ScreenshotMarkerUpdateParameters;
    xPhraseAppOTP?: string;
}

export interface ScreenshotMarkersListRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
    branch?: string;
}

/**
 * 
 */
export class ScreenshotMarkersApi extends runtime.BaseAPI {

    /**
     * Create a new screenshot marker.
     * Create a screenshot marker
     */
    async screenshotMarkerCreateRaw(requestParameters: ScreenshotMarkerCreateRequest): Promise<runtime.ApiResponse<ScreenshotMarker>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling screenshotMarkerCreate.');
        }

        if (requestParameters.screenshotId === null || requestParameters.screenshotId === undefined) {
            throw new runtime.RequiredError('screenshotId','Required parameter requestParameters.screenshotId was null or undefined when calling screenshotMarkerCreate.');
        }

        if (requestParameters.screenshotMarkerCreateParameters === null || requestParameters.screenshotMarkerCreateParameters === undefined) {
            throw new runtime.RequiredError('screenshotMarkerCreateParameters','Required parameter requestParameters.screenshotMarkerCreateParameters was null or undefined when calling screenshotMarkerCreate.');
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
            path: `/projects/{project_id}/screenshots/{screenshot_id}/markers`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"screenshot_id"}}`, encodeURIComponent(String(requestParameters.screenshotId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ScreenshotMarkerCreateParametersToJSON(requestParameters.screenshotMarkerCreateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ScreenshotMarkerFromJSON(jsonValue));
    }

    /**
     * Create a new screenshot marker.
     * Create a screenshot marker
     */
    async screenshotMarkerCreate(requestParameters: ScreenshotMarkerCreateRequest): Promise<ScreenshotMarker> {
        const response = await this.screenshotMarkerCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing screenshot marker.
     * Delete a screenshot marker
     */
    async screenshotMarkerDeleteRaw(requestParameters: ScreenshotMarkerDeleteRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling screenshotMarkerDelete.');
        }

        if (requestParameters.screenshotId === null || requestParameters.screenshotId === undefined) {
            throw new runtime.RequiredError('screenshotId','Required parameter requestParameters.screenshotId was null or undefined when calling screenshotMarkerDelete.');
        }

        const queryParameters: any = {};

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
            path: `/projects/{project_id}/screenshots/{screenshot_id}/markers`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"screenshot_id"}}`, encodeURIComponent(String(requestParameters.screenshotId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete an existing screenshot marker.
     * Delete a screenshot marker
     */
    async screenshotMarkerDelete(requestParameters: ScreenshotMarkerDeleteRequest): Promise<any> {
        const response = await this.screenshotMarkerDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details on a single screenshot marker for a given project.
     * Get a single screenshot marker
     */
    async screenshotMarkerShowRaw(requestParameters: ScreenshotMarkerShowRequest): Promise<runtime.ApiResponse<ScreenshotMarker>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling screenshotMarkerShow.');
        }

        if (requestParameters.screenshotId === null || requestParameters.screenshotId === undefined) {
            throw new runtime.RequiredError('screenshotId','Required parameter requestParameters.screenshotId was null or undefined when calling screenshotMarkerShow.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling screenshotMarkerShow.');
        }

        const queryParameters: any = {};

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
            path: `/projects/{project_id}/screenshots/{screenshot_id}/markers/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"screenshot_id"}}`, encodeURIComponent(String(requestParameters.screenshotId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ScreenshotMarkerFromJSON(jsonValue));
    }

    /**
     * Get details on a single screenshot marker for a given project.
     * Get a single screenshot marker
     */
    async screenshotMarkerShow(requestParameters: ScreenshotMarkerShowRequest): Promise<ScreenshotMarker> {
        const response = await this.screenshotMarkerShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an existing screenshot marker.
     * Update a screenshot marker
     */
    async screenshotMarkerUpdateRaw(requestParameters: ScreenshotMarkerUpdateRequest): Promise<runtime.ApiResponse<ScreenshotMarker>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling screenshotMarkerUpdate.');
        }

        if (requestParameters.screenshotId === null || requestParameters.screenshotId === undefined) {
            throw new runtime.RequiredError('screenshotId','Required parameter requestParameters.screenshotId was null or undefined when calling screenshotMarkerUpdate.');
        }

        if (requestParameters.screenshotMarkerUpdateParameters === null || requestParameters.screenshotMarkerUpdateParameters === undefined) {
            throw new runtime.RequiredError('screenshotMarkerUpdateParameters','Required parameter requestParameters.screenshotMarkerUpdateParameters was null or undefined when calling screenshotMarkerUpdate.');
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
            path: `/projects/{project_id}/screenshots/{screenshot_id}/markers`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"screenshot_id"}}`, encodeURIComponent(String(requestParameters.screenshotId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ScreenshotMarkerUpdateParametersToJSON(requestParameters.screenshotMarkerUpdateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ScreenshotMarkerFromJSON(jsonValue));
    }

    /**
     * Update an existing screenshot marker.
     * Update a screenshot marker
     */
    async screenshotMarkerUpdate(requestParameters: ScreenshotMarkerUpdateRequest): Promise<ScreenshotMarker> {
        const response = await this.screenshotMarkerUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all screenshot markers for the given project.
     * List screenshot markers
     */
    async screenshotMarkersListRaw(requestParameters: ScreenshotMarkersListRequest): Promise<runtime.ApiResponse<Array<ScreenshotMarker>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling screenshotMarkersList.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling screenshotMarkersList.');
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
            path: `/projects/{project_id}/screenshots/{id}/markers`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ScreenshotMarkerFromJSON));
    }

    /**
     * List all screenshot markers for the given project.
     * List screenshot markers
     */
    async screenshotMarkersList(requestParameters: ScreenshotMarkersListRequest): Promise<Array<ScreenshotMarker>> {
        const response = await this.screenshotMarkersListRaw(requestParameters);
        return await response.value();
    }

}
