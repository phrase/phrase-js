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
    Webhook,
    WebhookFromJSON,
    WebhookToJSON,
    WebhookCreateParameters,
    WebhookCreateParametersFromJSON,
    WebhookCreateParametersToJSON,
    WebhookUpdateParameters,
    WebhookUpdateParametersFromJSON,
    WebhookUpdateParametersToJSON,
} from '../models';

export interface WebhookCreateRequest {
    projectId: string;
    webhookCreateParameters: WebhookCreateParameters;
    xPhraseAppOTP?: string;
}

export interface WebhookDeleteRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface WebhookShowRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface WebhookTestRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface WebhookUpdateRequest {
    projectId: string;
    id: string;
    webhookUpdateParameters: WebhookUpdateParameters;
    xPhraseAppOTP?: string;
}

export interface WebhooksListRequest {
    projectId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}

/**
 * no description
 */
export class WebhooksApi extends runtime.BaseAPI {

    /**
     * Create a new webhook.
     * Create a webhook
     */
    async webhookCreateRaw(requestParameters: WebhookCreateRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling webhookCreate.');
        }

        if (requestParameters.webhookCreateParameters === null || requestParameters.webhookCreateParameters === undefined) {
            throw new runtime.RequiredError('webhookCreateParameters','Required parameter requestParameters.webhookCreateParameters was null or undefined when calling webhookCreate.');
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
            path: `/projects/{project_id}/webhooks`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WebhookCreateParametersToJSON(requestParameters.webhookCreateParameters),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create a new webhook.
     * Create a webhook
     */
    async webhookCreate(requestParameters: WebhookCreateRequest): Promise<void> {
        await this.webhookCreateRaw(requestParameters);
    }

    /**
     * Delete an existing webhook.
     * Delete a webhook
     */
    async webhookDeleteRaw(requestParameters: WebhookDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling webhookDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling webhookDelete.');
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
            path: `/projects/{project_id}/webhooks/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an existing webhook.
     * Delete a webhook
     */
    async webhookDelete(requestParameters: WebhookDeleteRequest): Promise<void> {
        await this.webhookDeleteRaw(requestParameters);
    }

    /**
     * Get details on a single webhook.
     * Get a single webhook
     */
    async webhookShowRaw(requestParameters: WebhookShowRequest): Promise<runtime.ApiResponse<Webhook>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling webhookShow.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling webhookShow.');
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
            path: `/projects/{project_id}/webhooks/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookFromJSON(jsonValue));
    }

    /**
     * Get details on a single webhook.
     * Get a single webhook
     */
    async webhookShow(requestParameters: WebhookShowRequest): Promise<Webhook> {
        const response = await this.webhookShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * Perform a test request for a webhook.
     * Test a webhook
     */
    async webhookTestRaw(requestParameters: WebhookTestRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling webhookTest.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling webhookTest.');
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
            path: `/projects/{project_id}/webhooks/{id}/test`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Perform a test request for a webhook.
     * Test a webhook
     */
    async webhookTest(requestParameters: WebhookTestRequest): Promise<void> {
        await this.webhookTestRaw(requestParameters);
    }

    /**
     * Update an existing webhook.
     * Update a webhook
     */
    async webhookUpdateRaw(requestParameters: WebhookUpdateRequest): Promise<runtime.ApiResponse<Webhook>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling webhookUpdate.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling webhookUpdate.');
        }

        if (requestParameters.webhookUpdateParameters === null || requestParameters.webhookUpdateParameters === undefined) {
            throw new runtime.RequiredError('webhookUpdateParameters','Required parameter requestParameters.webhookUpdateParameters was null or undefined when calling webhookUpdate.');
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
            path: `/projects/{project_id}/webhooks/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: WebhookUpdateParametersToJSON(requestParameters.webhookUpdateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookFromJSON(jsonValue));
    }

    /**
     * Update an existing webhook.
     * Update a webhook
     */
    async webhookUpdate(requestParameters: WebhookUpdateRequest): Promise<Webhook> {
        const response = await this.webhookUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all webhooks for the given project.
     * List webhooks
     */
    async webhooksListRaw(requestParameters: WebhooksListRequest): Promise<runtime.ApiResponse<Array<Webhook>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling webhooksList.');
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
            path: `/projects/{project_id}/webhooks`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(WebhookFromJSON));
    }

    /**
     * List all webhooks for the given project.
     * List webhooks
     */
    async webhooksList(requestParameters: WebhooksListRequest): Promise<Array<Webhook>> {
        const response = await this.webhooksListRaw(requestParameters);
        return await response.value();
    }

}
