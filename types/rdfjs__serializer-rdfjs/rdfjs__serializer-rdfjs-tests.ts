import Serializer from '@rdfjs/serializer-rdfjs';
import { Quad, Stream, DatasetCore } from 'rdf-js';
import { EventEmitter } from 'events';

const dataset: DatasetCore = <any> {};
const quads: Quad[] = <any> {};
const quadStream: Stream = <any> {};

const serializer = new Serializer();
const serializer2 = new Serializer({});
const serializerTypescript = new Serializer({
    module: 'ts'
});
const serializerCjs = new Serializer({
    module: 'commonjs'
});

const code: string = serializer.transform(quads);
const codeFromDataset: string = serializer.transform(dataset);

const stream: EventEmitter = serializer.import(quadStream);
const typescriptStream: EventEmitter = serializer.import(quadStream, {
    module: 'ts'
});
