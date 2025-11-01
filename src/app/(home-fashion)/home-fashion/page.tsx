import { Divider } from '@/components/divider'
import FeatureSection2 from '@/components/sections/feature-section-2'
import FeatureSection3 from '@/components/sections/feature-section-3'
import HeroSection3 from '@/components/sections/hero-section-3'
import SectionCollectionCarousel from '@/components/sections/section-collection-carousel'
import SectionProductCarousel from '@/components/sections/section-product-carousel'
import { getCollections, getGroupCollections } from '@/data'
import clsx from 'clsx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DenimCo - Premium Jeans Store',
  description: 'Discover the perfect pair of premium denim jeans for every style and occasion.',
}

export default async function Home() {
  // Change from 'fashion' to 'jeans'
  let collections = await getCollections('jeans')
  let groupCollections = await getGroupCollections('jeans')

  return (
    <div>
      <HeroSection3 />

      <SectionCollectionCarousel className="container mt-20 sm:mt-28 lg:mt-28" groupCollections={groupCollections} />

      {collections
        ?.filter((_, i) => i < 3)
        .map((collection, index) => (
          <SectionProductCarousel
            key={index}
            className={clsx('container', index === 0 ? 'mt-44' : 'mt-36')}
            products={collection?.products}
            collectionTitle={collection?.title}
            collectionHandle={collection?.handle}
            collectionDescription={collection?.description}
          />
        ))}

      <FeatureSection2
        className="container mt-20 sm:mt-28 lg:mt-32"
        variant="up"
        heading={`Premium Denim <span data-slot="italic">Crafted</span> With Care <span data-slot="italic">&</span> Precision`}
        faqs={[
          {
            question: 'Premium Materials',
            answer: 'We use only the highest quality denim sourced from trusted mills with sustainable practices.',
          },
          {
            question: 'Perfect Fit Guarantee',
            answer: 'Every pair is designed with attention to detail to ensure the perfect fit and comfort.',
          },
          {
            question: 'Sustainable Production',
            answer: 'We are committed to reducing water usage and implementing eco-friendly manufacturing processes.',
          },
          {
            question: 'Timeless Style',
            answer: 'Our designs blend classic silhouettes with modern trends for jeans that never go out of style.',
          },
        ]}
        image={{
          src: '/images/jeans/Parshwam-4.webp',
          width: 644,
          height: 653,
          alt: 'premium-denim-collection',
        }}
      />

      <div className="container mt-24 sm:mt-28 lg:mt-40">
        <Divider />
      </div>

      <FeatureSection3
        className="mt-20 sm:mt-28 lg:mt-32"
        heading={`Explore our exclusive denim collections, blending comfort with <span data-slot="italic">timeless style.</span>`}
        collection1={{
          title: 'Raw Denim <br /><span data-slot="italic">collection.</span>',
          desciption: 'Discover our premium raw denim collection, designed to mold to your body and tell your story',
          images: [
            '/images/jeans/Parshwam-1.webp',
            '/images/jeans/Parshwam-2.webp',
            '/images/jeans/Parshwam-3.webp',
            '/images/jeans/Parshwam-4.webp',
          ],
        }}
        collection2={{
          title: 'Everyday <br /> <span data-slot="italic">essentials.</span>',
          desciption: 'Our most comfortable jeans for daily wear, combining style with ultimate comfort',
          images: [
            '/images/jeans/Parshwam-5.webp',
            '/images/jeans/Parshwam-6.webp',
            '/images/jeans/Parshwam-7.webp',
            '/images/jeans/Parshwam-4.webp',
          ],
        }}
      />
    </div>
  )
}
