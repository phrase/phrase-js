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
    JobLocale,
    JobLocaleFromJSON,
    JobLocaleToJSON,
    JobLocaleCompleteParameters,
    JobLocaleCompleteParametersFromJSON,
    JobLocaleCompleteParametersToJSON,
    JobLocaleCompleteReviewParameters,
    JobLocaleCompleteReviewParametersFromJSON,
    JobLocaleCompleteReviewParametersToJSON,
    JobLocaleReopenParameters,
    JobLocaleReopenParametersFromJSON,
    JobLocaleReopenParametersToJSON,
    JobLocaleUpdateParameters,
    JobLocaleUpdateParametersFromJSON,
    JobLocaleUpdateParametersToJSON,
    JobLocalesCreateParameters,
    JobLocalesCreateParametersFromJSON,
    JobLocalesCreateParametersToJSON,
} from '../models';

export interface JobLocaleCompleteRequest {
    projectId: string;
    jobId: string;
    id: string;
    jobLocaleCompleteParameters: JobLocaleCompleteParameters;
    xPhraseAppOTP?: string;
}

export interface JobLocaleCompleteReviewRequest {
    projectId: string;
    jobId: string;
    id: string;
    jobLocaleCompleteReviewParameters: JobLocaleCompleteReviewParameters;
    xPhraseAppOTP?: string;
}

export interface JobLocaleDeleteRequest {
    projectId: string;
    jobId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface JobLocaleReopenRequest {
    projectId: string;
    jobId: string;
    id: string;
    jobLocaleReopenParameters: JobLocaleReopenParameters;
    xPhraseAppOTP?: string;
}

export interface JobLocaleShowRequest {
    projectId: string;
    jobId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface JobLocaleUpdateRequest {
    projectId: string;
    jobId: string;
    id: string;
    jobLocaleUpdateParameters: JobLocaleUpdateParameters;
    xPhraseAppOTP?: string;
}

export interface JobLocalesCreateRequest {
    projectId: string;
    jobId: string;
    jobLocalesCreateParameters: JobLocalesCreateParameters;
    xPhraseAppOTP?: string;
}

export interface JobLocalesListRequest {
    projectId: string;
    jobId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
    branch?: string;
}

/**
 * 
 */
export class JobLocalesApi extends runtime.BaseAPI {

    /**
     * Mark a job locale as completed.
     * Complete a job locale
     */
    async jobLocaleCompleteRaw(requestParameters: JobLocaleCompleteRequest): Promise<runtime.ApiResponse<JobLocale>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling jobLocaleComplete.');
        }

        if (requestParameters.jobId === null || requestParameters.jobId === undefined) {
            throw new runtime.RequiredError('jobId','Required parameter requestParameters.jobId was null or undefined when calling jobLocaleComplete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling jobLocaleComplete.');
        }

        if (requestParameters.jobLocaleCompleteParameters === null || requestParameters.jobLocaleCompleteParameters === undefined) {
            throw new runtime.RequiredError('jobLocaleCompleteParameters','Required parameter requestParameters.jobLocaleCompleteParameters was null or undefined when calling jobLocaleComplete.');
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
            path: `/projects/{project_id}/jobs/{job_id}/locales/{id}/complete`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters.jobId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: JobLocaleCompleteParametersToJSON(requestParameters.jobLocaleCompleteParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => JobLocaleFromJSON(jsonValue));
    }

    /**
     * Mark a job locale as completed.
     * Complete a job locale
     */
    async jobLocaleComplete(requestParameters: JobLocaleCompleteRequest): Promise<JobLocale> {
        const response = await this.jobLocaleCompleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Mark job locale as reviewed.
     * Review a job locale
     */
    async jobLocaleCompleteReviewRaw(requestParameters: JobLocaleCompleteReviewRequest): Promise<runtime.ApiResponse<JobLocale>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling jobLocaleCompleteReview.');
        }

        if (requestParameters.jobId === null || requestParameters.jobId === undefined) {
            throw new runtime.RequiredError('jobId','Required parameter requestParameters.jobId was null or undefined when calling jobLocaleCompleteReview.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling jobLocaleCompleteReview.');
        }

        if (requestParameters.jobLocaleCompleteReviewParameters === null || requestParameters.jobLocaleCompleteReviewParameters === undefined) {
            throw new runtime.RequiredError('jobLocaleCompleteReviewParameters','Required parameter requestParameters.jobLocaleCompleteReviewParameters was null or undefined when calling jobLocaleCompleteReview.');
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
            path: `/projects/{project_id}/jobs/{job_id}/locales/{id}/complete_review`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters.jobId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: JobLocaleCompleteReviewParametersToJSON(requestParameters.jobLocaleCompleteReviewParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => JobLocaleFromJSON(jsonValue));
    }

    /**
     * Mark job locale as reviewed.
     * Review a job locale
     */
    async jobLocaleCompleteReview(requestParameters: JobLocaleCompleteReviewRequest): Promise<JobLocale> {
        const response = await this.jobLocaleCompleteReviewRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing job locale.
     * Delete a job locale
     */
    async jobLocaleDeleteRaw(requestParameters: JobLocaleDeleteRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling jobLocaleDelete.');
        }

        if (requestParameters.jobId === null || requestParameters.jobId === undefined) {
            throw new runtime.RequiredError('jobId','Required parameter requestParameters.jobId was null or undefined when calling jobLocaleDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling jobLocaleDelete.');
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
            path: `/projects/{project_id}/jobs/{job_id}/locales/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters.jobId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete an existing job locale.
     * Delete a job locale
     */
    async jobLocaleDelete(requestParameters: JobLocaleDeleteRequest): Promise<any> {
        const response = await this.jobLocaleDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Mark a job locale as uncompleted.
     * Reopen a job locale
     */
    async jobLocaleReopenRaw(requestParameters: JobLocaleReopenRequest): Promise<runtime.ApiResponse<JobLocale>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling jobLocaleReopen.');
        }

        if (requestParameters.jobId === null || requestParameters.jobId === undefined) {
            throw new runtime.RequiredError('jobId','Required parameter requestParameters.jobId was null or undefined when calling jobLocaleReopen.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling jobLocaleReopen.');
        }

        if (requestParameters.jobLocaleReopenParameters === null || requestParameters.jobLocaleReopenParameters === undefined) {
            throw new runtime.RequiredError('jobLocaleReopenParameters','Required parameter requestParameters.jobLocaleReopenParameters was null or undefined when calling jobLocaleReopen.');
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
            path: `/projects/{project_id}/jobs/{job_id}/locales/{id}/reopen`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters.jobId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: JobLocaleReopenParametersToJSON(requestParameters.jobLocaleReopenParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => JobLocaleFromJSON(jsonValue));
    }

    /**
     * Mark a job locale as uncompleted.
     * Reopen a job locale
     */
    async jobLocaleReopen(requestParameters: JobLocaleReopenRequest): Promise<JobLocale> {
        const response = await this.jobLocaleReopenRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get a single job locale for a given job.
     * Get a single job locale
     */
    async jobLocaleShowRaw(requestParameters: JobLocaleShowRequest): Promise<runtime.ApiResponse<JobLocale>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling jobLocaleShow.');
        }

        if (requestParameters.jobId === null || requestParameters.jobId === undefined) {
            throw new runtime.RequiredError('jobId','Required parameter requestParameters.jobId was null or undefined when calling jobLocaleShow.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling jobLocaleShow.');
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
            path: `/projects/{project_id}/jobs/{job_id}/locales/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters.jobId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => JobLocaleFromJSON(jsonValue));
    }

    /**
     * Get a single job locale for a given job.
     * Get a single job locale
     */
    async jobLocaleShow(requestParameters: JobLocaleShowRequest): Promise<JobLocale> {
        const response = await this.jobLocaleShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an existing job locale.
     * Update a job locale
     */
    async jobLocaleUpdateRaw(requestParameters: JobLocaleUpdateRequest): Promise<runtime.ApiResponse<JobLocale>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling jobLocaleUpdate.');
        }

        if (requestParameters.jobId === null || requestParameters.jobId === undefined) {
            throw new runtime.RequiredError('jobId','Required parameter requestParameters.jobId was null or undefined when calling jobLocaleUpdate.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling jobLocaleUpdate.');
        }

        if (requestParameters.jobLocaleUpdateParameters === null || requestParameters.jobLocaleUpdateParameters === undefined) {
            throw new runtime.RequiredError('jobLocaleUpdateParameters','Required parameter requestParameters.jobLocaleUpdateParameters was null or undefined when calling jobLocaleUpdate.');
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
            path: `/projects/{project_id}/jobs/{job_id}/locales/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters.jobId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: JobLocaleUpdateParametersToJSON(requestParameters.jobLocaleUpdateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => JobLocaleFromJSON(jsonValue));
    }

    /**
     * Update an existing job locale.
     * Update a job locale
     */
    async jobLocaleUpdate(requestParameters: JobLocaleUpdateRequest): Promise<JobLocale> {
        const response = await this.jobLocaleUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new job locale.
     * Create a job locale
     */
    async jobLocalesCreateRaw(requestParameters: JobLocalesCreateRequest): Promise<runtime.ApiResponse<JobLocale>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling jobLocalesCreate.');
        }

        if (requestParameters.jobId === null || requestParameters.jobId === undefined) {
            throw new runtime.RequiredError('jobId','Required parameter requestParameters.jobId was null or undefined when calling jobLocalesCreate.');
        }

        if (requestParameters.jobLocalesCreateParameters === null || requestParameters.jobLocalesCreateParameters === undefined) {
            throw new runtime.RequiredError('jobLocalesCreateParameters','Required parameter requestParameters.jobLocalesCreateParameters was null or undefined when calling jobLocalesCreate.');
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
            path: `/projects/{project_id}/jobs/{job_id}/locales`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters.jobId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: JobLocalesCreateParametersToJSON(requestParameters.jobLocalesCreateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => JobLocaleFromJSON(jsonValue));
    }

    /**
     * Create a new job locale.
     * Create a job locale
     */
    async jobLocalesCreate(requestParameters: JobLocalesCreateRequest): Promise<JobLocale> {
        const response = await this.jobLocalesCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all job locales for a given job.
     * List job locales
     */
    async jobLocalesListRaw(requestParameters: JobLocalesListRequest): Promise<runtime.ApiResponse<Array<JobLocale>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling jobLocalesList.');
        }

        if (requestParameters.jobId === null || requestParameters.jobId === undefined) {
            throw new runtime.RequiredError('jobId','Required parameter requestParameters.jobId was null or undefined when calling jobLocalesList.');
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
            path: `/projects/{project_id}/jobs/{job_id}/locales`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters.jobId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(JobLocaleFromJSON));
    }

    /**
     * List all job locales for a given job.
     * List job locales
     */
    async jobLocalesList(requestParameters: JobLocalesListRequest): Promise<Array<JobLocale>> {
        const response = await this.jobLocalesListRaw(requestParameters);
        return await response.value();
    }

}
