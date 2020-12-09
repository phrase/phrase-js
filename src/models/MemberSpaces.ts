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
import {
    AnyType,
    AnyTypeFromJSON,
    AnyTypeFromJSONTyped,
    AnyTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface MemberSpaces
 */
export interface MemberSpaces {
    /**
     * 
     * @type {string}
     * @memberof MemberSpaces
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof MemberSpaces
     */
    name?: string;
    /**
     * 
     * @type {AnyType}
     * @memberof MemberSpaces
     */
    createdAt?: AnyType;
    /**
     * 
     * @type {AnyType}
     * @memberof MemberSpaces
     */
    updatedAt?: AnyType;
    /**
     * 
     * @type {number}
     * @memberof MemberSpaces
     */
    projectsCount?: number;
}

export function MemberSpacesFromJSON(json: any): MemberSpaces {
    return MemberSpacesFromJSONTyped(json, false);
}

export function MemberSpacesFromJSONTyped(json: any, ignoreDiscriminator: boolean): MemberSpaces {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'createdAt': !exists(json, 'created_at') ? undefined : AnyTypeFromJSON(json['created_at']),
        'updatedAt': !exists(json, 'updated_at') ? undefined : AnyTypeFromJSON(json['updated_at']),
        'projectsCount': !exists(json, 'projects_count') ? undefined : json['projects_count'],
    };
}

export function MemberSpacesToJSON(value?: MemberSpaces | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'created_at': AnyTypeToJSON(value.createdAt),
        'updated_at': AnyTypeToJSON(value.updatedAt),
        'projects_count': value.projectsCount,
    };
}


