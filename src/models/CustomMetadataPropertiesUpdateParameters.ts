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
 * @interface CustomMetadataPropertiesUpdateParameters
 */
export interface CustomMetadataPropertiesUpdateParameters {
    /**
     * name of the property
     * @type {string}
     * @memberof CustomMetadataPropertiesUpdateParameters
     */
    name?: string;
    /**
     * ids of projects that the property belongs to
     * @type {Array<string>}
     * @memberof CustomMetadataPropertiesUpdateParameters
     */
    projectIds?: Array<string>;
    /**
     * description of property
     * @type {string}
     * @memberof CustomMetadataPropertiesUpdateParameters
     */
    description?: string;
    /**
     * value options of property (only applies to single or multi select properties)
     * @type {Array<string>}
     * @memberof CustomMetadataPropertiesUpdateParameters
     */
    valueOptions?: Array<string>;
}

export function CustomMetadataPropertiesUpdateParametersFromJSON(json: any): CustomMetadataPropertiesUpdateParameters {
    return CustomMetadataPropertiesUpdateParametersFromJSONTyped(json, false);
}

export function CustomMetadataPropertiesUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomMetadataPropertiesUpdateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'projectIds': !exists(json, 'project_ids') ? undefined : json['project_ids'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'valueOptions': !exists(json, 'value_options') ? undefined : json['value_options'],
    };
}

export function CustomMetadataPropertiesUpdateParametersToJSON(value?: CustomMetadataPropertiesUpdateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'project_ids': value.projectIds,
        'description': value.description,
        'value_options': value.valueOptions,
    };
}

