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
    ProjectLocales,
    ProjectLocalesFromJSON,
    ProjectLocalesFromJSONTyped,
    ProjectLocalesToJSON,
} from './';

/**
 * 
 * @export
 * @interface Member
 */
export interface Member {
    /**
     * 
     * @type {string}
     * @memberof Member
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Member
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof Member
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof Member
     */
    role?: string;
    /**
     * 
     * @type {Array<ProjectLocales>}
     * @memberof Member
     */
    projects?: Array<ProjectLocales>;
}

export function MemberFromJSON(json: any): Member {
    return MemberFromJSONTyped(json, false);
}

export function MemberFromJSONTyped(json: any, ignoreDiscriminator: boolean): Member {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'projects': !exists(json, 'projects') ? undefined : ((json['projects'] as Array<any>).map(ProjectLocalesFromJSON)),
    };
}

export function MemberToJSON(value?: Member | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'email': value.email,
        'username': value.username,
        'role': value.role,
        'projects': value.projects === undefined ? undefined : ((value.projects as Array<any>).map(ProjectLocalesToJSON)),
    };
}


