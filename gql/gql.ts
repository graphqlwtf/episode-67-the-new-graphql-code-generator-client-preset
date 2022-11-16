/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetCartById($id: ID!) {\n    cart(id: $id) {\n      id\n      totalItems\n      items {\n        id\n        name\n        unitTotal {\n          formatted\n        }\n      }\n    }\n  }\n": types.GetCartByIdDocument,
};

export function graphql(source: "\n  query GetCartById($id: ID!) {\n    cart(id: $id) {\n      id\n      totalItems\n      items {\n        id\n        name\n        unitTotal {\n          formatted\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCartById($id: ID!) {\n    cart(id: $id) {\n      id\n      totalItems\n      items {\n        id\n        name\n        unitTotal {\n          formatted\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;