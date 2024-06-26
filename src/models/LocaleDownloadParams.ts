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

import { exists, mapValues } from '../runtime';
/**
 * The parameters of the download request. 
 * @export
 * @interface LocaleDownloadParams
 */
export interface LocaleDownloadParams {
    /**
     * 
     * @type {string}
     * @memberof LocaleDownloadParams
     */
    fileFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof LocaleDownloadParams
     */
    localeId?: string;
    /**
     * 
     * @type {string}
     * @memberof LocaleDownloadParams
     */
    tags?: string;
    /**
     * 
     * @type {string}
     * @memberof LocaleDownloadParams
     */
    branch?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocaleDownloadParams
     */
    includeEmptyTranslations?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocaleDownloadParams
     */
    includeTranslatedKeys?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocaleDownloadParams
     */
    includeUnverifiedTranslations?: boolean;
}

export function LocaleDownloadParamsFromJSON(json: any): LocaleDownloadParams {
    return LocaleDownloadParamsFromJSONTyped(json, false);
}

export function LocaleDownloadParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocaleDownloadParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fileFormat': !exists(json, 'file_format') ? undefined : json['file_format'],
        'localeId': !exists(json, 'locale_id') ? undefined : json['locale_id'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'includeEmptyTranslations': !exists(json, 'include_empty_translations') ? undefined : json['include_empty_translations'],
        'includeTranslatedKeys': !exists(json, 'include_translated_keys') ? undefined : json['include_translated_keys'],
        'includeUnverifiedTranslations': !exists(json, 'include_unverified_translations') ? undefined : json['include_unverified_translations'],
    };
}

export function LocaleDownloadParamsToJSON(value?: LocaleDownloadParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'file_format': value.fileFormat,
        'locale_id': value.localeId,
        'tags': value.tags,
        'branch': value.branch,
        'include_empty_translations': value.includeEmptyTranslations,
        'include_translated_keys': value.includeTranslatedKeys,
        'include_unverified_translations': value.includeUnverifiedTranslations,
    };
}


