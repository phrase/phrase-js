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
    Project,
    ProjectFromJSON,
    ProjectFromJSONTyped,
    ProjectToJSON,
    Space,
    SpaceFromJSON,
    SpaceFromJSONTyped,
    SpaceToJSON,
    UserPreview,
    UserPreviewFromJSON,
    UserPreviewFromJSONTyped,
    UserPreviewToJSON,
} from './';

/**
 * 
 * @export
 * @interface Team
 */
export interface Team {
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    name?: string;
    /**
     * 
     * @type {Date}
     * @memberof Team
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Team
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Array<Project>}
     * @memberof Team
     */
    projects?: Array<Project>;
    /**
     * 
     * @type {Array<Space>}
     * @memberof Team
     */
    spaces?: Array<Space>;
    /**
     * 
     * @type {Array<UserPreview>}
     * @memberof Team
     */
    users?: Array<UserPreview>;
}

export function TeamFromJSON(json: any): Team {
    return TeamFromJSONTyped(json, false);
}

export function TeamFromJSONTyped(json: any, ignoreDiscriminator: boolean): Team {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'projects': !exists(json, 'projects') ? undefined : ((json['projects'] as Array<any>).map(ProjectFromJSON)),
        'spaces': !exists(json, 'spaces') ? undefined : ((json['spaces'] as Array<any>).map(SpaceFromJSON)),
        'users': !exists(json, 'users') ? undefined : ((json['users'] as Array<any>).map(UserPreviewFromJSON)),
    };
}

export function TeamToJSON(value?: Team | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'projects': value.projects === undefined ? undefined : ((value.projects as Array<any>).map(ProjectToJSON)),
        'spaces': value.spaces === undefined ? undefined : ((value.spaces as Array<any>).map(SpaceToJSON)),
        'users': value.users === undefined ? undefined : ((value.users as Array<any>).map(UserPreviewToJSON)),
    };
}


