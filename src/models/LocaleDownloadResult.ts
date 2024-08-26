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
 * 
 * @export
 * @interface LocaleDownloadResult
 */
export interface LocaleDownloadResult {
    /**
     * The URL to the download file. This URL is valid for 15 minutes. 
     * @type {string}
     * @memberof LocaleDownloadResult
     */
    url?: string;
}

export function LocaleDownloadResultFromJSON(json: any): LocaleDownloadResult {
    return LocaleDownloadResultFromJSONTyped(json, false);
}

export function LocaleDownloadResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocaleDownloadResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function LocaleDownloadResultToJSON(value?: LocaleDownloadResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
    };
}

