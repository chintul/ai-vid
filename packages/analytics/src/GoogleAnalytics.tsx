'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@passive-income/analytics';

interface GoogleAnalyticsProps {
    measurementId: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname) {
            trackPageView(pathname);
        }
    }, [pathname, searchParams]);

    if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
        return null;
    }

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
            </Script>
        </>
    );
}
