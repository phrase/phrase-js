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
    ProjectShort,
    ProjectShortFromJSON,
    ProjectShortFromJSONTyped,
    ProjectShortToJSON,
} from './';

/**
 * 
 * @export
 * @interface Glossary
 */
export interface Glossary {
    /**
     * 
     * @type {string}
     * @memberof Glossary
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Glossary
     */
    name?: string;
    /**
     * 
     * @type {Array<ProjectShort>}
     * @memberof Glossary
     */
    projects?: Array<ProjectShort>;
    /**
     * 
     * @type {Date}
     * @memberof Glossary
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Glossary
     */
    updatedAt?: Date;
}

export function GlossaryFromJSON(json: any): Glossary {
    return GlossaryFromJSONTyped(json, false);
}

export function GlossaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Glossary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'projects': !exists(json, 'projects') ? undefined : ((json['projects'] as Array<any>).map(ProjectShortFromJSON)),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function GlossaryToJSON(value?: Glossary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'projects': value.projects === undefined ? undefined : ((value.projects as Array<any>).map(ProjectShortToJSON)),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}


