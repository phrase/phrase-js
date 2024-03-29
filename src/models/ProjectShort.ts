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
 * @interface ProjectShort
 */
export interface ProjectShort {
    /**
     * 
     * @type {string}
     * @memberof ProjectShort
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectShort
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectShort
     */
    mainFormat?: string;
    /**
     * 
     * @type {Date}
     * @memberof ProjectShort
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ProjectShort
     */
    updatedAt?: Date;
}

export function ProjectShortFromJSON(json: any): ProjectShort {
    return ProjectShortFromJSONTyped(json, false);
}

export function ProjectShortFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectShort {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'mainFormat': !exists(json, 'main_format') ? undefined : json['main_format'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function ProjectShortToJSON(value?: ProjectShort | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'main_format': value.mainFormat,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}


