import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Button } from '@/components/ui/button'

const dialogData = {
  help: { title: 'Help', description: 'Hello! Here' },
  signout: {
    title: 'Sign out',
    description: 'Are you sure you want to sign out?',
  },
}

export const DialogHelper = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <Dialog>
      <DialogTrigger>{title}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export const MobileDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='sm:hidden'>
        <Button variant='ghost'>
          <Bars3Icon className='h-6 w-6' aria-hidden='true' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {Object.entries(dialogData).map(([key, { title, description }]) => (
          <div key={key}>
            <Dialog key={key}>
              <DialogTrigger className='w-full'>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  {title}
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{title}</DialogTitle>
                  <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <DropdownMenuSeparator />
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <p className='font-bold'>Weather.io</p>
      <div className='hidden sm:flex sm:space-x-7 '>
        <DialogHelper
          title={dialogData.help.title}
          description={dialogData.help.description}
        />
        <DialogHelper
          title={dialogData.signout.title}
          description={dialogData.signout.description}
        />
      </div>
      <MobileDropdownMenu />
    </header>
  )
}

export default Header
