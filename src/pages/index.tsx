// Components
// import HomeView from '@/components/templates/Home'
import Link from '@/components/atoms/Link'
import Button from '@/components/atoms/Button'

export default function Home() {
  return (
    <a href="#">
      <Link href="/#" colorVariant="primary">
        <Button colorVariant="primary" sizeVariant="medium">
          connect wallet
        </Button>
      </Link>
    </a>
  )
}
