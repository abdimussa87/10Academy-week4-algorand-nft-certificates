import React from 'react'
import { Button } from '@/components/ui/button'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Navigate } from 'react-router-dom'
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'
import { useNavigate } from 'react-router-dom'
import ConnectWallet from './ConnectWallet'
import { PROVIDER_ID, ProvidersArray, WalletProvider, useInitializeProviders, useWallet } from '@txnlab/use-wallet'
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DeflyWalletConnect } from '@blockshake/defly-connect'
import { DaffiWalletConnect } from '@daffiwallet/connect'
import { PeraWalletConnect } from '@perawallet/connect'
import { useState } from 'react'
import { getAlgodConfigFromViteEnvironment } from '../utils/network/getAlgoClientConfigs'
import algosdk from 'algosdk'

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
function Admin() {
  // check if role in local storage exists and is admin
  const role = localStorage.getItem('role')
  if (role !== 'admin') {
    return <Navigate to="/" />
  }

  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const { activeAddress } = useWallet()
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
    <div className="flex flex-col h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <header className="flex items-center justify-between px-6 py-4 text-white bg-gray-800">
        <h1 className="text-lg font-semibold">Admin Dashboard</h1>
        <div>
          <Button className="mr-6 text-white bg-green-400 hover:bg-green-700" onClick={() => navigate('/admin/issue-nft')}>
            Issue An NFT
          </Button>
          <Button className="text-white bg-red-500 hover:bg-red-600" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>
      <main className="flex-1 p-6 overflow-auto">
        {/* <WalletProvider value={walletProviders}>
          <div className="">
            <div className="">
              <div className="">
                {/* <h1 className="w-full p-6 text-4xl"> Welcome to AlgoKit 🙂 </h1> */}

        {/* <div className="">
                  <div className="py-10 bg-gray-100">
                    <button
                      data-test-id="connect-wallet"
                      className="flex justify-center p-5 m-2 mx-auto bg-blue-400 rounded-full"
                      onClick={toggleWalletModal}
                    >
                      Wallet Connection
                    </button>
                  </div>
                  <div className="divider" /> */}

        {/* <div className="flex justify-end">
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
                    </div> */}

        {/* <AppCalls appID={appID} setAppID={setAppID} /> */}

        {/* <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} /> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </WalletProvider>  */}
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-white rounded-lg shadow-md dark:bg-gray-800">
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold">Opt-in Requests</CardTitle>
              <CardDescription>A list of trainee's opt-in requests for NFT certificates.</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-gray-500 dark:text-gray-400">johndoe@example.com</p>
                    </div>
                  </div>
                  <Button className="text-sm" variant="outline">
                    Approve
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <h4 className="font-semibold">Jane Smith</h4>
                      <p className="text-gray-500 dark:text-gray-400">janesmith@example.com</p>
                    </div>
                  </div>
                  <Button className="text-sm" variant="outline">
                    Approve
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white rounded-lg shadow-md dark:bg-gray-800">
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold">NFT Certificates</CardTitle>
              <CardDescription>A list of issued NFT certificates.</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-gray-500 dark:text-gray-400">johndoe@example.com</p>
                    </div>
                  </div>
                  <Button className="text-sm" variant="outline">
                    Revoke
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <h4 className="font-semibold">Jane Smith</h4>
                      <p className="text-gray-500 dark:text-gray-400">janesmith@example.com</p>
                    </div>
                  </div>
                  <Button className="text-sm" variant="outline">
                    Revoke
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default Admin
