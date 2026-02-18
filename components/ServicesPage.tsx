import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/[0.015]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,.05)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function IconRing({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative grid place-items-center h-14 w-14 rounded-full border border-violet-400/20 bg-violet-500/10">
      <div className="absolute inset-0 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,.03),0_0_22px_rgba(139,92,246,.16)]" />
      <div className="relative">{children}</div>
    </div>
  );
}

function GhostPill({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center h-10 px-5 rounded-full border border-white/10 bg-black/20 text-white/75 text-sm hover:bg-white/5 hover:text-white transition-colors"
    >
      {label}
    </Link>
  );
}

function MiniCard({ title, iconSrc }: { title: string; iconSrc: string }) {
  return (
    <Card className="relative h-[118px] px-6">
      {/* arrow top-right */}
      <div className="absolute right-5 top-5 text-white/20">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 17L17 7M10 7h7v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>

      <div className="h-full flex flex-col items-center justify-center gap-3">
        <IconRing>
          <Image src={iconSrc} alt="" width={22} height={22} />
        </IconRing>
        <p className="text-[13px] font-medium text-white/85">{title}</p>
      </div>
    </Card>
  );
}

function InfoCard({
  title,
  desc,
  iconSrc,
}: {
  title: string;
  desc: string;
  iconSrc: string;
}) {
  return (
    <Card className="p-7">
      <div className="flex items-start gap-5">
        <IconRing>
          <Image src={iconSrc} alt="" width={22} height={22} />
        </IconRing>
        <div className="pt-1">
          <h3 className="text-[15px] font-semibold text-white">{title}</h3>
          <p className="mt-3 text-[13px] leading-[19px] text-white/55 max-w-[320px]">{desc}</p>
        </div>
      </div>
    </Card>
  );
}

function WideCta({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Card className="relative overflow-hidden services-topo">
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative p-7">
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <h3 className="text-[18px] font-semibold text-white">{title}</h3>
            {/* divider line under title (in your screenshot) */}
            <div className="mt-4 h-px w-full bg-white/10" />
            <p className="mt-4 text-[13px] leading-[19px] text-white/55 max-w-[620px]">{desc}</p>
          </div>
          <div className="pt-1">
            <GhostPill href={href} label="Learn More" />
          </div>
        </div>
      </div>
    </Card>
  );
}

function SectionHead({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="pt-1">
        <Image src="/services/stars.svg" alt="" width={22} height={22} />
      </div>
      <div className="min-w-0">
        <h2 className="text-[34px] leading-[40px] font-semibold text-white">{title}</h2>
        <p className="mt-4 max-w-[880px] text-[13px] leading-[19px] text-white/55">{desc}</p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="relative bg-[#141414]">
      {/* same hero glow placement as your screenshot */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-60 [background:radial-gradient(900px_circle_at_18%_14%,rgba(255,255,255,.10),transparent_60%)]" />
        <div className="absolute inset-0 opacity-35 [background:radial-gradient(900px_circle_at_80%_24%,rgba(139,92,246,.14),transparent_60%)]" />
      </div>

      {/* IMPORTANT: this width + padding is what fixes your "Elevate..." placement */}
      <div className="relative mx-auto max-w-[1120px] px-8">
        {/* HERO */}
        <section className="pt-24 lg:pt-32  ">
          <h1 className="text-[40px] leading-[48px] font-semibold tracking-tight text-white">
            Elevate Your Real Estate Experience
          </h1>
          <p className="mt-4 max-w-[760px] text-[13px] leading-[19px] text-white/55">
            Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services,
            each designed to cater to your unique needs and dreams.
          </p>

          {/* Feature strip container (your screenshot has a boxed area here) */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.01] p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <MiniCard title="Find Your Dream Home" iconSrc="/services/icons/find.svg" />
              <MiniCard title="Unlock Property Value" iconSrc="/services/icons/value.svg" />
              <MiniCard title="Effortless Property Management" iconSrc="/services/icons/manage.svg" />
              <MiniCard title="Smart Investments, Informed Decisions" iconSrc="/services/icons/invest.svg" />
            </div>
          </div>
        </section>

        {/* UNLOCK PROPERTY VALUE */}
        <section className="mt-20">
          <SectionHead
            title="Unlock Property Value"
            desc="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <InfoCard
              title="Valuation Mastery"
              desc="Discover the true worth of your property with our expert valuation services."
              iconSrc="/services/icons/value.svg"
            />
            <InfoCard
              title="Strategic Marketing"
              desc="Selling a property requires more than just a listing; it demands a strategic marketing approach."
              iconSrc="/services/icons/find.svg"
            />
            <InfoCard
              title="Negotiation Wizardry"
              desc="Negotiating the best deal is an art, and our negotiation experts are masters of it."
              iconSrc="/services/icons/invest.svg"
            />

            <InfoCard
              title="Closing Success"
              desc="A successful sale is not complete until the closing. We guide you through the intricate closing process."
              iconSrc="/services/icons/manage.svg"
            />

            <div className="lg:col-span-2">
              <WideCta
                title="Unlock the Value of Your Property Today"
                desc="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
                href="/properties"
              />
            </div>
          </div>
        </section>

        {/* PROPERTY MANAGEMENT */}
        <section className="mt-20">
          <SectionHead
            title="Effortless Property Management"
            desc="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <InfoCard
              title="Tenant Harmony"
              desc="Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
              iconSrc="/services/icons/manage.svg"
            />
            <InfoCard
              title="Maintenance Ease"
              desc="Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
              iconSrc="/services/icons/manage.svg"
            />
            <InfoCard
              title="Financial Peace of Mind"
              desc="Managing property finances can be complex. Our financial experts take care of rent collection"
              iconSrc="/services/icons/value.svg"
            />

            <InfoCard
              title="Legal Guardian"
              desc="Stay compliant with property laws and regulations effortlessly."
              iconSrc="/services/icons/invest.svg"
            />

            <div className="lg:col-span-2">
              <WideCta
                title="Experience Effortless Property Management"
                desc="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
                href="/about"
              />
            </div>
          </div>
        </section>

        {/* SMART INVESTMENTS */}
        <section className="mt-20 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="flex items-start gap-4">
                <div className="pt-1">
                  <Image src="/services/stars.svg" alt="" width={22} height={22} />
                </div>
                <div>
                  <h2 className="text-[34px] leading-[40px] font-semibold text-white">
                    Smart Investments,
                    <br />
                    Informed Decisions
                  </h2>
                  <p className="mt-4 text-[13px] leading-[19px] text-white/55">
                    Building a real estate portfolio requires a strategic approach. Estatein&apos;s Investment Advisory Service empowers you to make smart investments and informed decisions.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Card className="relative overflow-hidden services-topo">
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="relative p-7">
                    <h3 className="text-[15px] font-semibold text-white">Unlock Your Investment Potential</h3>
                    <p className="mt-4 text-[13px] leading-[19px] text-white/55">
                      Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/properties"
                        className="inline-flex items-center justify-center w-full h-11 rounded-xl border border-white/10 bg-black/20 text-sm text-white/80 hover:bg-white/5 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard
                title="Market Insight"
                desc="Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions"
                iconSrc="/services/icons/invest.svg"
              />
              <InfoCard
                title="ROI Assessment"
                desc="Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments"
                iconSrc="/services/icons/value.svg"
              />
              <InfoCard
                title="Customized Strategies"
                desc="Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs"
                iconSrc="/services/icons/find.svg"
              />
              <InfoCard
                title="Diversification Mastery"
                desc="Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations"
                iconSrc="/services/icons/manage.svg"
              />
            </div>
          </div>
        </section>

        {/* BOTTOM CTA BAND — uses the ACTUAL cubes image */}
        <section className="mt-14 pb-20">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="absolute inset-0 services-cta-cubes opacity-90" />
            <div className="absolute inset-0 bg-black/25" />
            <div className="relative px-10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-[760px]">
                <h2 className="text-[28px] leading-[34px] font-semibold text-white">
                  Start Your Real Estate Journey Today
                </h2>
                <p className="mt-4 text-[13px] leading-[19px] text-white/55">
                  Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice. Estatein is
                  here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch
                  with our team for personalized assistance.
                </p>
              </div>

              <Link
                href="/properties"
                className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-violet-600 text-sm font-medium text-white hover:bg-violet-500 transition-colors"
              >
                Explore Properties
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}