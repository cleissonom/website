import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/cn"

type LayoutElement = "section" | "article" | "div"

type ButtonVariant = "primary" | "secondary" | "ghost"

const buttonVariantClassNames: Record<ButtonVariant, string> = {
  primary: "primary-button",
  secondary: "secondary-button",
  ghost: "ghost-button"
}

export function Container({
  as = "div",
  className,
  ...props
}: ComponentPropsWithoutRef<"div"> & { as?: "div" | "main" | "header" | "footer" }) {
  if (as === "main") {
    return <main className={cn("container", className)} {...props} />
  }

  if (as === "header") {
    return <header className={cn("container", className)} {...props} />
  }

  if (as === "footer") {
    return <footer className={cn("container", className)} {...props} />
  }

  return <div className={cn("container", className)} {...props} />
}

export function SiteMain({ className, ...props }: ComponentPropsWithoutRef<"main">) {
  return <main className={cn("site-main container", className)} {...props} />
}

export function SectionStack({
  as = "section",
  className,
  ...props
}: ComponentPropsWithoutRef<"section"> & { as?: LayoutElement }) {
  if (as === "article") {
    return <article className={cn("section-stack", className)} {...props} />
  }

  if (as === "div") {
    return <div className={cn("section-stack", className)} {...props} />
  }

  return <section className={cn("section-stack", className)} {...props} />
}

export function Surface({
  as = "section",
  className,
  ...props
}: ComponentPropsWithoutRef<"section"> & { as?: LayoutElement }) {
  if (as === "article") {
    return <article className={cn("surface", className)} {...props} />
  }

  if (as === "div") {
    return <div className={cn("surface", className)} {...props} />
  }

  return <section className={cn("surface", className)} {...props} />
}

export function PageHeader({
  as = "header",
  className,
  ...props
}: ComponentPropsWithoutRef<"header"> & { as?: "header" | "div" }) {
  if (as === "div") {
    return <div className={cn("page-header", className)} {...props} />
  }

  return <header className={cn("page-header", className)} {...props} />
}

export function Eyebrow({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("eyebrow", className)} {...props} />
}

export function Lead({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("lead", className)} {...props} />
}

export function MutedText({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("muted", className)} {...props} />
}

export function Grid({
  className,
  projects = false,
  ...props
}: ComponentPropsWithoutRef<"div"> & { projects?: boolean }) {
  return <div className={cn("grid", projects && "projects-grid", className)} {...props} />
}

export function Card({
  className,
  enableWalletHover = false,
  ...props
}: ComponentPropsWithoutRef<"article"> & { enableWalletHover?: boolean }) {
  return (
    <article className={cn("card", enableWalletHover && "card-wallet", className)} {...props} />
  )
}

export function ChipRow({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("chip-row", className)} {...props} />
}

export function Chip({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return <span className={cn("chip", className)} {...props} />
}

export function ChipButton({
  className,
  active = false,
  ...props
}: ComponentPropsWithoutRef<"button"> & { active?: boolean }) {
  return (
    <button
      className={cn("chip", "chip-button", active && "chip-button-active", className)}
      {...props}
    />
  )
}

export function InlineLink({ className, ...props }: ComponentPropsWithoutRef<"a">) {
  return <a className={cn("inline-link", className)} {...props} />
}

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ComponentPropsWithoutRef<"a"> & { variant?: ButtonVariant }) {
  return <a className={cn(buttonVariantClassNames[variant], className)} {...props} />
}
