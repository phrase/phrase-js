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
    Locale,
    LocaleFromJSON,
    LocaleToJSON,
    LocaleCreateParameters,
    LocaleCreateParametersFromJSON,
    LocaleCreateParametersToJSON,
    LocaleDetails,
    LocaleDetailsFromJSON,
    LocaleDetailsToJSON,
    LocalePreview1,
    LocalePreview1FromJSON,
    LocalePreview1ToJSON,
    LocaleUpdateParameters,
    LocaleUpdateParametersFromJSON,
    LocaleUpdateParametersToJSON,
} from '../models';

export interface AccountLocalesRequest {
    id: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}

export interface LocaleCreateRequest {
    projectId: string;
    localeCreateParameters: LocaleCreateParameters;
    xPhraseAppOTP?: string;
}

export interface LocaleDeleteRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface LocaleDownloadRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    branch?: string;
    fileFormat?: string;
    tags?: string;
    tag?: string;
    includeEmptyTranslations?: boolean;
    excludeEmptyZeroForms?: boolean;
    includeTranslatedKeys?: boolean;
    keepNotranslateTags?: boolean;
    convertEmoji?: boolean;
    formatOptions?: object;
    encoding?: string;
    skipUnverifiedTranslations?: boolean;
    includeUnverifiedTranslations?: boolean;
    useLastReviewedVersion?: boolean;
    fallbackLocaleId?: string;
    sourceLocaleId?: string;
    translationKeyPrefix?: string;
    filterByPrefix?: boolean;
    customMetadataFilters?: object;
    localeIds?: Array<string>;
}

export interface LocaleShowRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface LocaleUpdateRequest {
    projectId: string;
    id: string;
    localeUpdateParameters: LocaleUpdateParameters;
    xPhraseAppOTP?: string;
}

export interface LocalesListRequest {
    projectId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
    sortBy?: string;
    branch?: string;
}

/**
 * 
 */
export class LocalesApi extends runtime.BaseAPI {

    /**
     * List all locales unique by locale code used across all projects within an account.
     * List locales used in account
     */
    async accountLocalesRaw(requestParameters: AccountLocalesRequest): Promise<runtime.ApiResponse<Array<LocalePreview1>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling accountLocales.');
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
            path: `/accounts/{id}/locales`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LocalePreview1FromJSON));
    }

    /**
     * List all locales unique by locale code used across all projects within an account.
     * List locales used in account
     */
    async accountLocales(requestParameters: AccountLocalesRequest): Promise<Array<LocalePreview1>> {
        const response = await this.accountLocalesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new locale.
     * Create a locale
     */
    async localeCreateRaw(requestParameters: LocaleCreateRequest): Promise<runtime.ApiResponse<LocaleDetails>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling localeCreate.');
        }

        if (requestParameters.localeCreateParameters === null || requestParameters.localeCreateParameters === undefined) {
            throw new runtime.RequiredError('localeCreateParameters','Required parameter requestParameters.localeCreateParameters was null or undefined when calling localeCreate.');
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
            path: `/projects/{project_id}/locales`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LocaleCreateParametersToJSON(requestParameters.localeCreateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LocaleDetailsFromJSON(jsonValue));
    }

    /**
     * Create a new locale.
     * Create a locale
     */
    async localeCreate(requestParameters: LocaleCreateRequest): Promise<LocaleDetails> {
        const response = await this.localeCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing locale.
     * Delete a locale
     */
    async localeDeleteRaw(requestParameters: LocaleDeleteRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling localeDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling localeDelete.');
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
            path: `/projects/{project_id}/locales/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete an existing locale.
     * Delete a locale
     */
    async localeDelete(requestParameters: LocaleDeleteRequest): Promise<any> {
        const response = await this.localeDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Download a locale in a specific file format.
     * Download a locale
     */
    async localeDownloadRaw(requestParameters: LocaleDownloadRequest): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling localeDownload.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling localeDownload.');
        }

        const queryParameters: any = {};

        if (requestParameters.branch !== undefined) {
            queryParameters['branch'] = requestParameters.branch;
        }

        if (requestParameters.fileFormat !== undefined) {
            queryParameters['file_format'] = requestParameters.fileFormat;
        }

        if (requestParameters.tags !== undefined) {
            queryParameters['tags'] = requestParameters.tags;
        }

        if (requestParameters.tag !== undefined) {
            queryParameters['tag'] = requestParameters.tag;
        }

        if (requestParameters.includeEmptyTranslations !== undefined) {
            queryParameters['include_empty_translations'] = requestParameters.includeEmptyTranslations;
        }

        if (requestParameters.excludeEmptyZeroForms !== undefined) {
            queryParameters['exclude_empty_zero_forms'] = requestParameters.excludeEmptyZeroForms;
        }

        if (requestParameters.includeTranslatedKeys !== undefined) {
            queryParameters['include_translated_keys'] = requestParameters.includeTranslatedKeys;
        }

        if (requestParameters.keepNotranslateTags !== undefined) {
            queryParameters['keep_notranslate_tags'] = requestParameters.keepNotranslateTags;
        }

        if (requestParameters.convertEmoji !== undefined) {
            queryParameters['convert_emoji'] = requestParameters.convertEmoji;
        }

        if (requestParameters.formatOptions !== undefined) {
            queryParameters['format_options'] = requestParameters.formatOptions;
        }

        if (requestParameters.encoding !== undefined) {
            queryParameters['encoding'] = requestParameters.encoding;
        }

        if (requestParameters.skipUnverifiedTranslations !== undefined) {
            queryParameters['skip_unverified_translations'] = requestParameters.skipUnverifiedTranslations;
        }

        if (requestParameters.includeUnverifiedTranslations !== undefined) {
            queryParameters['include_unverified_translations'] = requestParameters.includeUnverifiedTranslations;
        }

        if (requestParameters.useLastReviewedVersion !== undefined) {
            queryParameters['use_last_reviewed_version'] = requestParameters.useLastReviewedVersion;
        }

        if (requestParameters.fallbackLocaleId !== undefined) {
            queryParameters['fallback_locale_id'] = requestParameters.fallbackLocaleId;
        }

        if (requestParameters.sourceLocaleId !== undefined) {
            queryParameters['source_locale_id'] = requestParameters.sourceLocaleId;
        }

        if (requestParameters.translationKeyPrefix !== undefined) {
            queryParameters['translation_key_prefix'] = requestParameters.translationKeyPrefix;
        }

        if (requestParameters.filterByPrefix !== undefined) {
            queryParameters['filter_by_prefix'] = requestParameters.filterByPrefix;
        }

        if (requestParameters.customMetadataFilters !== undefined) {
            queryParameters['custom_metadata_filters'] = requestParameters.customMetadataFilters;
        }

        if (requestParameters.localeIds) {
            queryParameters['locale_ids'] = requestParameters.localeIds;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPhraseAppOTP !== undefined && requestParameters.xPhraseAppOTP !== null) {
            headerParameters['X-PhraseApp-OTP'] = String(requestParameters.xPhraseAppOTP);
        }

        if (requestParameters.ifModifiedSince !== undefined && requestParameters.ifModifiedSince !== null) {
            headerParameters['If-Modified-Since'] = String(requestParameters.ifModifiedSince);
        }

        if (requestParameters.ifNoneMatch !== undefined && requestParameters.ifNoneMatch !== null) {
            headerParameters['If-None-Match'] = String(requestParameters.ifNoneMatch);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Token authentication
        }

        const response = await this.request({
            path: `/projects/{project_id}/locales/{id}/download`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Download a locale in a specific file format.
     * Download a locale
     */
    async localeDownload(requestParameters: LocaleDownloadRequest): Promise<Blob> {
        const response = await this.localeDownloadRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details on a single locale for a given project.
     * Get a single locale
     */
    async localeShowRaw(requestParameters: LocaleShowRequest): Promise<runtime.ApiResponse<LocaleDetails>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling localeShow.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling localeShow.');
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
            path: `/projects/{project_id}/locales/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LocaleDetailsFromJSON(jsonValue));
    }

    /**
     * Get details on a single locale for a given project.
     * Get a single locale
     */
    async localeShow(requestParameters: LocaleShowRequest): Promise<LocaleDetails> {
        const response = await this.localeShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an existing locale.
     * Update a locale
     */
    async localeUpdateRaw(requestParameters: LocaleUpdateRequest): Promise<runtime.ApiResponse<LocaleDetails>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling localeUpdate.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling localeUpdate.');
        }

        if (requestParameters.localeUpdateParameters === null || requestParameters.localeUpdateParameters === undefined) {
            throw new runtime.RequiredError('localeUpdateParameters','Required parameter requestParameters.localeUpdateParameters was null or undefined when calling localeUpdate.');
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
            path: `/projects/{project_id}/locales/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: LocaleUpdateParametersToJSON(requestParameters.localeUpdateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LocaleDetailsFromJSON(jsonValue));
    }

    /**
     * Update an existing locale.
     * Update a locale
     */
    async localeUpdate(requestParameters: LocaleUpdateRequest): Promise<LocaleDetails> {
        const response = await this.localeUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all locales for the given project.
     * List locales
     */
    async localesListRaw(requestParameters: LocalesListRequest): Promise<runtime.ApiResponse<Array<Locale>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling localesList.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sort_by'] = requestParameters.sortBy;
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
            path: `/projects/{project_id}/locales`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LocaleFromJSON));
    }

    /**
     * List all locales for the given project.
     * List locales
     */
    async localesList(requestParameters: LocalesListRequest): Promise<Array<Locale>> {
        const response = await this.localesListRaw(requestParameters);
        return await response.value();
    }

}
