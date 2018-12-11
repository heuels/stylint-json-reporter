'use strict';
var messages = [];

module.exports = function(message, done) {
    if (done === 'done') {
        this.cache.msg = JSON.stringify(messages);
        return this.done();
    }

    messages.push({
        path: this.cache.file,
        line: this.cache.lineNo,
        columm: this.cache.col || 0,
        severity: this.state.severity === 'Warning' ? 'warning' : 'failure',
        ruleId: this.cache.rule,
        message,
    });

    return '';
};
