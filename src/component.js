/* @flow */

import { getClientID } from '@paypal/sdk-client/src';
import { create, type ZoidComponent } from 'zoid/src';
import { ZalgoPromise } from 'zalgo-promise/src';


export const Experience = create({
    tag: 'paypal-experience',

    url: () => 'http://localhost.paypal.com:8080/experience.html',

    props: {
        email: {
            type:       'string',
            required:   false
        },

        onDataFound: {
            type:     'function',
            required: false
        }
    }
});
