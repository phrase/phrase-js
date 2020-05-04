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
 * @interface JobCreateParameters
 */
export interface JobCreateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof JobCreateParameters
     */
    branch?: string;
    /**
     * Job name
     * @type {string}
     * @memberof JobCreateParameters
     */
    name?: string;
    /**
     * Briefing for the translators
     * @type {string}
     * @memberof JobCreateParameters
     */
    briefing?: string;
    /**
     * Date the job should be finished
     * @type {Date}
     * @memberof JobCreateParameters
     */
    dueDate?: Date;
    /**
     * tags of keys that should be included within the job
     * @type {Array<string>}
     * @memberof JobCreateParameters
     */
    tags?: Array<string>;
    /**
     * ids of keys that should be included within the job
     * @type {Array<string>}
     * @memberof JobCreateParameters
     */
    translationKeyIds?: Array<string>;
}

export function JobCreateParametersFromJSON(json: any): JobCreateParameters {
    return JobCreateParametersFromJSONTyped(json, false);
}

export function JobCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobCreateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'briefing': !exists(json, 'briefing') ? undefined : json['briefing'],
        'dueDate': !exists(json, 'due_date') ? undefined : (new Date(json['due_date'])),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'translationKeyIds': !exists(json, 'translation_key_ids') ? undefined : json['translation_key_ids'],
    };
}

export function JobCreateParametersToJSON(value?: JobCreateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branch': value.branch,
        'name': value.name,
        'briefing': value.briefing,
        'due_date': value.dueDate === undefined ? undefined : (value.dueDate.toISOString()),
        'tags': value.tags,
        'translation_key_ids': value.translationKeyIds,
    };
}


