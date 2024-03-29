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
 * @interface GitlabSyncImportParameters
 */
export interface GitlabSyncImportParameters {
    /**
     * Account ID to specify the actual account the GitLab Sync should be created in. Required if the requesting user is a member of multiple accounts.
     * @type {string}
     * @memberof GitlabSyncImportParameters
     */
    accountId?: string;
}

export function GitlabSyncImportParametersFromJSON(json: any): GitlabSyncImportParameters {
    return GitlabSyncImportParametersFromJSONTyped(json, false);
}

export function GitlabSyncImportParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): GitlabSyncImportParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
    };
}

export function GitlabSyncImportParametersToJSON(value?: GitlabSyncImportParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
    };
}


