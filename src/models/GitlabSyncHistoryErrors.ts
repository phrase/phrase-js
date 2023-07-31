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
 * @interface GitlabSyncHistoryErrors
 */
export interface GitlabSyncHistoryErrors {
    /**
     * 
     * @type {string}
     * @memberof GitlabSyncHistoryErrors
     */
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof GitlabSyncHistoryErrors
     */
    message?: string;
}

export function GitlabSyncHistoryErrorsFromJSON(json: any): GitlabSyncHistoryErrors {
    return GitlabSyncHistoryErrorsFromJSONTyped(json, false);
}

export function GitlabSyncHistoryErrorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GitlabSyncHistoryErrors {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function GitlabSyncHistoryErrorsToJSON(value?: GitlabSyncHistoryErrors | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
        'message': value.message,
    };
}


