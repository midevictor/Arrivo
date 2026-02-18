import { Header } from '@/components/layout';
import { Footer } from '@/components/layout';
import AboutHero from '@/components/AboutHeroSection';
import OurValues from '@/components/OurValues';
import OurAchievements from '@/components/OurAchievements';
import EstateinExperience from '@/components/ArrivoinExperience';
import { CTA } from '@/components/shared';
import { getMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = getMetadata(
    'About Us',
    'Learn about Arrivo — our values, achievements, and how we help you navigate the real estate experience.',
    '/about'
);

export default function AboutPage() {
    return (
        <>
            <Header />
            <main id="main-content">
                <AboutHero />
                <OurValues />
                <OurAchievements />
                <EstateinExperience />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
