/* @flow */

import { getClientID } from '@paypal/sdk-client/src';
import { create, type ZoidComponent } from 'zoid/src';

export type ExamplePayType = {|
    foo: string
|};

export const ExamplePay : () => ZoidComponent<ExamplePayType> = create({
       tag: 'paypal-example',

        url: () => 'https://example.com',

        props: {
            foo: {
                type: 'string',
                required: false,
                queryParam: true
            }
        }
});