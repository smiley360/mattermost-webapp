// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable no-process-env */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
    StripeError,
    ConfirmCardSetupData,
    ConfirmCardSetupOptions,
    SetupIntent,
} from '@stripe/stripe-js';

type confirmCardSetupType = (clientSecret: string, data?: ConfirmCardSetupData | undefined, options?: ConfirmCardSetupOptions | undefined) => Promise<{ setupIntent?: SetupIntent | undefined; error?: StripeError | undefined }> | undefined;

function prodConfirmCardSetup(confirmCardSetup: confirmCardSetupType): confirmCardSetupType {
    return confirmCardSetup;
}

function devConfirmCardSetup(confirmCardSetup: confirmCardSetupType): confirmCardSetupType {
    return async (clientSecret: string, data?: ConfirmCardSetupData | undefined, options?: ConfirmCardSetupOptions | undefined) => {
        return {setupIntent: {id: 'testid', status: 'succeeded'} as SetupIntent};
    };
}

if (process.env.NODE_ENV === 'development') {
    console.log('Loaded Stripe client mock for development'); //eslint-disable-line no-console
}

export const getConfirmCardSetup = process.env.NODE_ENV === 'development' ? devConfirmCardSetup : prodConfirmCardSetup;
