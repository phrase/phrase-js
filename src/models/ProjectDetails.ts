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
    Account,
    AccountFromJSON,
    AccountFromJSONTyped,
    AccountToJSON,
    Project,
    ProjectFromJSON,
    ProjectFromJSONTyped,
    ProjectToJSON,
    ProjectDetails1,
    ProjectDetails1FromJSON,
    ProjectDetails1FromJSONTyped,
    ProjectDetails1ToJSON,
    Space1,
    Space1FromJSON,
    Space1FromJSONTyped,
    Space1ToJSON,
} from './';

/**
 * 
 * @export
 * @interface ProjectDetails
 */
export interface ProjectDetails {
    /**
     * 
     * @type {string}
     * @memberof ProjectDetails
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectDetails
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectDetails
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectDetails
     */
    mainFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectDetails
     */
    projectImageUrl?: string;
    /**
     * 
     * @type {Account}
     * @memberof ProjectDetails
     */
    account?: Account;
    /**
     * 
     * @type {Space1}
     * @memberof ProjectDetails
     */
    space?: Space1;
    /**
     * 
     * @type {Date}
     * @memberof ProjectDetails
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ProjectDetails
     */
    updatedAt?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof ProjectDetails
     */
    sharesTranslationMemory?: boolean;
}

export function ProjectDetailsFromJSON(json: any): ProjectDetails {
    return ProjectDetailsFromJSONTyped(json, false);
}

export function ProjectDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'mainFormat': !exists(json, 'main_format') ? undefined : json['main_format'],
        'projectImageUrl': !exists(json, 'project_image_url') ? undefined : json['project_image_url'],
        'account': !exists(json, 'account') ? undefined : AccountFromJSON(json['account']),
        'space': !exists(json, 'space') ? undefined : Space1FromJSON(json['space']),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'sharesTranslationMemory': !exists(json, 'shares_translation_memory') ? undefined : json['shares_translation_memory'],
    };
}

export function ProjectDetailsToJSON(value?: ProjectDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'slug': value.slug,
        'main_format': value.mainFormat,
        'project_image_url': value.projectImageUrl,
        'account': AccountToJSON(value.account),
        'space': Space1ToJSON(value.space),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'shares_translation_memory': value.sharesTranslationMemory,
    };
}


