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
 * @interface BitbucketSyncExportParameters
 */
export interface BitbucketSyncExportParameters {
    /**
     * Account ID to specify the actual account the project should be created in. Required if the requesting user is a member of multiple accounts.
     * @type {string}
     * @memberof BitbucketSyncExportParameters
     */
    accountId?: string;
}

export function BitbucketSyncExportParametersFromJSON(json: any): BitbucketSyncExportParameters {
    return BitbucketSyncExportParametersFromJSONTyped(json, false);
}

export function BitbucketSyncExportParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): BitbucketSyncExportParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
    };
}

export function BitbucketSyncExportParametersToJSON(value?: BitbucketSyncExportParameters | null): any {
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


