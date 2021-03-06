// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * Inverse of `Pick<T, K>`.
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<KnownKeys<T> & keyof T, K>>;
