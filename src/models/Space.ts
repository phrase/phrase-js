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
    Project,
    ProjectFromJSON,
    ProjectFromJSONTyped,
    ProjectToJSON,
} from './';

/**
 * 
 * @export
 * @interface Space
 */
export interface Space {
    /**
     * 
     * @type {string}
     * @memberof Space
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Space
     */
    name?: string;
    /**
     * 
     * @type {Date}
     * @memberof Space
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Space
     */
    updatedAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof Space
     */
    projectsCount?: number;
    /**
     * 
     * @type {Array<Project>}
     * @memberof Space
     */
    projects?: Array<Project>;
}

export function SpaceFromJSON(json: any): Space {
    return SpaceFromJSONTyped(json, false);
}

export function SpaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Space {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'projectsCount': !exists(json, 'projects_count') ? undefined : json['projects_count'],
        'projects': !exists(json, 'projects') ? undefined : ((json['projects'] as Array<any>).map(ProjectFromJSON)),
    };
}

export function SpaceToJSON(value?: Space | null): any {
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
        'projects_count': value.projectsCount,
        'projects': value.projects === undefined ? undefined : ((value.projects as Array<any>).map(ProjectToJSON)),
    };
}


