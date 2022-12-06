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
    GitlabSync,
    GitlabSyncFromJSON,
    GitlabSyncToJSON,
    GitlabSyncExport,
    GitlabSyncExportFromJSON,
    GitlabSyncExportToJSON,
    GitlabSyncExportParameters,
    GitlabSyncExportParametersFromJSON,
    GitlabSyncExportParametersToJSON,
    GitlabSyncHistory,
    GitlabSyncHistoryFromJSON,
    GitlabSyncHistoryToJSON,
    GitlabSyncImportParameters,
    GitlabSyncImportParametersFromJSON,
    GitlabSyncImportParametersToJSON,
    Upload,
    UploadFromJSON,
    UploadToJSON,
} from '../models';

export interface GitlabSyncDeleteRequest {
    id: string;
    xPhraseAppOTP?: string;
    accountId?: string;
}

export interface GitlabSyncExportRequest {
    gitlabSyncId: string;
    gitlabSyncExportParameters: GitlabSyncExportParameters;
    xPhraseAppOTP?: string;
}

export interface GitlabSyncHistoryRequest {
    gitlabSyncId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
    accountId?: string;
}

export interface GitlabSyncImportRequest {
    gitlabSyncId: string;
    gitlabSyncImportParameters: GitlabSyncImportParameters;
    xPhraseAppOTP?: string;
}

export interface GitlabSyncListRequest {
    xPhraseAppOTP?: string;
    accountId?: string;
}

export interface GitlabSyncShowRequest {
    id: string;
    xPhraseAppOTP?: string;
    accountId?: string;
}

export interface GitlabSyncUpdateRequest {
    id: string;
    xPhraseAppOTP?: string;
    accountId?: string;
    phraseProjectCode?: string;
    gitlabProjectId?: number;
    gitlabBranchName?: string;
}

/**
 * 
 */
export class GitLabSyncApi extends runtime.BaseAPI {

    /**
     * Deletes a single GitLab Sync Setting.
     * Delete single Sync Setting
     */
    async gitlabSyncDeleteRaw(requestParameters: GitlabSyncDeleteRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gitlabSyncDelete.');
        }

        const queryParameters: any = {};

        if (requestParameters.accountId !== undefined) {
            queryParameters['account_id'] = requestParameters.accountId;
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
            path: `/gitlab_syncs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Deletes a single GitLab Sync Setting.
     * Delete single Sync Setting
     */
    async gitlabSyncDelete(requestParameters: GitlabSyncDeleteRequest): Promise<any> {
        const response = await this.gitlabSyncDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Export translations from Phrase Strings to GitLab according to the .phraseapp.yml file within the GitLab repository. <br><br><i>Note: Export is done asynchronously and may take several seconds depending on the project size.</i>
     * Export from Phrase Strings to GitLab
     */
    async gitlabSyncExportRaw(requestParameters: GitlabSyncExportRequest): Promise<runtime.ApiResponse<GitlabSyncExport>> {
        if (requestParameters.gitlabSyncId === null || requestParameters.gitlabSyncId === undefined) {
            throw new runtime.RequiredError('gitlabSyncId','Required parameter requestParameters.gitlabSyncId was null or undefined when calling gitlabSyncExport.');
        }

        if (requestParameters.gitlabSyncExportParameters === null || requestParameters.gitlabSyncExportParameters === undefined) {
            throw new runtime.RequiredError('gitlabSyncExportParameters','Required parameter requestParameters.gitlabSyncExportParameters was null or undefined when calling gitlabSyncExport.');
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
            path: `/gitlab_syncs/{gitlab_sync_id}/export`.replace(`{${"gitlab_sync_id"}}`, encodeURIComponent(String(requestParameters.gitlabSyncId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GitlabSyncExportParametersToJSON(requestParameters.gitlabSyncExportParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GitlabSyncExportFromJSON(jsonValue));
    }

    /**
     * Export translations from Phrase Strings to GitLab according to the .phraseapp.yml file within the GitLab repository. <br><br><i>Note: Export is done asynchronously and may take several seconds depending on the project size.</i>
     * Export from Phrase Strings to GitLab
     */
    async gitlabSyncExport(requestParameters: GitlabSyncExportRequest): Promise<GitlabSyncExport> {
        const response = await this.gitlabSyncExportRaw(requestParameters);
        return await response.value();
    }

    /**
     * List history for a single Sync Setting.
     * History of single Sync Setting
     */
    async gitlabSyncHistoryRaw(requestParameters: GitlabSyncHistoryRequest): Promise<runtime.ApiResponse<Array<GitlabSyncHistory>>> {
        if (requestParameters.gitlabSyncId === null || requestParameters.gitlabSyncId === undefined) {
            throw new runtime.RequiredError('gitlabSyncId','Required parameter requestParameters.gitlabSyncId was null or undefined when calling gitlabSyncHistory.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.accountId !== undefined) {
            queryParameters['account_id'] = requestParameters.accountId;
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
            path: `/gitlab_syncs/{gitlab_sync_id}/history`.replace(`{${"gitlab_sync_id"}}`, encodeURIComponent(String(requestParameters.gitlabSyncId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GitlabSyncHistoryFromJSON));
    }

    /**
     * List history for a single Sync Setting.
     * History of single Sync Setting
     */
    async gitlabSyncHistory(requestParameters: GitlabSyncHistoryRequest): Promise<Array<GitlabSyncHistory>> {
        const response = await this.gitlabSyncHistoryRaw(requestParameters);
        return await response.value();
    }

    /**
     * Import translations from GitLab to Phrase Strings according to the .phraseapp.yml file within the GitLab repository. <br><br><i>Note: Import is done asynchronously and may take several seconds depending on the project size.</i>
     * Import from GitLab to Phrase
     */
    async gitlabSyncImportRaw(requestParameters: GitlabSyncImportRequest): Promise<runtime.ApiResponse<Array<Upload>>> {
        if (requestParameters.gitlabSyncId === null || requestParameters.gitlabSyncId === undefined) {
            throw new runtime.RequiredError('gitlabSyncId','Required parameter requestParameters.gitlabSyncId was null or undefined when calling gitlabSyncImport.');
        }

        if (requestParameters.gitlabSyncImportParameters === null || requestParameters.gitlabSyncImportParameters === undefined) {
            throw new runtime.RequiredError('gitlabSyncImportParameters','Required parameter requestParameters.gitlabSyncImportParameters was null or undefined when calling gitlabSyncImport.');
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
            path: `/gitlab_syncs/{gitlab_sync_id}/import`.replace(`{${"gitlab_sync_id"}}`, encodeURIComponent(String(requestParameters.gitlabSyncId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GitlabSyncImportParametersToJSON(requestParameters.gitlabSyncImportParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UploadFromJSON));
    }

    /**
     * Import translations from GitLab to Phrase Strings according to the .phraseapp.yml file within the GitLab repository. <br><br><i>Note: Import is done asynchronously and may take several seconds depending on the project size.</i>
     * Import from GitLab to Phrase
     */
    async gitlabSyncImport(requestParameters: GitlabSyncImportRequest): Promise<Array<Upload>> {
        const response = await this.gitlabSyncImportRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all GitLab Sync Settings for which synchronisation with Phrase Strings and GitLab is activated.
     * List GitLab syncs
     */
    async gitlabSyncListRaw(requestParameters: GitlabSyncListRequest): Promise<runtime.ApiResponse<Array<GitlabSync>>> {
        const queryParameters: any = {};

        if (requestParameters.accountId !== undefined) {
            queryParameters['account_id'] = requestParameters.accountId;
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
            path: `/gitlab_syncs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GitlabSyncFromJSON));
    }

    /**
     * List all GitLab Sync Settings for which synchronisation with Phrase Strings and GitLab is activated.
     * List GitLab syncs
     */
    async gitlabSyncList(requestParameters: GitlabSyncListRequest): Promise<Array<GitlabSync>> {
        const response = await this.gitlabSyncListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Shows a single GitLab Sync Setting.
     * Get single Sync Setting
     */
    async gitlabSyncShowRaw(requestParameters: GitlabSyncShowRequest): Promise<runtime.ApiResponse<GitlabSync>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gitlabSyncShow.');
        }

        const queryParameters: any = {};

        if (requestParameters.accountId !== undefined) {
            queryParameters['account_id'] = requestParameters.accountId;
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
            path: `/gitlab_syncs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GitlabSyncFromJSON(jsonValue));
    }

    /**
     * Shows a single GitLab Sync Setting.
     * Get single Sync Setting
     */
    async gitlabSyncShow(requestParameters: GitlabSyncShowRequest): Promise<GitlabSync> {
        const response = await this.gitlabSyncShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates a single GitLab Sync Setting.
     * Update single Sync Setting
     */
    async gitlabSyncUpdateRaw(requestParameters: GitlabSyncUpdateRequest): Promise<runtime.ApiResponse<GitlabSync>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gitlabSyncUpdate.');
        }

        const queryParameters: any = {};

        if (requestParameters.accountId !== undefined) {
            queryParameters['account_id'] = requestParameters.accountId;
        }

        if (requestParameters.phraseProjectCode !== undefined) {
            queryParameters['phrase_project_code'] = requestParameters.phraseProjectCode;
        }

        if (requestParameters.gitlabProjectId !== undefined) {
            queryParameters['gitlab_project_id'] = requestParameters.gitlabProjectId;
        }

        if (requestParameters.gitlabBranchName !== undefined) {
            queryParameters['gitlab_branch_name'] = requestParameters.gitlabBranchName;
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
            path: `/gitlab_syncs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GitlabSyncFromJSON(jsonValue));
    }

    /**
     * Updates a single GitLab Sync Setting.
     * Update single Sync Setting
     */
    async gitlabSyncUpdate(requestParameters: GitlabSyncUpdateRequest): Promise<GitlabSync> {
        const response = await this.gitlabSyncUpdateRaw(requestParameters);
        return await response.value();
    }

}
