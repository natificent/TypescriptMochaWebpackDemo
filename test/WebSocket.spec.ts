import { expect } from 'chai';
import * as sinon from 'sinon';

describe('Can connect', () => {
    it('is created', () => {
        const ws = new WebSocket("ws://localhost:54572/chat");
        expect(ws).to.not.be.null;
    });

    it('can connect', (done) => {
        const ws = new WebSocket("ws://localhost:54572/chat");
        ws.onopen = (event: MessageEvent) => {
            done();
        };
        
    });
});