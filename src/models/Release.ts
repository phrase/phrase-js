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
    LocalePreview,
    LocalePreviewFromJSON,
    LocalePreviewFromJSONTyped,
    LocalePreviewToJSON,
    ProjectShort,
    ProjectShortFromJSON,
    ProjectShortFromJSONTyped,
    ProjectShortToJSON,
} from './';

/**
 * 
 * @export
 * @interface Release
 */
export interface Release {
    /**
     * 
     * @type {string}
     * @memberof Release
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof Release
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof Release
     */
    appMinVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof Release
     */
    appMaxVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof Release
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Release
     */
    platforms?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Release
     */
    environments?: Array<string>;
    /**
     * 
     * @type {Array<LocalePreview>}
     * @memberof Release
     */
    locales?: Array<LocalePreview>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Release
     */
    tags?: Array<string>;
    /**
     * 
     * @type {ProjectShort}
     * @memberof Release
     */
    project?: ProjectShort;
    /**
     * 
     * @type {Date}
     * @memberof Release
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Release
     */
    updatedAt?: Date;
}

export function ReleaseFromJSON(json: any): Release {
    return ReleaseFromJSONTyped(json, false);
}

export function ReleaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Release {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'appMinVersion': !exists(json, 'app_min_version') ? undefined : json['app_min_version'],
        'appMaxVersion': !exists(json, 'app_max_version') ? undefined : json['app_max_version'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'platforms': !exists(json, 'platforms') ? undefined : json['platforms'],
        'environments': !exists(json, 'environments') ? undefined : json['environments'],
        'locales': !exists(json, 'locales') ? undefined : ((json['locales'] as Array<any>).map(LocalePreviewFromJSON)),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'project': !exists(json, 'project') ? undefined : ProjectShortFromJSON(json['project']),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function ReleaseToJSON(value?: Release | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'version': value.version,
        'app_min_version': value.appMinVersion,
        'app_max_version': value.appMaxVersion,
        'description': value.description,
        'platforms': value.platforms,
        'environments': value.environments,
        'locales': value.locales === undefined ? undefined : ((value.locales as Array<any>).map(LocalePreviewToJSON)),
        'tags': value.tags,
        'project': ProjectShortToJSON(value.project),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}


