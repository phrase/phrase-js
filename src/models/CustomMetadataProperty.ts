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
import {
    CustomMetadataDataType,
    CustomMetadataDataTypeFromJSON,
    CustomMetadataDataTypeFromJSONTyped,
    CustomMetadataDataTypeToJSON,
    ProjectShort,
    ProjectShortFromJSON,
    ProjectShortFromJSONTyped,
    ProjectShortToJSON,
    UserPreview,
    UserPreviewFromJSON,
    UserPreviewFromJSONTyped,
    UserPreviewToJSON,
} from './';

/**
 * 
 * @export
 * @interface CustomMetadataProperty
 */
export interface CustomMetadataProperty {
    /**
     * 
     * @type {string}
     * @memberof CustomMetadataProperty
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomMetadataProperty
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomMetadataProperty
     */
    description?: string;
    /**
     * 
     * @type {CustomMetadataDataType}
     * @memberof CustomMetadataProperty
     */
    dataType?: CustomMetadataDataType;
    /**
     * 
     * @type {UserPreview}
     * @memberof CustomMetadataProperty
     */
    user?: UserPreview;
    /**
     * 
     * @type {Array<ProjectShort>}
     * @memberof CustomMetadataProperty
     */
    projects?: Array<ProjectShort>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CustomMetadataProperty
     */
    valueOptions?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof CustomMetadataProperty
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CustomMetadataProperty
     */
    updatedAt?: Date;
}

export function CustomMetadataPropertyFromJSON(json: any): CustomMetadataProperty {
    return CustomMetadataPropertyFromJSONTyped(json, false);
}

export function CustomMetadataPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomMetadataProperty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'dataType': !exists(json, 'data_type') ? undefined : CustomMetadataDataTypeFromJSON(json['data_type']),
        'user': !exists(json, 'user') ? undefined : UserPreviewFromJSON(json['user']),
        'projects': !exists(json, 'projects') ? undefined : ((json['projects'] as Array<any>).map(ProjectShortFromJSON)),
        'valueOptions': !exists(json, 'value_options') ? undefined : json['value_options'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function CustomMetadataPropertyToJSON(value?: CustomMetadataProperty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'data_type': CustomMetadataDataTypeToJSON(value.dataType),
        'user': UserPreviewToJSON(value.user),
        'projects': value.projects === undefined ? undefined : ((value.projects as Array<any>).map(ProjectShortToJSON)),
        'value_options': value.valueOptions,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}


