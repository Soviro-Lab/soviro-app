'use client';

import { PrivyProvider } from '@privy-io/react-auth';
import { ReactNode , useEffect  } from 'react';
// Replace this with any of the networks listed at https://github.com/wevm/viem/blob/main/src/chains/index.ts
import {bsc} from 'viem/chains';

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    localStorage.removeItem('privy:embedded-wallet:iframe-ready');
    localStorage.removeItem('privy:embedded-wallet:ready');
  }, []);
  return (
    <PrivyProvider 
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
        config={{
        "appearance": {
          "accentColor": "#6A6FF5",
          "showWalletLoginFirst": false,
          "logo": "https://auth.privy.io/logos/privy-logo.png",
          "walletChainType": 'ethereum-only',
          "walletList": ['metamask', 'wallet_connect', 'coinbase_wallet', 'rabby_wallet', 'cryptocom','safe']
        },
        "loginMethods": [
          "email",
          "wallet"
        ],
        "embeddedWallets": {
          "createOnLogin": "all-users",
          "showWalletUIs": true
        },
          "noPromptOnMfaRequired": false
        },
        defaultChain: bsc,
      }}
      >
        {children}
  );
}