'use client';

import { Suspense } from 'react';
import { GoogleAnalytics } from './GoogleAnalytics';

interface GoogleAnalyticsWrapperProps {
    measurementId: string;
}

export function GoogleAnalyticsWrapper({ measurementId }: GoogleAnalyticsWrapperProps) {
    return (
        <Suspense fallback={null}>
            <GoogleAnalytics measurementId={measurementId} />
        </Suspense>
    );
}
