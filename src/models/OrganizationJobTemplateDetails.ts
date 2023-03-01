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
    JobTemplateDetails1,
    JobTemplateDetails1FromJSON,
    JobTemplateDetails1FromJSONTyped,
    JobTemplateDetails1ToJSON,
    LocalePreview,
    LocalePreviewFromJSON,
    LocalePreviewFromJSONTyped,
    LocalePreviewToJSON,
    OrganizationJobTemplate,
    OrganizationJobTemplateFromJSON,
    OrganizationJobTemplateFromJSONTyped,
    OrganizationJobTemplateToJSON,
    UserPreview,
    UserPreviewFromJSON,
    UserPreviewFromJSONTyped,
    UserPreviewToJSON,
} from './';

/**
 * 
 * @export
 * @interface OrganizationJobTemplateDetails
 */
export interface OrganizationJobTemplateDetails {
    /**
     * 
     * @type {string}
     * @memberof OrganizationJobTemplateDetails
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationJobTemplateDetails
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationJobTemplateDetails
     */
    briefing?: string;
    /**
     * 
     * @type {Date}
     * @memberof OrganizationJobTemplateDetails
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof OrganizationJobTemplateDetails
     */
    updatedAt?: Date;
    /**
     * 
     * @type {UserPreview}
     * @memberof OrganizationJobTemplateDetails
     */
    owner?: UserPreview;
    /**
     * 
     * @type {UserPreview}
     * @memberof OrganizationJobTemplateDetails
     */
    creator?: UserPreview;
    /**
     * 
     * @type {Array<LocalePreview>}
     * @memberof OrganizationJobTemplateDetails
     */
    locales?: Array<LocalePreview>;
}

export function OrganizationJobTemplateDetailsFromJSON(json: any): OrganizationJobTemplateDetails {
    return OrganizationJobTemplateDetailsFromJSONTyped(json, false);
}

export function OrganizationJobTemplateDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationJobTemplateDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'briefing': !exists(json, 'briefing') ? undefined : json['briefing'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'owner': !exists(json, 'owner') ? undefined : UserPreviewFromJSON(json['owner']),
        'creator': !exists(json, 'creator') ? undefined : UserPreviewFromJSON(json['creator']),
        'locales': !exists(json, 'locales') ? undefined : ((json['locales'] as Array<any>).map(LocalePreviewFromJSON)),
    };
}

export function OrganizationJobTemplateDetailsToJSON(value?: OrganizationJobTemplateDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'briefing': value.briefing,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'owner': UserPreviewToJSON(value.owner),
        'creator': UserPreviewToJSON(value.creator),
        'locales': value.locales === undefined ? undefined : ((value.locales as Array<any>).map(LocalePreviewToJSON)),
    };
}

