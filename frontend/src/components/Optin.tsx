import { Button } from '@/components/ui/button'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Navigate } from 'react-router-dom'

export default function Optin() {
  // check if role in local storage exists and is admin
  const role = localStorage.getItem('role')
  if (role !== 'trainee') {
    return <Navigate to="/" />
  }
  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-r from-green-400 to-blue-500">
      <nav className="flex items-center justify-between w-full max-w-md mb-10">
        <div>
          <h1 className="text-4xl font-bold">Trainee Certification</h1>
          <p className="text-lg">Opt in to receive your certificate as an NFT</p>
        </div>
        <Button onClick={handleLogout} className="text-white bg-red-500 hover:bg-red-600">
          Logout
        </Button>
      </nav>
      <Card className="w-full max-w-md text-black bg-white">
        <CardHeader>
          <CardTitle className="text-xl">Opt In</CardTitle>
          <CardDescription>Please provide your information below to receive your NFT certificate.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="john@example.com" required type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wallet">Wallet Address</Label>
              <Input id="wallet" placeholder="0x1234...5678" required />
            </div>
            <Button className="w-full text-white bg-green-500 hover:bg-green-600" type="submit">
              Opt In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
