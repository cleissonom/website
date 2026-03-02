import type { Recommendation } from "@/data/i18n/types"
import { InlineLink } from "@/components/design-system"

export function RecommendationsList({
  items,
  viewProfileLabel
}: {
  items: Recommendation[]
  viewProfileLabel: string
}) {
  return (
    <ol className="recommendations">
      {items.map((recommendation, index) => (
        <li
          key={`${recommendation.name}-${recommendation.profileUrl}`}
          className="recommendation-item"
        >
          <details open={index < 2}>
            <summary className="recommendation-summary">
              <h3>{recommendation.name}</h3>
              <p className="recommendation-context">{recommendation.context}</p>
            </summary>
            <div className="recommendation-content">
              <p className="recommendation-headline">{recommendation.headline}</p>
              {recommendation.quote.map((paragraph) => (
                <p key={`${recommendation.name}-${paragraph}`}>{paragraph}</p>
              ))}
              <InlineLink href={recommendation.profileUrl} target="_blank" rel="noreferrer">
                {viewProfileLabel}
              </InlineLink>
            </div>
          </details>
        </li>
      ))}
    </ol>
  )
}
