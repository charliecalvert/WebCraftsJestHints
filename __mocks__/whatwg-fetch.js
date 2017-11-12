import getData from './mock-data';

'use strict';

const whatwgFetch = jest.genMockFromModule('whatwg-fetch');

const fetch = function(url) {

    const objectState = getData(url);

    const response = {};

    response.json = function() {
        return objectState;
    };

    return {
        then: function() {
            return {
                then: function(func) {
                    func(objectState);
                    return {
                        catch: function(e) {
                        }
                    };
                }
            };
        }
    };
};

whatwgFetch.fetch = fetch;
window.fetch = fetch;
module.exports = whatwgFetch;
