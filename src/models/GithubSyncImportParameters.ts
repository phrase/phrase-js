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
 * @interface GithubSyncImportParameters
 */
export interface GithubSyncImportParameters {
    /**
     * Project ID to specify the actual project the GitHub import should be triggered in.
     * @type {string}
     * @memberof GithubSyncImportParameters
     */
    projectId?: string;
}

export function GithubSyncImportParametersFromJSON(json: any): GithubSyncImportParameters {
    return GithubSyncImportParametersFromJSONTyped(json, false);
}

export function GithubSyncImportParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): GithubSyncImportParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projectId': !exists(json, 'project_id') ? undefined : json['project_id'],
    };
}

export function GithubSyncImportParametersToJSON(value?: GithubSyncImportParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project_id': value.projectId,
    };
}


