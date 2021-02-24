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
/**
 * 
 * @export
 * @interface CurrentUser
 */
export interface CurrentUser {
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    position?: string;
    /**
     * 
     * @type {string}
     * @memberof CurrentUser
     */
    language?: string;
    /**
     * 
     * @type {Date}
     * @memberof CurrentUser
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CurrentUser
     */
    updatedAt?: Date;
}

export function CurrentUserFromJSON(json: any): CurrentUser {
    return CurrentUserFromJSONTyped(json, false);
}

export function CurrentUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrentUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function CurrentUserToJSON(value?: CurrentUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'username': value.username,
        'name': value.name,
        'email': value.email,
        'position': value.position,
        'language': value.language,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}

