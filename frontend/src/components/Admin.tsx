import React from 'react'
import { Button } from '@/components/ui/button'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Navigate } from 'react-router-dom'
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'
import { useNavigate } from 'react-router-dom'
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
