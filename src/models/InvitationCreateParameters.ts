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
 * @interface InvitationCreateParameters
 */
export interface InvitationCreateParameters {
    /**
     * The email of the invited user. The <code>email</code> can not be updated once created. Create a new invitation for each unique email.
     * @type {string}
     * @memberof InvitationCreateParameters
     */
    email?: string;
    /**
     * Invitiation role, can be any of Manager, Developer, Translator.
     * @type {string}
     * @memberof InvitationCreateParameters
     */
    role?: string;
    /**
     * List of project ids the invited user has access to.
     * @type {string}
     * @memberof InvitationCreateParameters
     */
    projectIds?: string;
    /**
     * List of locale ids the invited user has access to.
     * @type {string}
     * @memberof InvitationCreateParameters
     */
    localeIds?: string;
    /**
     * List of default locales for the user.
     * @type {Array<string>}
     * @memberof InvitationCreateParameters
     */
    defaultLocaleCodes?: Array<string>;
    /**
     * Additional permissions depending on invitation role. Available permissions are <code>create_upload</code> and <code>review_translations</code>
     * @type {{ [key: string]: string; }}
     * @memberof InvitationCreateParameters
     */
    permissions?: { [key: string]: string; };
}

export function InvitationCreateParametersFromJSON(json: any): InvitationCreateParameters {
    return InvitationCreateParametersFromJSONTyped(json, false);
}

export function InvitationCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvitationCreateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'projectIds': !exists(json, 'project_ids') ? undefined : json['project_ids'],
        'localeIds': !exists(json, 'locale_ids') ? undefined : json['locale_ids'],
        'defaultLocaleCodes': !exists(json, 'default_locale_codes') ? undefined : json['default_locale_codes'],
        'permissions': !exists(json, 'permissions') ? undefined : json['permissions'],
    };
}

export function InvitationCreateParametersToJSON(value?: InvitationCreateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'role': value.role,
        'project_ids': value.projectIds,
        'locale_ids': value.localeIds,
        'default_locale_codes': value.defaultLocaleCodes,
        'permissions': value.permissions,
    };
}


