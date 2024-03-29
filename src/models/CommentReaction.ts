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
    Comment,
    CommentFromJSON,
    CommentFromJSONTyped,
    CommentToJSON,
    UserPreview,
    UserPreviewFromJSON,
    UserPreviewFromJSONTyped,
    UserPreviewToJSON,
} from './';

/**
 * 
 * @export
 * @interface CommentReaction
 */
export interface CommentReaction {
    /**
     * 
     * @type {string}
     * @memberof CommentReaction
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CommentReaction
     */
    emoji?: string;
    /**
     * 
     * @type {Date}
     * @memberof CommentReaction
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CommentReaction
     */
    updatedAt?: Date;
    /**
     * 
     * @type {Comment}
     * @memberof CommentReaction
     */
    comment?: Comment;
    /**
     * 
     * @type {UserPreview}
     * @memberof CommentReaction
     */
    user?: UserPreview;
}

export function CommentReactionFromJSON(json: any): CommentReaction {
    return CommentReactionFromJSONTyped(json, false);
}

export function CommentReactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentReaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'emoji': !exists(json, 'emoji') ? undefined : json['emoji'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'comment': !exists(json, 'comment') ? undefined : CommentFromJSON(json['comment']),
        'user': !exists(json, 'user') ? undefined : UserPreviewFromJSON(json['user']),
    };
}

export function CommentReactionToJSON(value?: CommentReaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'emoji': value.emoji,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'comment': CommentToJSON(value.comment),
        'user': UserPreviewToJSON(value.user),
    };
}


