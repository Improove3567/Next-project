import 'tailwindcss/tailwind.css'
import Hero from '../components/hero/Hero'
import Instagram from '../components/instagram/Instagram'
import Slider from '../components/slider/Slider'
import { SliderData } from '../components/slider/SliderData'

export default function Home() {
  return (
    <div>
      <Hero heading="Captur Photography" message="I capture moments in nature and keep them alive" />
      <Slider slides={ SliderData } />
      <Instagram />
    </div>
  )
}
