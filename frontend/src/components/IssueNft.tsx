import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { SVGProps } from 'react'
import { JSX } from 'react/jsx-runtime'

export default function IssueNft() {
  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <header className="flex items-center justify-between px-6 py-4 text-white bg-gray-800">
        <h1 className="text-lg font-semibold">Admin Dashboard</h1>

        <Button className="text-white bg-red-500 hover:bg-red-600" onClick={handleLogout}>
          Logout
        </Button>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 p-4 overflow-y-auto">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Issue NFT</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input id="nft-name" placeholder="NFT Name" required />
                <Textarea id="nft-description" placeholder="NFT Description" required />
                <Input id="nft-image" required type="file" />
                <Input id="nft-metadata" placeholder="Additional Metadata (JSON format)" required />
                <Button type="submit">Mint NFT</Button>
              </form>
            </CardContent>
          </Card>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>NFT Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-left">
                    <th>Name</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Total Supply</th>
                    <th>Remaining Supply</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>NFT 1</td>
                    <td>Description 1</td>
                    <td>
                      <img
                        alt="NFT 1"
                        height={50}
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: '50/50',
                          objectFit: 'cover',
                        }}
                        width={50}
                      />
                    </td>
                    <td>100</td>
                    <td>50</td>
                    <td>Distributed</td>
                    <td>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button className="ml-2" size="sm" variant="outline">
                        Distribute
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>NFT 2</td>
                    <td>Description 2</td>
                    <td>
                      <img
                        alt="NFT 2"
                        height={50}
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: '50/50',
                          objectFit: 'cover',
                        }}
                        width={50}
                      />
                    </td>
                    <td>200</td>
                    <td>100</td>
                    <td>Not Distributed</td>
                    <td>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button className="ml-2" size="sm" variant="outline">
                        Distribute
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

function FrameIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  )
}

function ListIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}

function NfcIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
      <path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" />
      <path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
      <path d="M16.37 2a20.16 20.16 0 0 1 0 20" />
    </svg>
  )
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
