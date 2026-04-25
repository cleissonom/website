import { ButtonLink } from "@/components/design-system"
import { siteIdentity } from "@/data/profile"

export function LinkedInButton({
  label,
  opensInNewTabLabel
}: {
  label: string
  opensInNewTabLabel: string
}) {
  return (
    <ButtonLink
      variant="ghost"
      className="linkedin-button"
      href={siteIdentity.links.linkedin}
      target="_blank"
      rel="noreferrer"
    >
      {label}
      <span className="sr-only"> ({opensInNewTabLabel})</span>
    </ButtonLink>
  )
}
