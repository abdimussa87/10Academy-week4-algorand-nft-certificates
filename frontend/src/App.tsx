/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DeflyWalletConnect } from '@blockshake/defly-connect'
import { DaffiWalletConnect } from '@daffiwallet/connect'
import { PeraWalletConnect } from '@perawallet/connect'
import { PROVIDER_ID, ProvidersArray, WalletProvider, useInitializeProviders, useWallet } from '@txnlab/use-wallet'
import algosdk from 'algosdk'
import { SnackbarProvider } from 'notistack'
import { useState } from 'react'
import AppCalls from './components/AppCalls'
import ConnectWallet from './components/ConnectWallet'
import { getAlgodConfigFromViteEnvironment } from './utils/network/getAlgoClientConfigs'

export enum AuctionState {
  Pending,
  Started,
  Ended,
}

let providersArray: ProvidersArray
if (import.meta.env.VITE_ALGOD_NETWORK === '') {
  providersArray = [{ id: PROVIDER_ID.KMD }]
} else {
  providersArray = [
    { id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect },
    { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
    { id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect },
    { id: PROVIDER_ID.EXODUS },
    // If you are interested in WalletConnect v2 provider
    // refer to https://github.com/TxnLab/use-wallet for detailed integration instructions
  ]
}

export default function App() {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const { activeAddress } = useWallet()
  const [auctionState, setAuctionState] = useState<AuctionState>(AuctionState.Pending)
  const [appID, setAppID] = useState<number>(0)

  const algodConfig = getAlgodConfigFromViteEnvironment()

  const toggleWalletModal = () => {
    setOpenWalletModal(!openWalletModal)
  }

  const walletProviders = useInitializeProviders({
    providers: providersArray,
    nodeConfig: {
      network: algodConfig.network,
      nodeServer: algodConfig.server,
      nodePort: String(algodConfig.port),
      nodeToken: String(algodConfig.token),
    },
    algosdkStatic: algosdk,
  })

  return (
    <SnackbarProvider maxSnack={3}>
      <WalletProvider value={walletProviders}>
        <div className="">
          <div className="">
            <div className="">
              <h1 className="w-full p-6 text-4xl"> Welcome to AlgoKit 🙂 </h1>

              <div className="">
                <div className="py-10 bg-gray-100">
                  <button
                    data-test-id="connect-wallet"
                    className="flex justify-center p-5 m-2 mx-auto bg-blue-400 rounded-full"
                    onClick={toggleWalletModal}
                  >
                    Wallet Connection
                  </button>
                </div>
                <div className="divider" />

                <div className="flex justify-end">
                  <label htmlFor="app" className="m-2 label">
                    App ID
                  </label>
                  <input
                    type="number"
                    id="app"
                    value={appID}
                    className="border-none"
                    readOnly={true}
                    onChange={(e) => (e.target.valueAsNumber ? setAppID(e.target.valueAsNumber) : setAppID(0))}
                  />
                </div>

                <AppCalls appID={appID} setAppID={setAppID} />

                <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
              </div>
            </div>
          </div>
        </div>
      </WalletProvider>
    </SnackbarProvider>
  )
}
