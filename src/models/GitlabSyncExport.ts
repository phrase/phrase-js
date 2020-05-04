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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GitlabSyncExport
 */
export interface GitlabSyncExport {
    /**
     * 
     * @type {number}
     * @memberof GitlabSyncExport
     */
    mergeRequestId?: number;
    /**
     * 
     * @type {string}
     * @memberof GitlabSyncExport
     */
    mergeRequestWebUrl?: string;
}

export function GitlabSyncExportFromJSON(json: any): GitlabSyncExport {
    return GitlabSyncExportFromJSONTyped(json, false);
}

export function GitlabSyncExportFromJSONTyped(json: any, ignoreDiscriminator: boolean): GitlabSyncExport {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mergeRequestId': !exists(json, 'merge_request_id') ? undefined : json['merge_request_id'],
        'mergeRequestWebUrl': !exists(json, 'merge_request_web_url') ? undefined : json['merge_request_web_url'],
    };
}

export function GitlabSyncExportToJSON(value?: GitlabSyncExport | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'merge_request_id': value.mergeRequestId,
        'merge_request_web_url': value.mergeRequestWebUrl,
    };
}


