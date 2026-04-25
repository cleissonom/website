import type { Recommendation } from "@/data/i18n/types"
import { InlineLink } from "@/components/design-system"

export function RecommendationsList({
  items,
  viewProfileLabel,
  opensInNewTabLabel = "opens in a new tab"
}: {
  items: Recommendation[]
  viewProfileLabel: string
  opensInNewTabLabel?: string
}) {
  return (
    <ol className="recommendations">
      {items.map((recommendation, index) => (
        <li key={recommendation.id} className="recommendation-item">
          <details open={index < 2}>
            <summary className="recommendation-summary">
              <span className="recommendation-summary-text">
                <span className="recommendation-name">{recommendation.name}</span>
                <span className="recommendation-context">{recommendation.context}</span>
              </span>
              <span className="recommendation-chevron" aria-hidden="true" />
            </summary>
            <div className="recommendation-content">
              <p className="recommendation-headline">{recommendation.headline}</p>
              {recommendation.quote.map((paragraph, paragraphIndex) => (
                <p key={`${recommendation.id}-${paragraphIndex}`}>{paragraph}</p>
              ))}
              <InlineLink href={recommendation.profileUrl} target="_blank" rel="noreferrer">
                {viewProfileLabel}
                <span className="sr-only"> ({opensInNewTabLabel})</span>
              </InlineLink>
            </div>
          </details>
        </li>
      ))}
    </ol>
  )
}
