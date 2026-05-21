"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { agents, home } from "@/lib/content";
import { agentTone } from "@/lib/agentIcons";

const AUTOPLAY_MS = 5000;

export function AgentShowcase() {
  const { agentShowcase } = home;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = agents.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, total]);

  const goTo = (i: number) => setIndex(((i % total) + total) % total);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  return (
    <Section tone="bone" pad="lg" className="relative overflow-hidden">
      <header className="relative grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <Reveal>
            <Eyebrow tone="ink" number="03">{agentShowcase.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display-section mt-6 text-h2Lg text-ink balance">
              {agentShowcase.title}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={240} className="md:col-span-4">
          <p className="text-body text-ink/70 max-w-prose2 pretty md:text-bodyLg">
            {agentShowcase.sub}
          </p>
        </Reveal>
      </header>

      {/* Carousel — auto-rotating slideshow with personalised per-agent imagery.
          Pauses on hover. Manual prev/next + slide selector. */}
      <Reveal as="div" className="relative mt-16">
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="relative grid gap-8 lg:grid-cols-12 lg:gap-10"
        >
          {/* SLIDE STAGE — left column, holds all 6 slides stacked.
              Only the active slide is visible (opacity); others fade out. */}
          <div
            className="relative aspect-[4/5] overflow-hidden bg-ink lg:col-span-7 lg:aspect-[5/6]"
            aria-roledescription="carousel"
            aria-label="Coach stack — five AI specialists"
          >
            {agents.map((agent, i) => {
              const tone = agentTone[agent.icon];
              const TIcon = tone.Icon;
              const active = i === index;
              return (
                <article
                  key={agent.slug}
                  aria-hidden={!active}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${total}: ${agent.name}`}
                  className={[
                    "absolute inset-0 transition-opacity duration-700 ease-editorial",
                    active ? "opacity-100" : "pointer-events-none opacity-0"
                  ].join(" ")}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={agent.image}
                    alt={agent.imageAlt}
                    className={[
                      "absolute inset-0 h-full w-full object-cover photo-warm transition-transform duration-[1400ms] ease-editorial",
                      active ? "scale-100" : "scale-[1.04]"
                    ].join(" ")}
                  />

                  {/* Top hairline corner mark in agent tone */}
                  <span
                    aria-hidden
                    className="absolute left-6 top-6 z-[3] h-px w-12 bg-teal"
                  />
                  <span
                    aria-hidden
                    className="absolute left-6 top-6 z-[3] h-12 w-px bg-teal"
                  />

                  {/* Top-right jump link */}
                  <div className="absolute right-6 top-6 z-[3]">
                    <Link
                      href={`/how-it-works#${agent.slug}`}
                      aria-label={`Read more about ${agent.name}`}
                      className="flex h-9 w-9 items-center justify-center border border-paper/40 bg-paper/15 text-paper backdrop-blur-sm transition-colors duration-250 hover:border-teal hover:bg-paper/30 hover:text-teal"
                    >
                      <ArrowUpRight size={16} weight="regular" />
                    </Link>
                  </div>

                  {/* Bottom plate — solid dark background sized to text content.
                      A top-fade gradient sits ABOVE the plate so the dark area
                      blends into the photo instead of cutting it off with a hard
                      edge. Tone color reduced to a single teal-anchored hairline so
                      the marketing surface stays parent-brand monochrome. */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t from-ink/[0.95] via-ink/70 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-[3] bg-ink/[0.95] p-7 md:p-10">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="flex h-12 w-12 items-center justify-center border border-paper/20 bg-ink/40 text-paper"
                      >
                        <TIcon size={22} weight="light" />
                      </span>
                      <span className="eyebrow text-paper/65">
                        {tone.label}
                      </span>
                      <span
                        aria-hidden
                        className="ml-1 h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: tone.hex }}
                      />
                    </div>
                    <h3 className="display-section mt-6 text-h2Lg text-paper balance">
                      {agent.name}
                    </h3>
                    <p className="mt-3 text-bodyLg text-paper/85 max-w-[44ch] pretty">
                      {agent.role}
                    </p>
                    <p className="mt-5 hidden md:block max-w-[52ch] text-body text-paper/75 pretty">
                      {agent.description}
                    </p>
                    {/* Produces line — concrete deliverable for this agent.
                        Anchors the abstract role in a real artefact. */}
                    {agent.produces?.[0] ? (
                      <div className="mt-6 flex items-start gap-4 border-t border-paper/15 pt-5">
                        <span className="shrink-0 eyebrow text-teal pt-[3px]">
                          Produces
                        </span>
                        <span className="text-ui text-paper/80 max-w-[46ch] pretty">
                          {agent.produces[0]}
                        </span>
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>

          {/* RIGHT RAIL — slide selector list */}
          <ol className="lg:col-span-5 flex flex-col gap-2">
            {agents.map((agent, i) => {
              const tone = agentTone[agent.icon];
              const { Icon } = tone;
              const active = i === index;
              return (
                <li key={agent.slug}>
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Show ${agent.name}`}
                    aria-current={active}
                    className={[
                      "group relative flex w-full items-center gap-5 p-5 text-left transition-all duration-350 ease-editorial md:p-6",
                      active
                        ? "lift-bone-deep -translate-y-[1px]"
                        : "lift-bone hover:-translate-y-[1px]"
                    ].join(" ")}
                  >
                    {/* Left accent hairline — animates in when active */}
                    <span
                      aria-hidden
                      className={[
                        "absolute left-0 top-0 bottom-0 transition-all duration-450 ease-editorial",
                        active ? "w-[3px]" : "w-px group-hover:w-[2px]"
                      ].join(" ")}
                      style={{ backgroundColor: tone.hex }}
                    />

                    {/* Icon block */}
                    <span
                      aria-hidden
                      className="flex h-12 w-12 shrink-0 items-center justify-center border bg-white/40 md:h-14 md:w-14"
                      style={{
                        borderColor: `${tone.hex}40`,
                        color: tone.hex
                      }}
                    >
                      <Icon size={22} weight="light" />
                    </span>

                    {/* Body */}
                    <div className="min-w-0 flex-1">
                      <h3 className="t-h3 text-h3 leading-[1.15] text-ink">
                        {agent.name}
                      </h3>
                      <p className="mt-2 text-ui text-ink/65 pretty leading-snug">
                        {agent.role}
                      </p>
                    </div>

                    {/* Affordance — active state shows a teal indicator dot */}
                    <span
                      aria-hidden
                      className={[
                        "h-1.5 w-1.5 rounded-full transition-opacity duration-250",
                        active ? "opacity-100" : "opacity-0"
                      ].join(" ")}
                      style={{ backgroundColor: tone.hex }}
                    />
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Carousel control bar — under the slide stage, sits in the left column */}
        <div className="mt-6 flex items-center gap-5 lg:max-w-[58.333%]">
          {/* Prev / Next */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous specialist"
              className="flex h-10 w-10 items-center justify-center border border-ink/15 bg-white/60 text-ink transition-colors duration-250 hover:border-teal hover:text-teal-deep"
            >
              <ArrowLeft size={16} weight="regular" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next specialist"
              className="flex h-10 w-10 items-center justify-center border border-ink/15 bg-white/60 text-ink transition-colors duration-250 hover:border-teal hover:text-teal-deep"
            >
              <ArrowRight size={16} weight="regular" />
            </button>
          </div>

          {/* Slide tick marks */}
          <div className="flex items-center gap-2">
            {agents.map((agent, i) => (
              <button
                key={agent.slug}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-[2px] transition-all duration-450 ease-editorial",
                  i === index ? "w-12 bg-ink" : "w-6 bg-ink/25 hover:bg-ink/50"
                ].join(" ")}
              />
            ))}
          </div>

          <span className="ml-auto text-[11px] uppercase tracking-[0.18em] text-ink/55 tabular">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </Reveal>

      {/* Bottom action — link to detailed page */}
      <Reveal delay={400}>
        <div className="relative mt-14 flex justify-end">
          <Link
            href="/how-it-works"
            className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-ink transition-colors duration-250 hover:text-teal-deep"
          >
            <span>Read each one in detail</span>
            <ArrowUpRight size={16} weight="regular" className="transition-transform duration-350 group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
