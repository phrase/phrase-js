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
 * @interface JobTemplateCreateParameters
 */
export interface JobTemplateCreateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof JobTemplateCreateParameters
     */
    branch?: string;
    /**
     * Job template name
     * @type {string}
     * @memberof JobTemplateCreateParameters
     */
    name: string;
    /**
     * Briefing for the translators
     * @type {string}
     * @memberof JobTemplateCreateParameters
     */
    briefing?: string;
}

export function JobTemplateCreateParametersFromJSON(json: any): JobTemplateCreateParameters {
    return JobTemplateCreateParametersFromJSONTyped(json, false);
}

export function JobTemplateCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobTemplateCreateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'name': json['name'],
        'briefing': !exists(json, 'briefing') ? undefined : json['briefing'],
    };
}

export function JobTemplateCreateParametersToJSON(value?: JobTemplateCreateParameters | null): any {
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
    };
}


