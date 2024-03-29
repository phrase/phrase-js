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
 * @interface BitbucketSyncExportResponse
 */
export interface BitbucketSyncExportResponse {
    /**
     * 
     * @type {string}
     * @memberof BitbucketSyncExportResponse
     */
    statusPath?: string;
}

export function BitbucketSyncExportResponseFromJSON(json: any): BitbucketSyncExportResponse {
    return BitbucketSyncExportResponseFromJSONTyped(json, false);
}

export function BitbucketSyncExportResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BitbucketSyncExportResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusPath': !exists(json, 'status_path') ? undefined : json['status_path'],
    };
}

export function BitbucketSyncExportResponseToJSON(value?: BitbucketSyncExportResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status_path': value.statusPath,
    };
}


