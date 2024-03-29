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
 * @interface FigmaAttachment
 */
export interface FigmaAttachment {
    /**
     * 
     * @type {string}
     * @memberof FigmaAttachment
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof FigmaAttachment
     */
    url?: string;
    /**
     * 
     * @type {Date}
     * @memberof FigmaAttachment
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof FigmaAttachment
     */
    updatedAt?: Date;
}

export function FigmaAttachmentFromJSON(json: any): FigmaAttachment {
    return FigmaAttachmentFromJSONTyped(json, false);
}

export function FigmaAttachmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): FigmaAttachment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function FigmaAttachmentToJSON(value?: FigmaAttachment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'url': value.url,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}


